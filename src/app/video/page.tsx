import { Metadata } from "next";
import { VideosPageClient } from "@/components/pages/VideosPage";
import { getChannelVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Videá | EchoDabing",
  description: "Pozrite si našu kompletnú knižnicu českého a slovenského dabingu pre Hazbin Hotel, Helluva Boss a ďalšie projekty.",
};

export const revalidate = 3600;

export default async function VideosPage() {
  const videos = await getChannelVideos(50);
  return <VideosPageClient initialVideos={videos} />;
}
