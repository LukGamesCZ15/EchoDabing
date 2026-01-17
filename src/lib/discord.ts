
import fs from "fs/promises";
import path from "path";
import { TeamMember } from "@/types";

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

export async function getDiscordMembers(): Promise<TeamMember[]> {
  const token = process.env.DISCORD_BOT_TOKEN;
  const guildId = process.env.DISCORD_GUILD_ID;
  
  if (!token || !guildId) {
    console.warn("Discord credentials missing. Using static data.");
    const { teamMembers } = await import("./data");
    return teamMembers;
  }

  const cached = await getFromCache("team");
  if (cached) return cached;

  try {
    const [rolesResponse, membersResponse] = await Promise.all([
      fetchWithTimeout(
        `${DISCORD_API_BASE}/guilds/${guildId}/roles`,
        {
          headers: { Authorization: `Bot ${token}` }
        },
        2000
      ),
      fetchWithTimeout(
        `${DISCORD_API_BASE}/guilds/${guildId}/members?limit=1000`,
        {
          headers: { Authorization: `Bot ${token}` }
        },
        2000
      )
    ]);

    if (!rolesResponse.ok) {
      const errorText = await rolesResponse.text();
      throw new Error(`Failed to fetch roles: ${rolesResponse.status} ${rolesResponse.statusText} - ${errorText}`);
    }
    if (!membersResponse.ok) {
      const errorText = await membersResponse.text();
      throw new Error(`Failed to fetch members: ${membersResponse.status} ${membersResponse.statusText} - ${errorText}`);
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

        if (!bestRoleName) {
          return null;
        }

        if (isExcluded(user.id)) {
          return null;
        }

        const avatarUrl = user.avatar
          ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`
          : "https://cdn.discordapp.com/embed/avatars/0.png";

        const displayRoleName = bestRoleName;

        return {
          id: user.id,
          name: m.nick || user.global_name || user.username,
          role: displayRoleName,
          bio: "",
          image: avatarUrl,
          projects: [],
          social: {},
          audioSample: undefined,
          priority: bestPriority
        };
      })
      .filter(Boolean) as Array<TeamMember & { priority: number }>;

    aTeam.sort((a, b) => {
      if (a.priority !== b.priority) return a.priority - b.priority;
      return a.name.localeCompare(b.name, "cs");
    });

    const result = aTeam.map(({ priority, ...rest }) => rest);
    await saveToCache("team", result);
    return result;

  } catch (error) {
    console.error("Error fetching Discord members:", error);
    const { teamMembers } = await import("./data");
    return teamMembers;
  }
}

export async function getDaberMembers(): Promise<TeamMember[]> {
  const token = process.env.DISCORD_BOT_TOKEN;
  const guildId = process.env.DISCORD_GUILD_ID;
  
  if (!token || !guildId) {
    console.warn("Discord credentials missing. Using static data for dabers.");
    const { teamMembers } = await import("./data");
    return teamMembers;
  }

  const cached = await getFromCache("dabers");
  if (cached) return cached;

  try {
    const [rolesResponse, membersResponse] = await Promise.all([
      fetchWithTimeout(
        `${DISCORD_API_BASE}/guilds/${guildId}/roles`,
        {
          headers: { Authorization: `Bot ${token}` }
        },
        2000
      ),
      fetchWithTimeout(
        `${DISCORD_API_BASE}/guilds/${guildId}/members?limit=1000`,
        {
          headers: { Authorization: `Bot ${token}` }
        },
        2000
      )
    ]);

    if (!rolesResponse.ok) {
      const errorText = await rolesResponse.text();
      throw new Error(`Failed to fetch roles: ${rolesResponse.status} ${rolesResponse.statusText} - ${errorText}`);
    }
    if (!membersResponse.ok) {
      const errorText = await membersResponse.text();
      throw new Error(`Failed to fetch members: ${membersResponse.status} ${membersResponse.statusText} - ${errorText}`);
    }

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

    const dabers: TeamMember[] = members
      .map((m: any): TeamMember | null => {
        const user = m.user;
        const avatarUrl = user.avatar
          ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`
          : "https://cdn.discordapp.com/embed/avatars/0.png";

        const roleIds = m.roles as string[];

        const hasDaber = roleIds.some((id) => daberRoleIds.has(id));
        if (!hasDaber || isExcluded(user.id)) {
          return null;
        }

        const memberRoleId = roleIds.find((id) => daberRoleIds.has(id));
        const memberRole = roles.find((r: any) => r.id === memberRoleId);
        const roleName = memberRole ? memberRole.name : "Dabér";

        const hasInactive = roleIds.some((id) => inactiveRoleIds.has(id));
        const hasActive = roleIds.some((id) => activeRoleIds.has(id));
        let status: "active" | "sleeping";
        if (hasActive) {
          status = "active";
        } else if (hasInactive) {
          status = "sleeping";
        } else {
          status = "active";
        }

        const result: TeamMember = {
          id: user.id,
          name: m.nick || user.global_name || user.username,
          role: roleName,
          bio: "",
          image: avatarUrl,
          projects: [],
          social: {},
          audioSample: undefined,
          status
        };

        return result;
      })
      .filter(Boolean) as TeamMember[];

    dabers.sort((a: TeamMember, b: TeamMember) => a.name.localeCompare(b.name, "cs"));

    await saveToCache("dabers", dabers);
    return dabers;
  } catch (error) {
    console.error("Error fetching Discord dabers:", error);
    const { teamMembers } = await import("./data");
    return teamMembers;
  }
}
