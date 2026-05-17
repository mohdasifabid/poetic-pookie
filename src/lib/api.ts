import { Poem } from "@/types/poetry";

export async function fetchRandomPoems(count: number = 10): Promise<Poem[]> {
  const url = `https://poetrydb.org/random/${count}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 9000); // 9 second timeout

  try {
    console.log(`Fetching poems from: ${url}`);
    const res = await fetch(url, {
      next: { revalidate: 1800 },
      headers: {
        'User-Agent': 'PoeticPookie/1.0 (https://github.com/asif/poetic-pookie)',
        'Accept': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.error(`Failed to fetch poems from ${url}: ${res.status} ${res.statusText}`);
      return [];
    }
    const data = await res.json();
    console.log(`Successfully fetched ${Array.isArray(data) ? data.length : 0} poems.`);
    return data;
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      console.error(`Fetch timed out for ${url}`);
    } else {
      console.error(`Error capturing poetry from ${url}:`, error.message || error);
    }
    return [];
  }
}
