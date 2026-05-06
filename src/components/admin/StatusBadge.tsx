import { cn } from "@/lib/utils";

export interface StatusBadgeProps {
  status: "pending" | "approved" | "rejected" | "open" | "under-review" | "resolved" | "paid" | "processing" | "failed" | "low" | "medium" | "high";
  children: React.ReactNode;
}

const statusStyles = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
  open: "bg-red-100 text-red-700",
  "under-review": "bg-blue-100 text-blue-700",
  resolved: "bg-green-100 text-green-700",
  paid: "bg-green-100 text-green-700",
  processing: "bg-blue-100 text-blue-700",
  failed: "bg-red-100 text-red-700",
  low: "bg-green-100 text-green-700",
  medium: "bg-yellow-100 text-yellow-700",
  high: "bg-red-100 text-red-700",
};

export function StatusBadge({ status, children }: StatusBadgeProps) {
  return (
    <span className={cn("inline-block rounded-full px-3 py-1 text-xs font-semibold", statusStyles[status])}>
      {children}
    </span>
  );
}
