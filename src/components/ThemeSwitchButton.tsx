"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitchButton() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-6 w-6 mx-2"></div>;

  return (
    <div className="swap swap-rotate mx-2">
      <Sun
        className={`fill-current h-6 w-6 ${
          resolvedTheme === "light" ? "swap-on" : "swap-off"
        }`}
        onClick={() => setTheme("dark")}
      />
      <Moon
        className={`fill-current h-6 w-6 ${
          resolvedTheme === "dark" ? "swap-on" : "swap-off"
        }`}
        onClick={() => setTheme("light")}
      />
    </div>
  );
}
