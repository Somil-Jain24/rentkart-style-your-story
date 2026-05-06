import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/layout/listings")({
  head: () => ({ meta: [{ title: "Listing Approvals — Admin" }] }),
});
