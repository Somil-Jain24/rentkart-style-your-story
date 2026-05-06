import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/layout/payouts")({
  head: () => ({ meta: [{ title: "Payouts — Admin" }] }),
});
