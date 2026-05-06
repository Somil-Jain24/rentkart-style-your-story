import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/layout/analytics")({
  head: () => ({ meta: [{ title: "Analytics — Admin" }] }),
});
