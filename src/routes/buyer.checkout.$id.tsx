import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/buyer/checkout/$id")({
  head: () => ({ meta: [{ title: "Checkout — The RentVerse" }] }),
});
