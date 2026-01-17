"use client";

import { I18nProvider } from "./I18nContext";

export function I18nRoot({ children }: { children: React.ReactNode }) {
  return <I18nProvider>{children}</I18nProvider>;
}

