import { Video } from "@/types";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

export async function getChannelStats() {
  if (!API_KEY || !CHANNEL_ID) return null;

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    const data = await response.json();
    if (!data.items?.[0]) {
      console.warn("YouTube API: No channel found for ID:", CHANNEL_ID);
      return null;
    }

    const stats = data.items[0].statistics;
    console.log("YouTube API: Loaded channel stats", stats);
    return {
      subscriberCount: stats.subscriberCount,
      viewCount: stats.viewCount,
      videoCount: stats.videoCount,
    };
  } catch (error) {
    console.error("Error fetching channel stats:", error);
    return null;
  }
}

export async function getChannelVideos(maxResults = 50): Promise<Video[]> {
  if (!API_KEY || !CHANNEL_ID) {
    console.warn("YouTube API: Missing API_KEY or CHANNEL_ID in .env.local");
    return [];
  }

  try {
    // 1. Get Uploads Playlist ID
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    const channelData = await channelResponse.json();
    
    if (channelData.error) {
       console.error("YouTube API Error (Channel):", channelData.error.message);
       return [];
    }

    const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    console.log("YouTube API: Uploads Playlist ID:", uploadsPlaylistId);

    if (!uploadsPlaylistId) {
       console.warn("YouTube API: No uploads playlist found");
       return [];
    }

    // 2. Get Videos from Playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${API_KEY}`
    );
    const videosData = await videosResponse.json();
    
    if (!videosData.items) {
      console.warn("YouTube API: No videos found in playlist (items is missing/empty)");
      return [];
    }
    console.log(`YouTube API: Found ${videosData.items.length} videos in playlist`);

    // 3. Get Video Statistics (for views)
    const videoIds = videosData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');
    
    const statsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${videoIds}&key=${API_KEY}`
    );
    const statsData = await statsResponse.json();
    
    if (!statsData.items) return [];

    const videos: Video[] = statsData.items.map((item: any) => {
      const thumbnails = item.snippet.thumbnails;
      const thumbnailUrl = thumbnails.maxres?.url || thumbnails.standard?.url || thumbnails.high?.url || thumbnails.medium?.url || `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;

      return {
        id: item.id,
        title: item.snippet.title,
        youtubeId: item.id,
        thumbnailUrl: thumbnailUrl,
        category: "Ostatní",
        views: formatViews(item.statistics.viewCount),
        date: item.snippet.publishedAt.split('T')[0],
        description: item.snippet.description,
        featured: false,
      };
    });

    // Simple category deduction
    videos.forEach(v => {
      const lowerTitle = v.title.toLowerCase();
      if (lowerTitle.includes("hazbin")) v.category = "Hazbin Hotel";
      else if (lowerTitle.includes("helluva")) v.category = "Helluva Boss";
      else if (lowerTitle.includes("cirkus") || lowerTitle.includes("circus")) v.category = "Cirkus";
      else if (lowerTitle.includes("lackadaisy")) v.category = "Jiné";
      else if (lowerTitle.includes("murder drones")) v.category = "Jiné";
    });

    console.log(`YouTube API: Loaded ${videos.length} videos`);
    return videos;
  } catch (error) {
    console.error("Error fetching channel videos:", error);
    return [];
  }
}

function formatViews(views: string): string {
  if (!views) return "0";
  const n = parseInt(views);
  if (isNaN(n)) return views;
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return views;
}
