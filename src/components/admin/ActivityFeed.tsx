import { Circle, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ActivityItem {
  id: string;
  title: string;
  description?: string;
  timestamp: string;
  status?: "completed" | "pending" | "failed";
  avatar?: string;
}

export interface ActivityFeedProps {
  items: ActivityItem[];
  title?: string;
  subtitle?: string;
}

export function ActivityFeed({ items, title = "Recent Activity", subtitle }: ActivityFeedProps) {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="border-b border-border p-6">
        <h2 className="font-display text-lg font-semibold">{title}</h2>
        {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      <ul className="divide-y divide-border">
        {items.map((item, idx) => {
          const statusIcon =
            item.status === "completed" ? (
              <CheckCircle className="h-5 w-5 text-green-600" />
            ) : item.status === "failed" ? (
              <AlertCircle className="h-5 w-5 text-red-600" />
            ) : (
              <Circle className="h-5 w-5 text-yellow-600" />
            );

          return (
            <li key={item.id} className="p-4 hover:bg-surface-alt transition-colors">
              <div className="flex items-start gap-4">
                {item.avatar ? (
                  <img src={item.avatar} alt="" className="h-10 w-10 rounded-full flex-shrink-0 object-cover" />
                ) : (
                  <div className="mt-0.5">{statusIcon}</div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">{item.title}</p>
                  {item.description && <p className="text-xs text-muted-foreground mt-1">{item.description}</p>}
                </div>
                <span className="text-xs text-muted-foreground font-mono whitespace-nowrap ml-2">{item.timestamp}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
