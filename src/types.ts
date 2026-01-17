export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  projects: string[];
  social: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
    github?: string;
    discord?: string;
  };
  audioSample?: string;
  status?: "active" | "sleeping";
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnailUrl: string;
  category: string;
  views: string;
  date: string;
  description: string;
  featured: boolean;
}
