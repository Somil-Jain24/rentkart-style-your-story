import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/layout/help")({
  head: () => ({ meta: [{ title: "Help & Support — Admin" }] }),
});
