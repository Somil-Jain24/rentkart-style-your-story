import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/layout/audit-logs")({
  head: () => ({ meta: [{ title: "Audit Logs — Admin" }] }),
});
