"use client";

import { useState } from "react";
import { Mic, Globe, Instagram, Twitter, Youtube, PlayCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { getTeamMembers } from "@/lib/data";
import { TeamMember } from "@/types";
import { useI18n } from "@/i18n/I18nContext";

interface TeamPageClientProps {
  initialMembers?: TeamMember[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  variant?: "team" | "dabers";
  isLoading?: boolean;
}

export function TeamPageClient({ initialMembers, title, subtitle, variant = "team", isLoading = false }: TeamPageClientProps) {
  const { locale, t } = useI18n();
  const staticMembers = getTeamMembers(locale);
  const members = initialMembers && initialMembers.length > 0 ? initialMembers : staticMembers;
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeMembers = filteredMembers.filter(member => member.status !== "sleeping");
  const sleepingMembers = filteredMembers.filter(member => member.status === "sleeping");

  const hasStatusInfo = members.some(member => member.status);

   const totalMembers = members.length;
   const daberRoleNames = ["d.𝕯𝖆𝖇é𝖗🎙️", "Mini dabér", "🎪TADC dabers🎪", "Dabér"];
   const totalDabers = members.filter(member => daberRoleNames.includes(member.role)).length;
   const activeCount = members.filter(member => member.status !== "sleeping").length;
   const sleepingCount = members.filter(member => member.status === "sleeping").length;

  const playAudio = (url: string) => {
    alert(`${t("team.demoAlertPrefix")}: ${url} (Demo)`);
  };

  return (
    <div className="pt-20">
      {/* Hero Collage */}
      <section className="relative py-32 bg-slate-900 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 flex flex-wrap opacity-10 rotate-12 scale-125 pointer-events-none blur-sm">
          {members.slice(0, 12).map((m, i) => (
            <div key={i} className="w-1/4 h-64 relative overflow-hidden m-2 rounded-xl">
              <img src={m.image} className="w-full h-full object-cover" alt="" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-red/20 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div>
            {title ? (
              <div className="text-6xl md:text-9xl font-bold mb-6 tracking-tighter">
                {title}
              </div>
            ) : (
              <h1 className="text-6xl md:text-9xl font-bold mb-6 tracking-tighter">
                Náš <span className="text-neon-orange neon-text">Tým</span>
              </h1>
            )}
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light mb-6">
              {subtitle || (
                <>
                  {locale === "cs" ? (
                    <>
                      Jsme parta dabérů, zvukařů, překladatelů a tvůrců, kterou spojuje{" "}
                      <span className="text-white font-bold">láska k animaci</span>, hudbě a vyprávění příběhů.{" "}
                      Ve svém volném čase proměňujeme fanouškovské projekty v český a slovenský dabing na úrovni profesionálních studií.
                    </>
                  ) : (
                    <>
                      Sme partia dabérov, zvukárov, prekladateľov a tvorcov, ktorú spája{" "}
                      <span className="text-white font-bold">láska k animácii</span>, hudbe a rozprávaniu príbehov.{" "}
                      Vo voľnom čase meníme fanúšikovské projekty na český a slovenský dabing na úrovni profesionálnych štúdií.
                    </>
                  )}
                </>
              )}
            </p>

            <div className="text-sm md:text-base text-gray-400 max-w-xl mx-auto mb-8 space-y-1">
            </div>

            {/* Search Input */}
            <div className="max-w-xl mx-auto relative group">
              <div className="absolute inset-0 bg-neon-orange/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-gray-400 group-focus-within:text-neon-orange transition-colors" />
                  <input 
                  type="text"
                  placeholder={t("team.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-orange/50 focus:ring-1 focus:ring-neon-orange/50 transition-all shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <SectionDivider variant="wave" position="bottom" color="fill-slate-950" />
      </section>

      <Section className="py-24">
        {isLoading ? (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch animate-pulse">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="glass rounded-3xl overflow-hidden h-80 bg-slate-900/50 border border-white/5"></div>
             ))}
           </div>
        ) : filteredMembers.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto border border-white/10 mb-6">
              <Search className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {t("team.emptyTitle")}
            </h3>
            <p className="text-gray-400">
              {t("team.emptyDescription")}
            </p>
            <Button 
              variant="outline" 
              className="mt-6"
              onClick={() => setSearchQuery("")}
            >
              {t("team.clearFilter")}
            </Button>
          </div>
        ) : (
          <div className="space-y-16">
            {activeMembers.length > 0 && (
              <div className="space-y-8">
                <div className="text-center text-gray-400 mb-4">
                  {locale === "cs" ? (
                    <>
                      {variant === "team" ? (
                        <p>
                          V týmu je aktuálně{" "}
                          <span className="text-white font-semibold">{totalMembers}</span>{" "}
                          lidí.
                        </p>
                      ) : (
                        <p>
                          Aktuálně máme{" "}
                          <span className="text-white font-semibold">{totalMembers}</span>{" "}
                          dabérů v týmu.
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      {variant === "team" ? (
                        <p>
                          V tíme je aktuálne{" "}
                          <span className="text-white font-semibold">{totalMembers}</span>{" "}
                          ľudí.
                        </p>
                      ) : (
                        <p>
                          Aktuálne máme{" "}
                          <span className="text-white font-semibold">{totalMembers}</span>{" "}
                          dabérov v tíme.
                        </p>
                      )}
                    </>
                  )}
                </div>
                {hasStatusInfo && (
                  <h2 className="text-3xl font-bold text-white text-center">
                    {t("team.activeSectionTitle")}
                  </h2>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  {activeMembers.map((member) => (
                    <div
                      key={member.id}
                      className="glass rounded-3xl overflow-hidden group hover:border-neon-orange/50 hover:shadow-[0_0_40px_rgba(255,102,0,0.15)] transition-all duration-500 flex flex-col md:flex-row hover:-translate-y-2 w-full max-w-2xl mx-auto"
                    >
                      <div className="md:w-2/5 relative h-80 md:h-auto overflow-hidden">
                        <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="p-8 md:w-3/5 flex flex-col justify-between relative bg-slate-900/60">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
                          {member.audioSample && (
                            <button 
                              onClick={() => playAudio(member.audioSample!)}
                              className="w-12 h-12 rounded-full bg-neon-orange text-white flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(255,102,0,0.6)] transition-all"
                              title="Přehrát hlasovou ukázku"
                            >
                              <PlayCircle className="w-6 h-6" />
                            </button>
                          )}
                        </div>

                        <div className="max-w-full overflow-hidden">
                          <h2 className="block break-words text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-neon-orange transition-colors">
                            {member.name}
                          </h2>
                          <p className="text-neon-orange font-bold uppercase tracking-widest text-xs mb-6 border-l-2 border-neon-orange pl-3">
                            {member.role}
                          </p>
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-white/5">
                          {member.social.twitter && (
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                              <Twitter className="w-4 h-4" />
                            </a>
                          )}
                          {member.social.instagram && (
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                              <Instagram className="w-4 h-4" />
                            </a>
                          )}
                          {member.social.youtube && (
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                              <Youtube className="w-4 h-4" />
                            </a>
                          )}
                          {member.social.github && (
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                              <Globe className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {sleepingMembers.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white text-center">
                  {t("team.sleepingSectionTitle")}
                </h2>
                <p className="text-gray-400 text-sm text-center max-w-xl mx-auto">
                  {t("team.sleepingSectionDescription")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  {sleepingMembers.map((member) => (
                    <div
                      key={member.id}
                      className="glass rounded-3xl overflow-hidden group hover:border-neon-orange/50 hover:shadow-[0_0_40px_rgba(255,102,0,0.15)] transition-all duration-500 flex flex-col md:flex-row hover:-translate-y-2 w-full max-w-2xl mx-auto"
                    >
                      <div className="md:w-2/5 relative h-80 md:h-auto overflow-hidden">
                        <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="p-8 md:w-3/5 flex flex-col justify-between relative bg-slate-900/60">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
                          {member.audioSample && (
                            <button 
                              onClick={() => playAudio(member.audioSample!)}
                              className="w-12 h-12 rounded-full bg-neon-orange text-white flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(255,102,0,0.6)] transition-all"
                              title="Přehrát hlasovou ukázku"
                            >
                              <PlayCircle className="w-6 h-6" />
                            </button>
                          )}
                        </div>

                        <div className="max-w-full overflow-hidden">
                          <h2 className="block break-words text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-neon-orange transition-colors">
                            {member.name}
                          </h2>
                          <p className="text-neon-orange font-bold uppercase tracking-widest text-xs mb-6 border-l-2 border-neon-orange pl-3">
                            {member.role}
                          </p>
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-white/5">
                          {member.social.twitter && (
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                              <Twitter className="w-4 h-4" />
                            </a>
                          )}
                          {member.social.instagram && (
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                              <Instagram className="w-4 h-4" />
                            </a>
                          )}
                          {member.social.youtube && (
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                              <Youtube className="w-4 h-4" />
                            </a>
                          )}
                          {member.social.github && (
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                              <Globe className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Section>

      {/* Join Us CTA */}
      <section className="py-24 bg-gradient-to-r from-neon-red/10 to-neon-orange/10 relative">
        <Section className="text-center space-y-8">
          <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto border-2 border-neon-red shadow-[0_0_30px_rgba(255,0,0,0.3)]">
            <Mic className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            {t("team.ctaHeadingPrefix")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-neon-orange">
              {t("team.ctaHeadingHighlight")}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {t("team.ctaDescription")}
            <br />
            <span className="text-neon-orange text-sm font-bold uppercase tracking-widest mt-4 block">
              {t("team.ctaRequirement")}
            </span>
          </p>
          <a
            href="https://discord.gg/JvP9sqkyBU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="px-12">
              {t("team.ctaButton")}
            </Button>
          </a>
        </Section>
      </section>
    </div>
  );
}
