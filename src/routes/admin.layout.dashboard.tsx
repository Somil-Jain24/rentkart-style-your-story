import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/layout/dashboard")({
  head: () => ({ meta: [{ title: "Operations Dashboard — Admin" }] }),
});
