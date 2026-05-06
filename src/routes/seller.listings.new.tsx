import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/seller/listings/new")({
  head: () => ({ meta: [{ title: "Create listing — The RentVerse Seller" }] }),
});
