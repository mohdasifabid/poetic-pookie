export function AboutSkeleton() {
    return (
        <main className="max-w-4xl mx-auto px-8 py-12 animate-pulse">
            <div className="space-y-8 w-full md:w-2/4 mx-auto">

                <div className="space-y-3">
                    <div className="h-8 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-1/2" />
                    <div className="space-y-2">
                        <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full" />
                        <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6" />
                    </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md w-1/3 mb-6" />

                    <div className="space-y-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div
                                key={i}
                                className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-4 bg-neutral-100/50 dark:bg-neutral-800/20"
                            >
                                <div className="h-5 bg-neutral-300 dark:bg-neutral-700 rounded w-1/3" />

                                <div className="space-y-2 pl-1">
                                    <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-4/5" />
                                    <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4" />
                                </div>

                                <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
                                    <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
