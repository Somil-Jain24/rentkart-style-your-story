import { createLazyFileRoute } from "@tanstack/react-router";
import { Boxes, FileCheck, AlertTriangle, TrendingUp, Clock, BarChart3, CheckCircle, XCircle, Users, ShieldCheck } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { StatsCard } from "@/components/admin/StatsCard";
import { QuickActionsPanel } from "@/components/admin/QuickActionsPanel";
import { ActivityFeed, ActivityItem } from "@/components/admin/ActivityFeed";

export const Route = createLazyFileRoute("/admin/dashboard")({
  component: OperationsDashboard,
});

function OperationsDashboard() {
  const recentActivity: ActivityItem[] = [
    {
      id: "1",
      title: "Approved listing RK-10380",
      description: "Crystal Embellished Saree",
      timestamp: "2 minutes ago",
      status: "completed",
    },
    {
      id: "2",
      title: "Force released hold for ORD-87850",
      timestamp: "18 minutes ago",
      status: "completed",
    },
    {
      id: "3",
      title: "KYC verification passed - S-2404",
      timestamp: "45 minutes ago",
      status: "completed",
    },
    {
      id: "4",
      title: "Suspended seller S-2100 (fraud report)",
      timestamp: "2 hours ago",
      status: "failed",
    },
    {
      id: "5",
      title: "Issued ₹2,500 store credit to buyer",
      timestamp: "3 hours ago",
      status: "completed",
    },
  ];

  const quickActions = [
    { label: "Review Listings", count: 24 },
    { label: "Approve KYC", count: 12 },
    { label: "Resolve Disputes", count: 8 },
    { label: "Process Payouts", count: 18 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-8 lg:px-8 max-w-7xl mx-auto">
        <AdminPageHeader
          label="Welcome back"
          title="Operations Dashboard"
          subtitle="Real-time overview of marketplace health and pending actions."
        />

        {/* Stats Cards Row */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatsCard
            label="Pending Approvals"
            value="24"
            supporting="+3 today"
            icon={Boxes}
            iconBgColor="lavender"
          />
          <StatsCard
            label="Active Disputes"
            value="8"
            supporting="2 unresolved"
            icon={AlertTriangle}
            iconBgColor="pink"
          />
          <StatsCard
            label="KYC Review Queue"
            value="12"
            supporting="Avg review: 1.2h"
            icon={FileCheck}
            iconBgColor="yellow"
          />
          <StatsCard
            label="Pending Payouts"
            value="₹2.4L"
            supporting="18 sellers"
            icon={TrendingUp}
            iconBgColor="green"
          />
        </div>

        {/* Platform Metrics Card */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-lg font-semibold">Platform Metrics</h2>
              <p className="text-xs text-muted-foreground mt-1">Last 7 days performance</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
          </div>

          <div className="space-y-4">
            {[
              { label: "Total rentals", value: "342" },
              { label: "Avg rental value", value: "₹6,240" },
              { label: "Refund disputes", value: "3.2%" },
              { label: "Seller cancellations", value: "0.8%" },
            ].map((metric, idx) => (
              <div key={idx} className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="font-display font-bold text-foreground">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Activity Feed - Spans 2 columns on desktop */}
          <div className="lg:col-span-2">
            <ActivityFeed
              items={recentActivity}
              title="Recent Activity"
              subtitle="All changes are logged and auditable"
            />
          </div>

          {/* Quick Actions Sidebar */}
          <div>
            <QuickActionsPanel title="Quick Actions" actions={quickActions} />
          </div>
        </div>

        {/* Override Actions Section */}
        <section className="mt-8 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h2 className="font-display text-lg font-semibold">Override Actions</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Audit-logged manual interventions. All actions require dual-approval above ₹50,000.
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                <button className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-medium hover:bg-surface-alt transition-colors">
                  Force release hold
                </button>
                <button className="h-10 rounded-lg border border-red-300 bg-red-50 px-3 text-sm font-medium text-red-700 hover:bg-red-100 transition-colors">
                  Suspend seller
                </button>
                <button className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-medium hover:bg-surface-alt transition-colors">
                  Cancel order + refund
                </button>
                <button className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-medium hover:bg-surface-alt transition-colors">
                  Issue store credit
                </button>
                <button className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-medium hover:bg-surface-alt transition-colors">
                  Trigger payout retry
                </button>
                <button className="h-10 rounded-lg border border-yellow-300 bg-yellow-50 px-3 text-sm font-medium text-yellow-700 hover:bg-yellow-100 transition-colors">
                  Block listing
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
