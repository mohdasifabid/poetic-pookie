import { Poem } from "@/types/poetry";

export async function fetchRandomPoems(count: number = 10): Promise<Poem[]> {
  const res = await fetch(`https://poetrydb.org/random/${count}`, {
    next: { revalidate: 1800 },
  });

  if (!res.ok) throw new Error("Failed to capture poetry.");
  return res.json();
}
