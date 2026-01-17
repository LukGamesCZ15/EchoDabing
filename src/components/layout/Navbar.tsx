"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n/I18nContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = useLocation().pathname;
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/o-nas" },
    { name: t("nav.videos"), href: "/video" },
    { name: t("nav.team"), href: "/tym" },
    { name: t("nav.dabers"), href: "/daberi" },
    { name: t("nav.contact"), href: "/kontakt" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass border-b-neon-red/20 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter group relative mr-12 -ml-6">
          <span className="text-white group-hover:text-neon-orange transition-colors neon-text">ECHO</span>
          <span className="text-neon-red group-hover:text-white transition-colors neon-text">DABING</span>
          <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-neon-red group-hover:w-full transition-all duration-300" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-neon-orange relative group ${
                  pathname === link.href ? "text-neon-red" : "text-gray-300"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-orange transition-all duration-300 group-hover:w-full ${pathname === link.href ? "w-full bg-neon-red" : ""}`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLocale("cs")}
                className={`px-2 py-1 text-xs font-semibold rounded-full transition-colors ${
                  locale === "cs"
                    ? "bg-neon-red text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                CZ
              </button>
              <button
                onClick={() => setLocale("sk")}
                className={`px-2 py-1 text-xs font-semibold rounded-full transition-colors ${
                  locale === "sk"
                    ? "bg-neon-red text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                SK
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-neon-red"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10">
                <div className="flex gap-2">
                  <button
                    onClick={() => setLocale("cs")}
                    className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                      locale === "cs"
                        ? "bg-neon-red text-white"
                        : "bg-slate-900 text-gray-300"
                    }`}
                  >
                    CZ
                  </button>
                  <button
                    onClick={() => setLocale("sk")}
                    className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                      locale === "sk"
                        ? "bg-neon-red text-white"
                        : "bg-slate-900 text-gray-300"
                    }`}
                  >
                    SK
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
