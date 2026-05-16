'use client';

import { use, useState, useTransition } from "react";
import { Poem } from "@/types/poetry";
import { Pagination } from "@/components/Pagination"; // 👈 Import our new isolated component

interface DashboardProps {
    poemsPromise: Promise<Poem[]>;
}

export default function PoemDashboard({ poemsPromise }: DashboardProps) {
    const initialPoems = use(poemsPromise);

    const [searchTerm, setSearchTerm] = useState("");
    const [deferredSearch, setDeferredSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [, startTransition] = useTransition();

    const ITEMS_PER_PAGE = 6;

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSearchTerm(val);

        startTransition(() => {
            setDeferredSearch(val);
            setCurrentPage(1);
        });
    };

    const filteredPoems = initialPoems.filter((poem) =>
        poem.title.toLowerCase().includes(deferredSearch.toLowerCase()) ||
        poem.author.toLowerCase().includes(deferredSearch.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPoems.length / ITEMS_PER_PAGE);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentDisplayedPoems = filteredPoems.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="space-y-8">
            <div className="w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search by title or author..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-3 rounded-xl border bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentDisplayedPoems.map((poem, index) => (
                    <article
                        key={`${poem.title}-${index}`}
                        className="flex flex-col justify-between p-6 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm hover:shadow-md transition-shadow min-h-[250px]"
                    >
                        <div>
                            <h2 className="text-xl font-bold mb-1 text-pink-600 dark:text-pink-400 line-clamp-1">
                                {poem.title}
                            </h2>
                            <p className="text-xs italic text-neutral-400 dark:text-neutral-500 mb-4">
                                by {poem.author}
                            </p>
                            <div className="space-y-1 font-serif text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                {poem.lines.slice(0, 4).map((line, i) => (
                                    <p key={i} className="line-clamp-1">{line || " "}</p>
                                ))}
                            </div>
                        </div>

                        {poem.lines.length > 4 && (
                            <p className="text-xs text-pink-500 font-medium mt-4 pt-2 border-t border-neutral-100 dark:border-neutral-700/50 cursor-pointer hover:underline">
                                Read full {poem.linecount} lines →
                            </p>
                        )}
                    </article>
                ))}
            </div>

            {filteredPoems.length === 0 && (
                <p className="text-center py-12 text-neutral-400">No verses discovered matching your search.</p>
            )}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
