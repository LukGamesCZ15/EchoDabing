"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { videos, getStory, getStats, getFaq } from "@/lib/data";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nContext";
import { LucideIcon } from "lucide-react";

type YoutubeStats = {
  subscriberCount: string;
  viewCount: string;
  videoCount: string;
};

export function AboutPageClient() {
  const introVideo = videos.find(v => v.category === "Vlog") || videos[0];
  const { t, locale } = useI18n();
  const [ytStats, setYtStats] = useState<YoutubeStats | null>(null);

  const story = getStory(locale);
  const stats = getStats(locale);
  const faq = getFaq(locale);

  useEffect(() => {
    fetch("/api/youtube/stats")
      .then((res) => res.json())
      .then((data) => setYtStats(data))
      .catch(() => {});
  }, []);

  return (
    <div className="pt-20">
      {/* Intro Section */}
      <Section className="text-center space-y-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
            {t("about.headingPrefix")}{" "}
            <span className="text-neon-red neon-text">
              {t("about.headingHighlight")}
            </span>
          </h1>
          <div className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed space-y-6 text-left bg-slate-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
            {story.map((item: any, index: number) => {
              if (item.type === "paragraph") {
                return (
                  <p 
                    key={index} 
                    className={cn(
                      item.style === "quote" && "font-bold text-white text-xl border-l-4 border-neon-red pl-4"
                    )}
                  >
                    {item.content?.map((segment: any, i: number) => (
                      <span 
                        key={i} 
                        className={cn(
                          segment.highlight && segment.highlightColor,
                          segment.highlight && !segment.highlightColor && "text-neon-red",
                          segment.italic && "italic",
                          segment.underline && "underline decoration-wavy",
                          segment.style === "bold" && "font-bold"
                        )}
                      >
                        {segment.text}
                      </span>
                    ))}
                  </p>
                );
              }
              if (item.type === "divider") {
                return <div key={index} className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />;
              }
              if (item.type === "signature") {
                return (
                  <p key={index} className="text-right text-gray-400 mt-8 font-mono text-sm">
                    {item.text}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </motion.div>
      </Section>





      <Section className="py-32">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center shadow-2xl shadow-neon-red/20">
          {stats.map((stat, index) => {
            const IconComponent = (Icons as any)[stat.icon] as LucideIcon;
            let value = "–";
            if (ytStats) {
              if ((stat as any).id === "subscribers") value = ytStats.subscriberCount;
              if ((stat as any).id === "views") value = ytStats.viewCount;
              if ((stat as any).id === "videos") value = ytStats.videoCount;
            }
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, translateY: -10 }}
                className="flex flex-col items-center gap-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-slate-900/50 rounded-full flex items-center justify-center text-neon-orange group-hover:text-white group-hover:bg-neon-orange group-hover:shadow-[0_0_30px_rgba(255,102,0,0.6)] transition-all duration-500 border border-white/10">
                  {IconComponent && <IconComponent className="w-8 h-8 md:w-10 md:h-10" />}
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tighter">{value}</h3>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </motion.div>
            );
          })}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          {t("about.faqTitle")}{" "}
          <span className="text-neon-red">
            {t("about.faqHighlight")}
          </span>
        </h2>
        <Accordion items={faq} />
      </Section>
    </div>
  );
}
