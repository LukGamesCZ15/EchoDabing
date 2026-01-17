import { HomePage } from "@/components/pages/HomePage";
import { getChannelStats, getChannelVideos } from "@/lib/youtube";
import { videos as mockVideos } from "@/lib/data";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const [videos, stats] = await Promise.all([
    getChannelVideos(6),
    getChannelStats()
  ]);

  const initialVideos = videos.length > 0 ? videos : mockVideos;

  return <HomePage initialVideos={initialVideos} stats={stats} />;
}
