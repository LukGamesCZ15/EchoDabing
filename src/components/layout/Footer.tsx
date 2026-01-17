"use client";

import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function Footer() {
  const { t } = useI18n();
  const navLinks = [
    { href: "/", label: t("footer.navHome") },
    { href: "/o-nas", label: t("footer.navAbout") },
    { href: "/video", label: t("footer.navVideos") },
    { href: "/tym", label: t("footer.navTeam") },
    { href: "/kontakt", label: t("footer.navContact") },
  ];
  return (
    <footer className="glass border-t border-white/10 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tighter mb-6 block neon-text">
              <span className="text-white">ECHO</span>
              <span className="text-neon-red">DABING</span>
            </Link>
            <p className="text-gray-400 mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-red transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-orange transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-red transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">
              {t("footer.navHeading")}
            </h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-neon-red transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
