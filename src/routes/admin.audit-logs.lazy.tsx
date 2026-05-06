import { createLazyFileRoute } from "@tanstack/react-router";
import { Search, Download, AlertCircle, Lock, UserCheck } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { useState } from "react";

export const Route = createLazyFileRoute("/admin/audit-logs")({
  component: AuditLogsPage,
});

interface AuditLog {
  id: string;
  adminName: string;
  action: string;
  module: string;
  timestamp: string;
  ipAddress: string;
  device: string;
  status: "success" | "failed";
}

function AuditLogsPage() {
  const [logs] = useState<AuditLog[]>([
    {
      id: "1",
      adminName: "ops@rentkart.in",
      action: "Approved listing RK-10380",
      module: "Listings",
      timestamp: "Today 2:15 PM",
      ipAddress: "192.168.1.100",
      device: "Chrome on MacOS",
      status: "success",
    },
    {
      id: "2",
      adminName: "ops@rentkart.in",
      action: "Force released hold for ORD-87850",
      module: "Disputes",
      timestamp: "Today 1:45 PM",
      ipAddress: "192.168.1.100",
      device: "Chrome on MacOS",
      status: "success",
    },
    {
      id: "3",
      adminName: "kyc@rentkart.in",
      action: "KYC verification passed - S-2404",
      module: "KYC",
      timestamp: "Today 1:20 PM",
      ipAddress: "192.168.1.101",
      device: "Safari on iPhone",
      status: "success",
    },
    {
      id: "4",
      adminName: "ops@rentkart.in",
      action: "Suspended seller S-2100 (fraud report)",
      module: "Sellers",
      timestamp: "Today 11:30 AM",
      ipAddress: "192.168.1.100",
      device: "Chrome on MacOS",
      status: "success",
    },
    {
      id: "5",
      adminName: "unknown",
      action: "Failed login attempt",
      module: "Auth",
      timestamp: "Today 10:15 AM",
      ipAddress: "203.45.67.89",
      device: "Unknown",
      status: "failed",
    },
  ]);

  const securityEvents = [
    { title: "Failed login attempts", count: "5", severity: "medium" as const },
    { title: "Password changes", count: "12", severity: "low" as const },
    { title: "Role updates", count: "8", severity: "low" as const },
    { title: "Suspicious access events", count: "2", severity: "high" as const },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-8 lg:px-8 max-w-7xl mx-auto">
        <AdminPageHeader
          title="Audit Logs"
          subtitle="Enterprise-grade audit logs dashboard"
        />

        {/* Security Events Summary */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {securityEvents.map((event, idx) => (
            <div
              key={idx}
              className={`rounded-xl border p-4 ${
                event.severity === "high"
                  ? "border-red-200 bg-red-50"
                  : event.severity === "medium"
                  ? "border-yellow-200 bg-yellow-50"
                  : "border-green-200 bg-green-50"
              }`}
            >
              <div className="flex items-start gap-3">
                {event.severity === "high" ? (
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                ) : event.severity === "medium" ? (
                  <Lock className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <UserCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p
                    className={`text-xs font-semibold ${
                      event.severity === "high"
                        ? "text-red-700"
                        : event.severity === "medium"
                        ? "text-yellow-700"
                        : "text-green-700"
                    }`}
                  >
                    {event.title}
                  </p>
                  <p className="text-lg font-bold mt-1">{event.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search & Filters Bar */}
        <div className="mb-8 rounded-xl border border-border bg-card p-4 space-y-4 lg:flex lg:gap-3 lg:space-y-0">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search logs by action, admin, or IP address…"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <select className="px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>All Admins</option>
            <option>ops@rentkart.in</option>
            <option>kyc@rentkart.in</option>
          </select>

          <select className="px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>All Modules</option>
            <option>Listings</option>
            <option>KYC</option>
            <option>Disputes</option>
            <option>Sellers</option>
            <option>Payouts</option>
          </select>

          <select className="px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Today</option>
          </select>

          <button className="px-4 py-2 rounded-lg border border-border bg-background font-semibold hover:bg-surface-alt transition-colors flex items-center gap-2 whitespace-nowrap">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>

        {/* Activity Table */}
        <div className="rounded-2xl border border-border overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-alt">
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Admin Name
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Action Performed
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Module
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Timestamp
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    IP Address
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Device
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="border-b border-border hover:bg-surface-alt transition-colors">
                    <td className="px-6 py-4 text-foreground">
                      <span className="font-mono text-xs">{log.adminName}</span>
                    </td>
                    <td className="px-6 py-4 font-medium text-foreground">{log.action}</td>
                    <td className="px-6 py-4 text-foreground">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                        {log.module}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-xs">{log.timestamp}</td>
                    <td className="px-6 py-4 text-foreground">
                      <span className="font-mono text-xs">{log.ipAddress}</span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-xs">{log.device}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={log.status}>
                        {log.status === "success" ? "Success" : "Failed"}
                      </StatusBadge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Showing 1-5 of 1,247 audit logs</p>
          <div className="flex gap-2">
            <button className="px-3 py-2 rounded-lg border border-border hover:bg-surface-alt text-sm font-medium transition-colors">
              Previous
            </button>
            <button className="px-3 py-2 rounded-lg border border-border hover:bg-surface-alt text-sm font-medium transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
