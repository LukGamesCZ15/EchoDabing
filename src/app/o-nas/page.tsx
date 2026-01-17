import { Metadata } from "next";
import { AboutPageClient } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "O nás | EchoDabing",
  description: "Přečtěte si příběh EchoDabingu, naši historii, misi a seznamte se s týmem.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
