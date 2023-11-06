"use client";

import ModeToggle from "@/components/mode-toggle";
import { MAIN_NAV_LINKS } from "@/components/shared/shared";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function MainNav() {
  const segment = useSelectedLayoutSegment();

  return (
    <header className="relative">
      <nav className="fixed z-10 mx-auto w-full overflow-hidden bg-background py-4 shadow-md">
        <div className="container flex items-center justify-between">
          <ul className="flex gap-4">
            {MAIN_NAV_LINKS.map((item) => {
              const isMatchingSegment =
                (segment === null && item.label.toLowerCase() === "home") ||
                item.label?.toLowerCase() === segment;

              const linkClassName = isMatchingSegment
                ? "opacity-100 underline underline-offset-2"
                : "opacity-80";

              return (
                <li key={item.href}>
                  <Link href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
