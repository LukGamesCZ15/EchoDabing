import { Metadata } from "next";
import { TeamPageClient } from "@/components/pages/TeamPage";
import { getDaberMembers } from "@/lib/discord";

export const metadata: Metadata = {
  title: "Dabéři | EchoDabing",
  description: "Seznamte se s našimi dabéry.",
};

export const revalidate = 3600;

export default async function DaberPage() {
  const members = await getDaberMembers();
  return (
    <TeamPageClient 
      initialMembers={members}
      variant="dabers" 
      title={
        <h1 className="text-6xl md:text-9xl font-bold mb-6 tracking-tighter">
          Naši <span className="text-neon-orange neon-text">Dabéři</span>
        </h1>
      }
      subtitle={
        <>
          Hlasy, které slyšíš v Hazbin Hotelu, Helluva Boss, Digital Circus a dalších projektech.{" "}
          Právě tihle lidé dávají postavám{" "}
          <span className="text-white font-bold">emoce, humor a osobnost</span>, aby čeština zněla stejně přirozeně jako originál.
        </>
      }
    />
  );
}
