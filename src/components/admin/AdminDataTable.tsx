import { cn } from "@/lib/utils";

export interface Column<T> {
  key: keyof T;
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
  className?: string;
}

export interface AdminDataTableProps<T extends { id: string }> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
  hoverable?: boolean;
}

export function AdminDataTable<T extends { id: string }>({
  columns,
  data,
  onRowClick,
  hoverable = true,
}: AdminDataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-alt">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-6 py-4 text-left font-semibold text-muted-foreground"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              onClick={() => onRowClick?.(row)}
              className={cn(
                "border-b border-border",
                hoverable && onRowClick && "hover:bg-surface-alt cursor-pointer transition-colors"
              )}
            >
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={cn("px-6 py-4 text-foreground", col.className)}
                >
                  {col.render ? col.render(row[col.key], row) : String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
