import { Play, Calendar, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoProps {
  id: string;
  title: string;
  youtubeId: string;
  thumbnailUrl?: string;
  views: string;
  date: string;
  category: string;
  description: string;
  className?: string;
}

export const VideoCard = ({ id, title, youtubeId, thumbnailUrl, views, date, category, description, className }: VideoProps) => {
  return (
    <a 
      href={`https://www.youtube.com/watch?v=${youtubeId}`} 
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group block h-full cursor-pointer", className)}
    >
      <div className="glass glass-hover rounded-xl overflow-hidden shadow-lg h-full flex flex-col relative group-hover:-translate-y-2 transition-transform duration-300">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={thumbnailUrl || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-red to-neon-orange flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,102,0,0.6)] transform scale-50 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-8 h-8 ml-1 fill-current" />
            </div>
          </div>
          <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 shadow-lg">
            {category}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col flex-1 relative z-10">
          <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-red group-hover:to-neon-orange transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-1 leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
            <div className="flex items-center gap-1.5 bg-slate-800/50 px-2 py-1 rounded-md">
              <Eye className="w-3.5 h-3.5 text-neon-orange" /> {views}
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800/50 px-2 py-1 rounded-md">
              <Calendar className="w-3.5 h-3.5 text-gray-400" /> {date}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
