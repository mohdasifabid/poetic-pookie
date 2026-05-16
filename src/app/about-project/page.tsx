// src/app/about-project/page.tsx
import { techStackData } from "@/config/techStackData";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About the Architecture",
    description: "A deep dive into the high-performance technical stack power behind Poetic Pookie.",
    alternates: {
        canonical: "https://poetic-pookie.vercel.app/about-project",
    },
    keywords: ["Architecture", "Next.js", "React", "Poetic Pookie", "React Compiler", "React 19", "React 19 use", "Tailwind CSS", "Tailwind CSS v4", "PoetryDB"],
    authors: [{ name: "Mohd Asif" }],
    icons: {
        icon: "🌸",
    },
};

export default function AboutProjectPage() {


    return (
        <main className="min-h-screen p-8 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            <div className="space-y-8 w-2/4 mx-auto">
                {/* Intro Section */}
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight mb-3 text-pink-600 dark:text-pink-400">
                        Behind the Verses 🛠️
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Poetic Pookie is built as a production-grade portfolio playground designed to explore
                        the bleeding edge of frontend rendering boundaries, streaming states, and data optimization.
                    </p>
                </div>

                {/* Main Content List Area */}
                <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    <h2 className="text-xl font-bold tracking-tight mb-4 text-neutral-800 dark:text-neutral-200">
                        Architectural Highlights
                    </h2>

                    <div className="grid grid-cols-1 gap-4">
                        {techStackData.map((tech) => (
                            <div
                                key={tech.name}
                                className="p-6 bg-white dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-sm space-y-4"
                            >
                                {/* Tech Header Title */}
                                <h3 className="font-bold text-neutral-900 dark:text-white text-base">
                                    {tech.name}
                                </h3>

                                {/* Points Sublist */}
                                <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-2 list-none pl-1">
                                    {tech.points.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-pink-500 mr-2 select-none">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Isolated Caveat List Stack */}
                                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-700/50">
                                    <ul className="text-sm text-neutral-700 dark:text-neutral-400 space-y-2 list-none pl-1">
                                        {tech.caveats.map((caveat, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="font-bold text-red-500 dark:text-red-400 mr-2 select-none">⚠️</span>
                                                <span className="leading-relaxed">
                                                    <strong className="text-red-500 dark:text-red-400 font-bold">Caveat: </strong>
                                                    {caveat}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Note Area */}
                <div className="p-4 bg-pink-50/50 dark:bg-pink-950/20 rounded-xl border border-pink-100 dark:border-pink-900/30 text-xs text-center text-pink-600 dark:text-pink-400">
                    The data is used from public API: <a href="https://poetrydb.org/random" target="_blank" rel="noreferrer" className="underline hover:opacity-80">https://poetrydb.org/random</a>
                </div>
            </div>
        </main>
    );
}
