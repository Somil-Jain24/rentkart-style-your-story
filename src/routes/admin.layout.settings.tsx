import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/layout/settings")({
  head: () => ({ meta: [{ title: "Settings — Admin" }] }),
});
