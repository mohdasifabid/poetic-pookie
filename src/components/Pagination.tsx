// src/components/Pagination.tsx
'use client';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center space-x-2 pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <button
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
            >
                Previous
            </button>

            <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 px-2">
                Page {currentPage} of {totalPages}
            </span>

            <button
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
            >
                Next
            </button>
        </div>
    );
}
