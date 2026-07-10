"use client";

import ModeToggle from "@/components/mode-toggle";
import { MAIN_NAV_LINKS } from "@/components/shared/shared";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function MainNav() {
  const segment = useSelectedLayoutSegment();

  return (
    <header className="relative mb-16">
      <nav className="fixed z-10 mx-auto w-full overflow-hidden bg-background py-4 shadow-md">
        <div className="container flex items-center justify-between max-w-7xl 2xl:max-w-8xl">
          <ul className="flex gap-4">
            {MAIN_NAV_LINKS.map((item) => {
              const isMatchingSegment =
                (segment === null && item.label.toLowerCase() === "home") ||
                item.label?.toLowerCase() === segment;

              const linkClassName = isMatchingSegment
                ? "underline underline-offset-2"
                : "text-muted-foreground";

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn("font-medium", linkClassName)}
                  >
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
