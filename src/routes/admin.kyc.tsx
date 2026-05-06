import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/kyc")({
  head: () => ({ meta: [{ title: "KYC Review — Admin" }] }),
});
