import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/help")({
  head: () => ({ meta: [{ title: "Help & Support — Admin" }] }),
});
