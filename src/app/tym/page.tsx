import { Metadata } from "next";
import { TeamPageClient } from "@/components/pages/TeamPage";
import { getDiscordMembers } from "@/lib/discord";

export const metadata: Metadata = {
  title: "Tým | EchoDabing",
  description: "Seznamte se s našimi dabéry, zvukaři a tvůrci.",
};

export const revalidate = 3600; // Revalidate every hour

export default async function TeamPage() {
  const members = await getDiscordMembers();
  return <TeamPageClient initialMembers={members} />;
}
