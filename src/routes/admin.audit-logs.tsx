import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Search, Filter, Clock } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";
import { ThemeToggle } from "@/components/rentkart/ThemeToggle";
import { AdminSidebar } from "@/components/rentkart/AdminSidebar";

export const Route = createFileRoute("/admin/audit-logs")({
  head: () => ({ meta: [{ title: "Audit Logs — Admin" }] }),
  component: AuditLogs,
});

function AuditLogs() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-border bg-card sticky top-0 z-40">
          <div className="flex h-16 items-center justify-between px-4 lg:px-8">
            <div className="flex items-center gap-3 lg:hidden">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="flex-1 hidden lg:block">
              <h1 className="font-display text-xl font-bold">Audit Logs</h1>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="font-mono">ops@rentkart.in</span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron-soft text-xs font-bold text-primary-deep">OP</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 lg:px-8">
          <div className="max-w-6xl">
            {/* Page header */}
            <div className="mb-6">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Compliance</p>
              <h2 className="mt-1 font-display text-2xl font-bold">Audit logs</h2>
              <p className="mt-1 text-sm text-muted-foreground">Complete audit trail of all admin actions and system events.</p>
            </div>

            {/* Filters & Search */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by action, user, or ID..."
                  className="w-full h-10 rounded-lg border border-border bg-background pl-10 pr-4 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <button className="flex items-center gap-2 h-10 rounded-lg border border-border bg-background px-4 text-sm font-medium hover:bg-surface-alt">
                <Filter className="h-4 w-4" />
                Type
              </button>
            </div>

            {/* Logs */}
            <div className="space-y-3">
              {[
                { action: "Approved listing RK-10391", user: "ops@rentkart.in", type: "approval", change: "Status: pending → approved", time: "2 minutes ago" },
                { action: "Rejected listing RK-10380", user: "ops@rentkart.in", type: "rejection", change: "Reason: Policy violation", time: "15 minutes ago" },
                { action: "KYC verification passed - S-2404", user: "ops@rentkart.in", type: "verification", change: "Status: pending → verified", time: "45 minutes ago" },
                { action: "Suspended seller S-2100", user: "ops@rentkart.in", type: "suspension", change: "Reason: Multiple fraud reports", time: "2 hours ago" },
                { action: "Force released hold for ORD-87850", user: "ops@rentkart.in", type: "override", change: "Amount: ₹12,500", time: "3 hours ago" },
                { action: "Issued ₹2,500 store credit", user: "ops@rentkart.in", type: "credit", change: "Buyer ID: B-4521", time: "4 hours ago" },
                { action: "Payout processed - S-1908", user: "system", type: "payout", change: "Amount: ₹28,500", time: "5 hours ago" },
                { action: "Dispute resolved - ORD-87841", user: "ops@rentkart.in", type: "dispute", change: "Resolution: Refund to buyer", time: "6 hours ago" },
              ].map((log, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-semibold ${
                          log.type === "approval" ? "bg-success-soft text-success" :
                          log.type === "rejection" ? "bg-error-soft text-error" :
                          log.type === "verification" ? "bg-info-soft text-info" :
                          log.type === "suspension" ? "bg-error-soft text-error" :
                          log.type === "override" ? "bg-warning-soft text-warning" :
                          log.type === "credit" ? "bg-success-soft text-success" :
                          log.type === "payout" ? "bg-info-soft text-info" :
                          "bg-primary-soft text-primary"
                        }`}>
                          {log.type}
                        </span>
                      </div>
                      <p className="font-semibold text-foreground">{log.action}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{log.change}</p>
                      <p className="mt-1 text-xs text-muted-foreground">By {log.user}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                      <Clock className="h-3.5 w-3.5" />
                      <span className="font-mono">{log.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <p>Showing 1–8 of 2,847 logs</p>
              <div className="flex gap-2">
                <button className="h-8 rounded-md border border-border bg-background px-3 font-medium hover:bg-surface-alt">← Previous</button>
                <button className="h-8 rounded-md border border-border bg-background px-3 font-medium hover:bg-surface-alt">Next →</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
