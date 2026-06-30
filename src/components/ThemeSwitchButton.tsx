"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitchButton() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="mx-2 h-6 w-6"></div>;

  return (
    <div className="swap mx-2 swap-rotate">
      <Sun
        className={`h-6 w-6 fill-current ${
          resolvedTheme === "light" ? "swap-on" : "swap-off"
        }`}
        onClick={() => setTheme("dark")}
      />
      <Moon
        className={`h-6 w-6 fill-current ${
          resolvedTheme === "dark" ? "swap-on" : "swap-off"
        }`}
        onClick={() => setTheme("light")}
      />
    </div>
  );
}
