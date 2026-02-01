"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full w-10 h-10 p-0"
        >
            <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
            <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-300" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
