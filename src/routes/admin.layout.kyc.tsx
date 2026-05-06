import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/layout/kyc")({
  head: () => ({ meta: [{ title: "KYC Review — Admin" }] }),
});
