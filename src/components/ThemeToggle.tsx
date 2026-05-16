'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-24 h-8 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse" />;
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="px-4 py-2 text-xs font-semibold rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors border border-neutral-300 dark:border-neutral-700 hover:opacity-90 shadow-sm"
        >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    );
}
