import { Metadata } from "next";
import { ContactPageClient } from "@/components/pages/ContactPage";
import { getChannelStats, getChannelVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Kontakt | EchoDabing",
  description: "Kontaktujte nás pro spolupráci, dotazy nebo casting.",
};

export const revalidate = 3600;

export default async function ContactPage() {
  const [stats, videos] = await Promise.all([
    getChannelStats(),
    getChannelVideos(3),
  ]);

  return <ContactPageClient stats={stats} videos={videos} />;
}
