import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/disputes")({
  head: () => ({ meta: [{ title: "Disputes — Admin" }] }),
});
