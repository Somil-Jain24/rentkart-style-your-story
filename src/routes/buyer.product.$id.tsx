import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/buyer/product/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Rent — The RentVerse · ${params.id}` },
      { name: "description", content: "Rental from a verified The RentVerse seller — escrow-protected refundable hold." },
    ],
  }),
});
