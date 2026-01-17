import { useEffect, useState } from "react";
import { TeamPageClient } from "@/components/pages/TeamPage";
import { TeamMember } from "@/types";
import { useI18n } from "@/i18n/I18nContext";

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useI18n();

  useEffect(() => {
    fetch('/api/team')
      .then(res => res.json())
      .then(data => setMembers(data))
      .catch(err => console.error("Failed to load team", err))
      .finally(() => setLoading(false));
  }, []);

  return <TeamPageClient initialMembers={members} isLoading={loading} />;
}
