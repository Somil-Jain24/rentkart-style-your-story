import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/payouts")({
  head: () => ({ meta: [{ title: "Payouts — Admin" }] }),
});
