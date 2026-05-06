import { cn } from "@/lib/utils";

export interface StatsCardProps {
  label: string;
  value: string | number;
  supporting?: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBgColor: "lavender" | "pink" | "yellow" | "green" | "blue";
}

const iconBgColors = {
  lavender: "bg-purple-100 text-purple-600",
  pink: "bg-pink-100 text-pink-600",
  yellow: "bg-yellow-100 text-yellow-600",
  green: "bg-green-100 text-green-600",
  blue: "bg-blue-100 text-blue-600",
};

export function StatsCard({ label, value, supporting, icon: Icon, iconBgColor }: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
          <p className="mt-3 font-display text-3xl font-bold text-foreground">{value}</p>
          {supporting && <p className="mt-1 text-sm text-muted-foreground">{supporting}</p>}
        </div>
        <div className={cn("rounded-xl p-3", iconBgColors[iconBgColor])}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
