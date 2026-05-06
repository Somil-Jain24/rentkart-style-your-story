import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export interface QuickAction {
  label: string;
  count?: number;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export interface QuickActionsPanelProps {
  title?: string;
  actions: QuickAction[];
}

export function QuickActionsPanel({ title = "Quick Actions", actions }: QuickActionsPanelProps) {
  return (
    <div className="sticky top-20 rounded-2xl border border-border bg-card p-6 h-fit">
      <h3 className="font-display text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        {actions.map((action, idx) => (
          <button
            key={idx}
            onClick={action.onClick}
            className={cn(
              "w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
              action.variant === "secondary"
                ? "border border-border bg-background hover:bg-surface-alt"
                : "bg-primary text-primary-foreground hover:bg-primary-deep"
            )}
          >
            <span>{action.label}</span>
            {action.count !== undefined && (
              <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                {action.count}
              </span>
            )}
            <ChevronRight className="h-4 w-4 ml-2" />
          </button>
        ))}
      </div>
    </div>
  );
}
