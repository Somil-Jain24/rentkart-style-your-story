import { createFileRoute } from "@tanstack/react-router";

type Search = {
  category?: string;
  sub?: string;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  maxDistance?: number;
};

export const Route = createFileRoute("/buyer/browse")({
  head: () => ({ meta: [{ title: "Browse rentals — The RentVerse" }] }),
  validateSearch: (s: Record<string, unknown>): Search => ({
    category: typeof s.category === "string" ? s.category : undefined,
    sub: typeof s.sub === "string" ? s.sub : undefined,
    city: typeof s.city === "string" ? s.city : undefined,
    minPrice: typeof s.minPrice === "number" ? s.minPrice : undefined,
    maxPrice: typeof s.maxPrice === "number" ? s.maxPrice : undefined,
    maxDistance: typeof s.maxDistance === "number" ? s.maxDistance : undefined,
  }),
});
