import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { TeamMember } from '../src/types';

// Load env vars from root .env
dotenv.config({ path: path.join(process.cwd(), '.env') });
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// --- Discord Logic ---

const DISCORD_API_BASE = "https://discord.com/api/v10";
const CACHE_FILE = path.join(process.cwd(), ".discord-cache.json");
const CACHE_TTL = 3600 * 1000; // 1 hour

async function getFromCache(key: "team" | "dabers"): Promise<TeamMember[] | null> {
  try {
    const data = await fs.readFile(CACHE_FILE, "utf-8");
    const cache = JSON.parse(data);
    const item = cache[key];
    
    if (item && item.timestamp && (Date.now() - item.timestamp < CACHE_TTL)) {
      return item.data;
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function saveToCache(key: "team" | "dabers", data: TeamMember[]) {
  try {
    let cache: any = {};
    try {
      const fileContent = await fs.readFile(CACHE_FILE, "utf-8");
      cache = JSON.parse(fileContent);
    } catch (e) {
      // ignore
    }
    
    cache[key] = {
      data,
      timestamp: Date.now()
    };
    
    await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2));
  } catch (e) {
    console.error("Failed to write cache", e);
  }
}

async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs: number) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

function isExcluded(userId: string): boolean {
  const excludedIds = (process.env.DISCORD_EXCLUDED_USER_IDS || "")
    .split(",")
    .map(id => id.trim())
    .filter(Boolean);
  return excludedIds.includes(userId);
}

// Helper to get static data if needed (simplified fallback)
async function getStaticData() {
  // In a real scenario, we might want to read src/lib/data.ts or similar.
  // For now, return empty or minimal if envs are missing to avoid complex TS imports cross-boundary.
  return [];
}

