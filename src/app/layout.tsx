import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { GoogleAnalytics } from "@/components/layout/GoogleAnalytics";
import { I18nRoot } from "@/i18n/I18nRoot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EchoDabing | Slovenský a český dabing Hazbin Hotel & Helluva Boss",
  description: "Najväčšia česko-slovenská dabingová skupina zameraná na indie animácie. Dabujeme z domu na vlastnom vybavení s profesionálnou kvalitou.",
  keywords: ["dabing", "hazbin hotel", "helluva boss", "slovenský dabing", "český dabing", "echodabing"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EchoDabing",
  "url": "https://echodabing.cz",
  "logo": "https://echodabing.cz/logo.png",
  "sameAs": [
    "https://www.tiktok.com/@Echo.Dabing",
    "https://youtube.com/@Echo.Dabing",
    "https://discord.gg/JvP9sqkyBU"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@echodabing.cz",
    "contactType": "customer service"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Global Animated Background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-red/20 blur-[120px] rounded-full animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-neon-orange/10 blur-[100px] rounded-full mix-blend-screen" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[500px] bg-neon-yellow/10 blur-[100px] rounded-full mix-blend-screen animate-float" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
        </div>

        <I18nRoot>
          <GoogleAnalytics />
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </I18nRoot>
      </body>
    </html>
  );
}
