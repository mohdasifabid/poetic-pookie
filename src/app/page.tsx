import { Suspense } from "react";
import { fetchRandomPoems } from "@/lib/api";
import { PoemSkeleton } from "@/components/PoemSkeleton";
import PoemDashboard from "@/components/PoemDashboard";
import { ThemeToggle } from "@/components/ThemeToggle";

export default async function HomePage() {
  const poemsPromise = fetchRandomPoems(500);

  return (
    <main className="min-h-screen p-8 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
      <header className="max-w-6xl mx-auto mb-12 flex justify-between items-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Poetic Pookie 🌸</h1>
        <ThemeToggle />
      </header>

      <div className="max-w-6xl mx-auto">
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 10 }).map((_, i) => <PoemSkeleton key={i} />)}
          </div>
        }>
          <PoemDashboard poemsPromise={poemsPromise} />
        </Suspense>
      </div>
    </main>
  );
}
