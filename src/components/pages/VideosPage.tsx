"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Play, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { VideoCard } from "@/components/ui/VideoCard";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Video } from "@/types";
import { getVideos } from "@/lib/data";
import { useI18n } from "@/i18n/I18nContext";

interface VideosPageClientProps {
  initialVideos?: Video[];
}

export function VideosPageClient({ initialVideos }: VideosPageClientProps) {
  const { t, locale } = useI18n();
  const mockVideos = getVideos(locale);
  const videos = initialVideos && initialVideos.length > 0 ? initialVideos : mockVideos;
  const [activeCategory, setActiveCategory] = useState("Vše");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredVideos = videos.filter((video) => {
    const matchesCategory = activeCategory === "Vše" || video.category === activeCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Playlists (Mocked by filtering for now)
  const hazbinPlaylist = videos.filter(v => v.category === "Hazbin Hotel").slice(0, 4);
  const helluvaPlaylist = videos.filter(v => v.category === "Helluva Boss").slice(0, 4);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero / Search */}
      <section className="bg-slate-900 border-b border-white/5 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-orange/20 blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-neon-red/10 blur-[150px] mix-blend-screen" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
              {t("videos.heroTitlePrefix")}{" "}
              <span className="text-neon-red neon-text">
                {t("videos.heroTitleHighlight")}
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              {t("videos.heroSubtitle")}
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Search Bar */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative group z-20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-red via-neon-orange to-neon-yellow opacity-30 blur-xl group-hover:opacity-50 transition-all duration-500 rounded-full" />
              <div className="relative flex items-center bg-slate-950/80 backdrop-blur-xl border border-white/20 rounded-full px-8 py-5 shadow-2xl transition-all group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,102,0,0.3)]">
                <Search className="w-6 h-6 text-gray-400 mr-4 group-focus-within:text-neon-orange transition-colors" />
                <input
                  type="text"
                  placeholder={t("videos.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-xl text-white w-full placeholder:text-gray-600 font-medium"
                />
              </div>
            </motion.div>

            {/* Filters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {["Vše", "Hazbin Hotel", "Helluva Boss", "Cirkus", "Music", "Vlog"].map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden group ${
                    activeCategory === cat
                      ? "text-white shadow-[0_0_20px_rgba(255,102,0,0.6)] scale-105"
                      : "bg-slate-900/50 text-gray-400 border border-white/10 hover:border-neon-orange/50 hover:text-white"
                  }`}
                >
                  {activeCategory === cat && (
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-orange to-neon-red" />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {cat === "Vše" && <Layers className="w-4 h-4" />}
                    {cat === "Hazbin Hotel" && <Sparkles className="w-4 h-4" />}
                    {cat}
                  </span>
                </button>
              ))}
            </motion.div>
          </div>
        </div>
        <SectionDivider variant="spikes" position="bottom" color="fill-slate-950" />
      </section>

      {/* Main Grid */}
      <Section className="py-20">
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {t("videos.allVideosHeading")}
            </h2>
            <p className="text-gray-400">
              {t("videos.foundResultsLabel")} {filteredVideos.length}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 bg-slate-900 px-4 py-2 rounded-lg border border-white/5">
            <Filter className="w-4 h-4" />
            <span>{t("videos.filterLabelNewest")}</span>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVideos.slice(0, visibleCount).map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <VideoCard {...video} className="h-full shadow-lg hover:shadow-neon-red/20" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredVideos.length > visibleCount && (
          <div className="text-center mt-16">
             <Button 
              onClick={() => setVisibleCount(prev => prev + 6)}
              variant="outline" 
              size="lg"
              className="min-w-[200px]"
            >
              {t("videos.loadMore")}
            </Button>
          </div>
        )}
      </Section>

    </div>
  );
}
