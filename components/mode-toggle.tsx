"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

export default function ModeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme();

  function handleToggleDarkMode() {
    if (theme === "system") {
      setTheme(systemTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  }

  return (
    <Button
      variant="outline"
      className={cn("rounded-xl h-8 w-8", className)}
      onClick={handleToggleDarkMode}
      size="icon"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
    </Button>
  );
}
