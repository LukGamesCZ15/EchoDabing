"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Locale, getDictionary, locales } from "./dictionary";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("sk");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("echodabing-lang");
    if (stored && (locales as readonly string[]).includes(stored)) {
      setLocaleState(stored as Locale);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("echodabing-lang", next);
    }
  };

  const value = useMemo<I18nContextValue>(() => {
    const dict = getDictionary(locale);
    const t = (key: string) => {
      const parts = key.split(".");
      let current: any = dict;
      for (const part of parts) {
        if (current && typeof current === "object" && part in current) {
          current = current[part];
        } else {
          return key;
        }
      }
      return typeof current === "string" ? current : key;
    };
    return { locale, setLocale, t };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
