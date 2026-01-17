import { useEffect, useState } from "react";
import { TeamPageClient } from "@/components/pages/TeamPage";
import { TeamMember } from "@/types";

export default function DabersPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dabers")
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((err) => console.error("Failed to load dabers", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <TeamPageClient
      initialMembers={members}
      isLoading={loading}
      variant="dabers"
      title={
        <h1 className="text-6xl md:text-9xl font-bold mb-6 tracking-tighter">
          Naši <span className="text-neon-orange neon-text">Dabéri</span>
        </h1>
      }
      subtitle={
        <>
          Hlasy, ktoré počuješ v Hazbin Hotel, Helluva Boss, Digital Circus a
          ďalších projektoch. Práve títo ľudia dávajú postavám{" "}
          <span className="text-white font-bold">emócie, humor a osobnosť</span>,
          aby slovenský aj český dabing zneli čo najprirodzenejšie k originálu.
        </>
      }
    />
  );
}
