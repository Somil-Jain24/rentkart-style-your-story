import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/layout/disputes")({
  head: () => ({ meta: [{ title: "Disputes — Admin" }] }),
});
