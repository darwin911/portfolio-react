"use client";

import * as React from "react";

import dynamic from "next/dynamic";
import type { ThemeProviderProps } from "next-themes";

// https://github.com/vercel/next.js/issues/7322#issuecomment-1003538777
const NextThemesProvider = dynamic(
  () => import("next-themes").then((module) => module.ThemeProvider),
  { ssr: false }
);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
