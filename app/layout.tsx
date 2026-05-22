import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import MainNav from "@/components/main-nav";
import clsx from "clsx";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darwin Smith",
  description: "Darwin Smith | Software Developer",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(manrope.className, "flex h-full flex-col")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
