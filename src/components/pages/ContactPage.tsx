"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { cn } from "@/lib/utils";
import type { Video } from "@/types";
import { useI18n } from "@/i18n/I18nContext";

interface ContactPageProps {
  stats?: {
    subscriberCount: string;
    viewCount: string;
    videoCount: string;
  } | null;
  videos?: Video[];
}

function formatViews(views: string | undefined | null) {
  if (!views) return null;
  const n = Number(views);
  if (!Number.isFinite(n)) return views;
  return new Intl.NumberFormat("cs-CZ").format(n);
}

export function ContactPageClient({ stats, videos }: ContactPageProps) {
  const { t } = useI18n();
  return (
    <div className="pt-20 overflow-hidden">
      <div className="relative h-[50vh] min-h-[400px] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-slate-950 to-slate-950 z-10" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-700/30 blur-[80px] rounded-full opacity-60 z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[60px] rounded-full opacity-40 z-0" />
        
        <div className="relative z-20 text-center space-y-6 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter">
              {t("contact.heroTitlePrefix")}{" "}
              <span className="text-white">
                {t("contact.heroTitleHighlight")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
              {t("contact.heroSubtitle")}
            </p>
          </motion.div>
        </div>

        <SectionDivider variant="wave" position="bottom" color="fill-slate-950" />
      </div>

      <Section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5 z-0 pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
          {/* Info bez formuláře */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">
                {t("contact.howToContactHeading")}
              </h2>
              <p className="text-gray-400 text-lg">
                {t("contact.howToContactText")}
              </p>
              <div className="mt-4 space-y-2 text-gray-300">
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* Socials & Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-12"
          >
            {/* Social Cards */}
            <div className="grid grid-cols-1 gap-4">
              <a
                href="https://discord.gg/JvP9sqkyBU"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-[#5865F2] p-6 transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Discord</h3>
                      <p className="text-white/80">Připoj se k naší komunitě</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <div className="absolute -right-4 -bottom-4 text-white/10 rotate-12">
                  <MessageSquare className="w-32 h-32" />
                </div>
              </a>

              <a
                href="https://instagram.com/echodabing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-6 transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Instagram</h3>
                      <p className="text-white/80">Sleduj zákulisie</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <div className="absolute -right-4 -bottom-4 text-white/10 rotate-12">
                  <Instagram className="w-32 h-32" />
                </div>
              </a>

              <a
                href="https://youtube.com/@Echo.Dabing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-[#FF0000] p-6 transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Youtube className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">YouTube</h3>
                      <p className="text-white/80">Sleduj naše videá</p>
                      {stats && (
                        <div className="text-white/70 text-sm space-y-1 mt-2">
                          {stats.subscriberCount && (
                            <p>Odberatelia: {formatViews(stats.subscriberCount)}</p>
                          )}
                          {stats.viewCount && (
                            <p>Pozretia: {formatViews(stats.viewCount)}</p>
                          )}
                          {stats.videoCount && (
                            <p>Videá: {formatViews(stats.videoCount)}</p>
                          )}
                        </div>
                      )}
                      {videos && videos.length > 0 && (
                        <div className="mt-3 flex gap-2">
                          {videos.slice(0, 3).map((video) => (
                            <div
                              key={video.id}
                              className="w-20 h-12 rounded-lg overflow-hidden border border-white/10"
                            >
                              <img
                                src={
                                  video.thumbnailUrl ||
                                  `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
                                }
                                alt={video.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <div className="absolute -right-4 -bottom-4 text-white/10 rotate-12">
                  <Youtube className="w-32 h-32" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
