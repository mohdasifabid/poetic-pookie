export interface TechItem {
  name: string;
  points: string[];
  caveats: string[];
}

export const techStackData: TechItem[] = [
  {
    name: "React 19 Compiler",
    points: [
      "Automatically memoizes components and computations.",
      "Reduces the need for useMemo, useCallback, and React.memo.",
      "Works best with pure and predictable components.",
    ],
    caveats: [
      "Compiler skips optimization if React rules are violated.",
      "Impure rendering patterns can cause compiler bailouts.",
    ],
  },
  {
    name: "Next.js 16 App Router + RSC",
    points: [
      "Fetches data on the server using React Server Components.",
      "Reduces client-side JavaScript bundle size.",
      "Improves SEO and initial page performance.",
    ],
    caveats: [
      "Server Components cannot access browser APIs.",
      "window, document, and localStorage are unavailable.",
    ],
  },
  {
    name: "React 19 use() Hook",
    points: [
      "Allows direct async data reading during rendering.",
      "Works with Suspense for cleaner async UI.",
      "Can be used conditionally unlike traditional hooks.",
    ],
    caveats: [
      "Do not create promises inside client components.",
      "New promises on every render can cause infinite loops.",
    ],
  },
  {
    name: "Concurrent Rendering + useTransition",
    points: [
      "Marks non-urgent UI updates as low priority.",
      "Keeps the interface responsive during expensive renders.",
      "Useful for filtering, searching, and large list updates.",
    ],
    caveats: [
      "Only state updates should run inside transitions.",
      "Pending states should be shown for better UX.",
    ],
  },
  {
    name: "Tailwind CSS v4 + next-themes",
    points: [
      "Provides utility-first responsive styling.",
      "Supports instant theme switching.",
      "Works well with design systems and scalable UI.",
    ],
    caveats: [
      "Theme providers may require client-side rendering.",
      "Hydration mismatches must be handled carefully.",
    ],
  },
];
