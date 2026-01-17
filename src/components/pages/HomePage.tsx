"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowRight, Star, Youtube, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { VideoCard } from "@/components/ui/VideoCard";
import { Link } from "react-router-dom";
import { GlitchText } from "@/components/ui/GlitchText";
import type { Video } from "@/types";
import { useI18n } from "@/i18n/I18nContext";

interface HomePageProps {
  initialVideos: Video[];
  stats: {
    subscriberCount: string;
    viewCount: string;
    videoCount: string;
  } | null;
}

export function HomePage({ initialVideos, stats }: HomePageProps) {
  const featuredVideo = initialVideos.find(v => v.featured) || initialVideos[0];
  const recentVideos = initialVideos.slice(0, 3);
  const { t } = useI18n();
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  // Format stats for display
  const displayStats = [
    { 
      label: t("home.stats.subscribers"),
      value: stats ? stats.subscriberCount : "70+", 
      icon: <Star className="w-6 h-6 text-neon-yellow" /> 
    },
    { 
      label: t("home.stats.views"),
      value: stats ? stats.viewCount : "1,699+", 
      icon: <Play className="w-6 h-6 text-neon-red" /> 
    },
    { 
      label: t("home.stats.videos"),
      value: stats ? stats.videoCount : "9+", 
      icon: <Youtube className="w-6 h-6 text-neon-orange" /> 
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 z-20" />
          {featuredVideo && (
            <iframe
              className="w-full h-full scale-[1.35] opacity-60"
              src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${featuredVideo.youtubeId}&controls=0&showinfo=0&rel=0&start=30`}
              allow="autoplay; encrypted-media"
              style={{ pointerEvents: 'none' }}
            />
          )}
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900/50 border border-neon-red/50 text-neon-red mb-8 backdrop-blur-md hover:bg-neon-red/10 transition-colors cursor-default animate-pulse-glow"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="font-bold tracking-wide text-sm uppercase">
                {t("home.hero.badge")}
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-none tracking-tighter relative">
              <GlitchText text={t("home.hero.title")} />
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              {t("home.hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                variant="neon"
                className="h-14 px-10 text-lg rounded-full group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center">
                  <Youtube className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                  <span>{t("home.hero.subscribeChannel")}</span>
                </span>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gray-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section (Floating) */}
      <section className="relative z-20 -mt-20 container mx-auto px-4">
        <div className="glass rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center shadow-2xl shadow-neon-red/20">
          {displayStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group">
              <div className="p-4 rounded-full bg-slate-800/50 mb-2 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Videos Grid */}
      <Section className="py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-500">
                {t("home.recent.heading")}
              </span>
              <Sparkles className="absolute -top-6 -right-8 w-8 h-8 text-yellow-400 animate-pulse" />
            </h2>
            <p className="text-xl text-gray-400">
              {t("home.recent.subheading")}
            </p>
          </div>
          <Link to="/video">
            <Button variant="outline" className="rounded-full px-6 hover:bg-neon-blue/10 hover:text-neon-blue hover:border-neon-blue/50 transition-all">
                {t("home.recent.allVideos")} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <VideoCard {...video} />
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
