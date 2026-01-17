import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { GlitchText } from "@/components/ui/GlitchText";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-black to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-neon-red/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-orange/20 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full opacity-40" />
      </div>

      <Section className="py-24 text-center space-y-10 relative z-10">
        <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-white/10 bg-slate-900/70 backdrop-blur-md text-xs font-semibold tracking-[0.3em] uppercase text-gray-400 mb-4">
          <span className="w-2 h-2 rounded-full bg-neon-red shadow-[0_0_12px_rgba(255,0,0,0.8)]" />
          <span>Chyba 404 • Stránka nenalezena</span>
        </div>

        <div className="space-y-6">
          <div className="text-8xl md:text-9xl font-black tracking-tighter text-white leading-none">
            <span className="block text-4xl md:text-5xl mb-4 text-white tracking-normal">
              Zabloudil jsi v pekle
            </span>
            <GlitchText text="404" />
          </div>

          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Stránku jsme hledali všude, ale MysterTrolles ji při dabování tak
            rozbil, že ji i Google označil jako hororový spin-off a smazal z
            časoprostoru.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <Link to="/">
            <Button size="lg" variant="neon" className="px-10">
              Zpátky domů
            </Button>
          </Link>

          <Link to="/video">
            <Button
              size="lg"
              variant="outline"
              className="px-10 border-white/30 hover:border-neon-orange/70"
            >
              Pustit si videa
            </Button>
          </Link>
        </div>

        <div className="mt-10 text-xs md:text-sm text-gray-500 font-mono tracking-widest uppercase">
          <span className="text-neon-orange">Tip:</span> Zkontroluj adresu nebo se vrať na hlavní stránku.
        </div>
      </Section>
    </div>
  );
}
