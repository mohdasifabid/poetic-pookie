export function PoemSkeleton() {
    return (
        <div className="w-full max-w-xl p-6 border rounded-xl animate-pulse bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
            <div className="h-6 bg-neutral-300 dark:bg-neutral-600 rounded w-3/4 mb-2" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-500 rounded w-1/4 mb-6" />
            <div className="space-y-2">
                <div className="h-4 bg-neutral-200 dark:bg-neutral-500 rounded w-full" />
                <div className="h-4 bg-neutral-200 dark:bg-neutral-500 rounded w-5/6" />
                <div className="h-4 bg-neutral-200 dark:bg-neutral-500 rounded w-4/5" />
            </div>
        </div>
    );
}
