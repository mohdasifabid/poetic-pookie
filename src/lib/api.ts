import { Poem } from "@/types/poetry";

export async function fetchRandomPoems(count: number = 10): Promise<Poem[]> {
  try {
    const res = await fetch(`https://poetrydb.org/random/${count}`, {
      next: { revalidate: 1800 },
    });

    if (!res.ok) {
      console.error(`Failed to fetch poems: ${res.status} ${res.statusText}`);
      return [];
    }
    return res.json();
  } catch (error) {
    console.error("Error capturing poetry:", error);
    return [];
  }
}
