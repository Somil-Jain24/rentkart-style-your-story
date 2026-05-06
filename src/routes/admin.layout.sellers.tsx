import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/layout/sellers")({
  head: () => ({ meta: [{ title: "Seller Management — Admin" }] }),
});
