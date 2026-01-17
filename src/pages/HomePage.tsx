import { useEffect, useState } from "react";
import { HomePage as HomePageComponent } from "@/components/pages/HomePage";
import type { Video } from "@/types";

export default function HomePage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [stats, setStats] = useState<{ subscriberCount: string; viewCount: string; videoCount: string } | null>(null);

  useEffect(() => {
    fetch('/api/youtube/videos?limit=6')
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(err => console.error("Failed to load videos", err));

    fetch('/api/youtube/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error("Failed to load stats", err));
  }, []);

  return <HomePageComponent initialVideos={videos} stats={stats} />;
}
