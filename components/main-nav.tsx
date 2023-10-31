"use client";

import { MAIN_NAV_LINKS } from "@/components/shared/shared";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function MainNav() {
  const segment = useSelectedLayoutSegment();

  return (
    <header className="relative">
      <nav className="fixed w-full bg-gray-300 p-4 mx-auto z-10">
        <ul className="max-w-6xl mx-auto flex gap-4">
          {MAIN_NAV_LINKS.map((item) => {
            const isMatchingSegment =
              (segment === null && item.label.toLowerCase() === "home") ||
              item.label?.toLowerCase() === segment;

            const linkClassName = isMatchingSegment
              ? "text-gray-800 underline underline-offset-2"
              : "text-gray-500";

            return (
              <li key={item.href}>
                <Link href={item.href} className={linkClassName}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