app.get('/api/team', async (req, res) => {
  const cached = await getFromCache("team");
  if (cached) return res.json(cached);

  const token = process.env.DISCORD_BOT_TOKEN;
  const guildId = process.env.DISCORD_GUILD_ID;

  if (!token || !guildId) {
    return res.json(await getStaticData());
  }

  try {
    const [rolesResponse, membersResponse] = await Promise.all([
      fetchWithTimeout(`${DISCORD_API_BASE}/guilds/${guildId}/roles`, {
        headers: { Authorization: `Bot ${token}` }
      }, 5000),
      fetchWithTimeout(`${DISCORD_API_BASE}/guilds/${guildId}/members?limit=1000`, {
        headers: { Authorization: `Bot ${token}` }
      }, 5000)
    ]);

    if (!rolesResponse.ok || !membersResponse.ok) {
        throw new Error("Discord API error");
    }

    const roles = await rolesResponse.json();
    const members = await membersResponse.json();

    const normalize = (value: string) =>
        String(value || "")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
  
      const ROLE_PRIORITY: Record<string, number> = {
        [normalize("Majiteľ")]: 1,
        [normalize("Zástupca⏰")]: 2,
        [normalize("A.dmin")]: 2,
        [normalize("Helper")]: 3,
        [normalize("editor")]: 3,
        [normalize("S𝚌𝚎𝚗𝚊𝚛𝚒𝚜𝚝𝚊📜")]: 3,
        [normalize("Grafik/Editor")]: 3
      };
  
      const rolesById = new Map<string, any>(
        roles.map((r: any) => [r.id as string, r])
      );
  
      const aTeam = members
        .map((m: any) => {
          const user = m.user;
          const roleIds = m.roles as string[];
  
          let bestRoleName: string | null = null;
          let bestPriority = Infinity;
  
          for (const roleId of roleIds) {
            const role = rolesById.get(roleId);
            if (!role) continue;
            const name: string = role.name;
            const priority = ROLE_PRIORITY[normalize(name)];
            if (priority && priority < bestPriority) {
              bestPriority = priority;
              bestRoleName = name;
            }
          }
  
          if (!bestRoleName) return null;
          if (isExcluded(user.id)) return null;
  
          const avatarUrl = user.avatar
            ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`
            : "https://cdn.discordapp.com/embed/avatars/0.png";
  
          return {
            id: user.id,
            name: m.nick || user.global_name || user.username,
            role: bestRoleName,
            bio: "",
            image: avatarUrl,
            projects: [],
            social: {},
            priority: bestPriority
          };
        })
        .filter(Boolean);
  
      aTeam.sort((a: any, b: any) => {
        if (a.priority !== b.priority) return a.priority - b.priority;
        return a.name.localeCompare(b.name, "cs");
      });
  
      const result = aTeam.map(({ priority, ...rest }: any) => rest);
      await saveToCache("team", result);
      res.json(result);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch team" });
  }
});

app.get('/api/dabers', async (req, res) => {
    const cached = await getFromCache("dabers");
    if (cached) return res.json(cached);
  
    const token = process.env.DISCORD_BOT_TOKEN;
    const guildId = process.env.DISCORD_GUILD_ID;
  
    if (!token || !guildId) {
      return res.json(await getStaticData());
    }
  
    try {
      const [rolesResponse, membersResponse] = await Promise.all([
        fetchWithTimeout(`${DISCORD_API_BASE}/guilds/${guildId}/roles`, {
          headers: { Authorization: `Bot ${token}` }
        }, 5000),
        fetchWithTimeout(`${DISCORD_API_BASE}/guilds/${guildId}/members?limit=1000`, {
          headers: { Authorization: `Bot ${token}` }
        }, 5000)
      ]);
  
      if (!rolesResponse.ok || !membersResponse.ok) throw new Error("Discord API error");
  
      const roles = await rolesResponse.json();
      const members = await membersResponse.json();
      
      const normalize = (value: string) =>
        String(value || "")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
  
      const DABER_ROLE_NAMES = [
        "d.𝕯𝖆𝖇é𝖗🎙️",
        "Mini dabér",
        "🎪TADC dabers🎪"
      ];
  
      const daberRoleIds = new Set(
        roles
          .filter((r: any) => DABER_ROLE_NAMES.includes(r.name as string))
          .map((r: any) => r.id as string)
      );
  
      const isNameMatch = (name: string, keywords: string[]) => {
        const value = String(name || "");
        const lower = normalize(value);
        return (
          keywords.some((k) => lower.includes(k)) ||
          value === "Aktivný🟢" ||
          value === "Neaktivný🛑"
        );
      };
  
      const inactiveRoleIds = new Set(
        roles
          .filter((r: any) =>
            isNameMatch(r.name, ["neaktivny", "neaktívny", "neaktivní", "inactive"])
          )
          .map((r: any) => r.id as string)
      );
  
      const activeRoleIds = new Set(
        roles
          .filter((r: any) =>
            isNameMatch(r.name, ["aktivny", "aktívny", "aktivní", "active"])
          )
          .map((r: any) => r.id as string)
      );
  
      const dabers = members
        .map((m: any) => {
          const user = m.user;
          const roleIds = m.roles as string[];
  
          const hasDaber = roleIds.some((id: string) => daberRoleIds.has(id));
          if (!hasDaber || isExcluded(user.id)) return null;
  
          const memberRoleId = roleIds.find((id: string) => daberRoleIds.has(id));
          const memberRole = roles.find((r: any) => r.id === memberRoleId);
          const roleName = memberRole ? memberRole.name : "Dabér";
  
          const hasInactive = roleIds.some((id: string) => inactiveRoleIds.has(id));
          const hasActive = roleIds.some((id: string) => activeRoleIds.has(id));
          let status = "active";
          if (hasInactive) status = "sleeping";
          
          const avatarUrl = user.avatar
            ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`
            : "https://cdn.discordapp.com/embed/avatars/0.png";
  
          return {
            id: user.id,
            name: m.nick || user.global_name || user.username,
            role: roleName,
            bio: "",
            image: avatarUrl,
            projects: [],
            social: {},
            status
          };
        })
        .filter(Boolean);
  
      dabers.sort((a: any, b: any) => a.name.localeCompare(b.name, "cs"));
  
      await saveToCache("dabers", dabers);
      res.json(dabers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch dabers" });
    }
  });

// --- YouTube Logic ---

const YT_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || process.env.YOUTUBE_API_KEY;
const YT_CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || process.env.YOUTUBE_CHANNEL_ID;

app.get('/api/youtube/stats', async (req, res) => {
    if (!YT_API_KEY || !YT_CHANNEL_ID) return res.json(null);
    try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YT_CHANNEL_ID}&key=${YT_API_KEY}`
        );
        const data = await response.json();
        if (!data.items?.[0]) return res.json(null);
    
        const stats = data.items[0].statistics;
        res.json({
          subscriberCount: stats.subscriberCount,
          viewCount: stats.viewCount,
          videoCount: stats.videoCount,
        });
    } catch (e) {
        res.status(500).json({ error: "YT Error" });
    }
});

app.get('/api/youtube/videos', async (req, res) => {
    if (!YT_API_KEY || !YT_CHANNEL_ID) return res.json([]);
    const maxResults = req.query.limit || 50;

    try {
        // 1. Get Uploads Playlist
        const channelResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${YT_CHANNEL_ID}&key=${YT_API_KEY}`
        );
        const channelData = await channelResponse.json();
        const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
        
        if (!uploadsPlaylistId) return res.json([]);

        // 2. Get Videos
        const videosResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${YT_API_KEY}`
        );
        const videosData = await videosResponse.json();
        if (!videosData.items) return res.json([]);

        // 3. Get Stats
        const videoIds = videosData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');
        const statsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${videoIds}&key=${YT_API_KEY}`
        );
        const statsData = await statsResponse.json();
        
        if (!statsData.items) return res.json([]);

        const videos = statsData.items.map((item: any) => {
            const thumbnails = item.snippet.thumbnails;
            const thumbnailUrl = thumbnails.maxres?.url || thumbnails.standard?.url || thumbnails.high?.url || thumbnails.medium?.url || `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
      
            return {
              id: item.id,
              title: item.snippet.title,
              youtubeId: item.id,
              thumbnailUrl,
              category: "Dabing", // Default
              views: item.statistics.viewCount,
              date: item.snippet.publishedAt,
              description: item.snippet.description,
              featured: false,
            };
        });

        res.json(videos);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "YT Error" });
    }
});

import { getChannelVideos, getChannelStats } from '../src/lib/youtube';

app.get('/api/youtube/videos', async (req, res) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit as string) : 50;
        const videos = await getChannelVideos(limit);
        res.json(videos);
    } catch (error) {
        console.error("Failed to fetch videos", error);
        res.status(500).json({ error: "Failed to fetch videos" });
    }
});

app.get('/api/youtube/stats', async (req, res) => {
    try {
        const stats = await getChannelStats();
        res.json(stats);
    } catch (error) {
        console.error("Failed to fetch stats", error);
        res.status(500).json({ error: "Failed to fetch stats" });
    }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
