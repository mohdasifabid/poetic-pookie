import Link from "next/link";

export function Footer() {
    return (

        <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur py-8 mt-auto transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-start justify-between gap-6 text-xs text-neutral-500 dark:text-neutral-400">

                <div className="max-w-xl space-y-2 leading-relaxed">
                    <p>
                        <strong className="font-semibold text-neutral-700 dark:text-neutral-300">Disclaimer: </strong>
                        Poetic Pookie is a non-profit educational sandbox designed to showcase modern architecture. All indexing properties belong entirely to their respective authors.
                    </p>
                </div>

                {/* Right Block: Author Credits and Repository Links */}
                <div className="flex flex-col space-y-2 min-w-[240px] md:text-right">
                    <p>
                        Made while learning by{" "}
                        <Link
                            href="https://github.com/mohdasifabid"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            Mohd Asif
                        </Link>
                    </p>
                    <p>
                        Project Repo:{" "}
                        <Link
                            href="https://github.com/mohdasifabid/poetic-pookie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-mono tracking-tight hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                        >
                            poetic-pookie
                        </Link>
                    </p>
                </div>

            </div>
        </footer>
    );
}
