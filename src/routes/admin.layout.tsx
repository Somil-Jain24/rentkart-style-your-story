import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AdminSidebar } from "@/components/rentkart/AdminSidebar";
import { ThemeToggle } from "@/components/rentkart/ThemeToggle";

export const Route = createFileRoute("/admin/layout")({
  head: () => ({ meta: [{ title: "Admin — The RentVerse" }] }),
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-border bg-card sticky top-0 z-40">
          <div className="flex h-16 items-center justify-between px-4 lg:px-8">
            <div className="flex-1"></div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="font-mono">ops@rentkart.in</span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron-soft text-xs font-bold text-primary-deep">
                  OP
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
