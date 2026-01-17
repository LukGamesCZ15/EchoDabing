import { useEffect, useState } from "react";
import { VideosPageClient } from "@/components/pages/VideosPage";
import { Video } from "@/types";
import { useI18n } from "@/i18n/I18nContext";

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const { t } = useI18n();

  useEffect(() => {
    fetch('/api/youtube/videos?limit=50')
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(err => console.error("Failed to load videos", err));
  }, []);

  return <VideosPageClient initialVideos={videos} />;
}
