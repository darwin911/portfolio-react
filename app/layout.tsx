import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import MainNav from "@/components/main-nav";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darwin Smith",
  description: "Darwin Smith | Software Developer",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(inter.className, "flex h-full flex-col")}>
        <MainNav />

        {children}
      </body>
    </html>
  );
}
