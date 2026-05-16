'use client';

import { use, useState, useTransition } from "react";
import { Poem } from "@/types/poetry";

interface DashboardProps {
    poemsPromise: Promise<Poem[]>;
}

export default function PoemDashboard({ poemsPromise }: DashboardProps) {
    const initialPoems = use(poemsPromise);

    const [searchTerm, setSearchTerm] = useState("");
    const [deferredSearch, setDeferredSearch] = useState("");
    const [, startTransition] = useTransition();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSearchTerm(val);

        startTransition(() => {
            setDeferredSearch(val);
        });
    };

    const filteredPoems = initialPoems.filter((poem) =>
        poem.title.toLowerCase().includes(deferredSearch.toLowerCase()) ||
        poem.author.toLowerCase().includes(deferredSearch.toLowerCase()) ||
        poem.lines.join("").toLowerCase().includes(deferredSearch.toLowerCase())
    );
    return (
        <div className="space-y-8">
            <div className="w-full max-w-md">
                <input
                    type="text"
                    placeholder="Filter poems by title or bard..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full text-black dark:text-white px-4 py-3 rounded-lg border bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPoems.map((poem, index) => (
                    <article
                        key={index}
                        className="p-6 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h2 className="text-xl font-bold mb-1 text-pink-600 dark:text-pink-400">{poem.title}</h2>
                        <p className="text-sm italic text-neutral-500 dark:text-neutral-400 mb-4">by {poem.author}</p>
                        <div className="space-y-1 font-serif text-sm leading-relaxed max-h-48 overflow-y-auto pr-2">
                            {poem.lines.slice(0, 6).map((line, i) => (
                                <p key={i}>{line || " "}</p>
                            ))}
                            {poem.lines.length > 6 && <p className="text-pink-400 text-xs mt-2">...Click to read full sonnet</p>}
                        </div>
                    </article>
                ))}
            </div>

            {filteredPoems.length === 0 && (
                <p className="text-center py-12 text-neutral-400">No verses found matching your query.</p>
            )}
        </div>
    );
}
