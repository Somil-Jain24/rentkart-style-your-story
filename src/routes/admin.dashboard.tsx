import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({ meta: [{ title: "Operations Dashboard — Admin" }] }),
});
