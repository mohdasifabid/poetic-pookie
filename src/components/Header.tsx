import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
    return (
        <header className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-8 h-20 flex justify-between items-center">
                <Link href="/" className="text-2xl font-extrabold tracking-tight hover:opacity-90 text-black dark:text-white">
                    Poetic Pookie 🌸
                </Link>
                <div className="flex items-center space-x-4">
                    <Link
                        href="/about-project"
                        className="px-4 py-2 text-xs font-semibold rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors border border-neutral-300 dark:border-neutral-700 hover:opacity-90 shadow-sm"
                    >
                        About Project
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
