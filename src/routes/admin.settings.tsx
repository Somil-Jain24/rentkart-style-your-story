import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings, Lock, Bell, Users, Shield } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";
import { ThemeToggle } from "@/components/rentkart/ThemeToggle";
import { AdminSidebar } from "@/components/rentkart/AdminSidebar";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Settings — Admin" }] }),
  component: AdminSettings,
});

function AdminSettings() {
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
              <h1 className="font-display text-xl font-bold">Settings</h1>
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
          <div className="max-w-2xl">
            {/* Page header */}
            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Configuration</p>
              <h2 className="mt-1 font-display text-2xl font-bold">Settings</h2>
              <p className="mt-1 text-sm text-muted-foreground">Manage admin preferences and system configuration.</p>
            </div>

            {/* Account settings */}
            <section className="mb-8 rounded-2xl border border-border bg-card">
              <div className="border-b border-border p-6">
                <h3 className="font-display text-lg font-semibold">Account</h3>
                <p className="text-xs text-muted-foreground mt-1">Manage your admin account details</p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full name</label>
                  <input
                    type="text"
                    value="Operations Admin"
                    readOnly
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value="ops@rentkart.in"
                    readOnly
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Role</label>
                  <input
                    type="text"
                    value="Super Admin"
                    readOnly
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm"
                  />
                </div>
                <button className="h-10 rounded-lg border border-border bg-background px-4 text-sm font-medium hover:bg-surface-alt transition-colors">
                  Change password
                </button>
              </div>
            </section>

            {/* Security settings */}
            <section className="mb-8 rounded-2xl border border-border bg-card">
              <div className="border-b border-border p-6">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-info" />
                  <div>
                    <h3 className="font-display text-lg font-semibold">Security</h3>
                    <p className="text-xs text-muted-foreground mt-1">Two-factor authentication and session management</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <p className="font-medium text-sm">Two-factor authentication</p>
                    <p className="text-xs text-muted-foreground mt-1">Protect your account with 2FA</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-success-soft text-success text-xs font-semibold">Enabled</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <p className="font-medium text-sm">Session timeout</p>
                    <p className="text-xs text-muted-foreground mt-1">Auto-logout after 30 minutes of inactivity</p>
                  </div>
                  <span className="text-xs text-muted-foreground">30 min</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-sm">Active sessions</p>
                    <p className="text-xs text-muted-foreground mt-1">Manage your login sessions across devices</p>
                  </div>
                  <button className="h-8 rounded-lg border border-border bg-background px-3 text-xs font-medium hover:bg-surface-alt">Manage</button>
                </div>
              </div>
            </section>

            {/* Notifications settings */}
            <section className="mb-8 rounded-2xl border border-border bg-card">
              <div className="border-b border-border p-6">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-warning" />
                  <div>
                    <h3 className="font-display text-lg font-semibold">Notifications</h3>
                    <p className="text-xs text-muted-foreground mt-1">Choose what notifications you receive</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { label: "Pending approvals alert", desc: "Notify when approvals exceed threshold" },
                  { label: "High-value listing alert", desc: "Alert for listings over ₹1,00,000" },
                  { label: "Dispute escalation", desc: "Notify of disputes in resolution queue" },
                  { label: "Seller suspension alert", desc: "Alert when seller is flagged or suspended" },
                ].map((notif) => (
                  <div key={notif.label} className="flex items-center gap-3 py-3 border-b border-border last:border-b-0">
                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{notif.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{notif.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Preferences */}
            <section className="mb-8 rounded-2xl border border-border bg-card">
              <div className="border-b border-border p-6">
                <h3 className="font-display text-lg font-semibold">Preferences</h3>
                <p className="text-xs text-muted-foreground mt-1">Customize your admin experience</p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Default view</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm">
                    <option>Dashboard overview</option>
                    <option>Listings queue</option>
                    <option>KYC reviews</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Items per page</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm">
                    <option>10 items</option>
                    <option>25 items</option>
                    <option>50 items</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Danger zone */}
            <section className="rounded-2xl border border-error/30 bg-error-soft/10">
              <div className="border-b border-error/30 p-6">
                <h3 className="font-display text-lg font-semibold text-error">Danger zone</h3>
                <p className="text-xs text-muted-foreground mt-1">Irreversible actions</p>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4">Sign out from all devices and require re-authentication</p>
                <button className="h-10 rounded-lg border border-error/30 bg-error-soft px-4 text-sm font-medium text-error hover:bg-error-soft/80 transition-colors">
                  Sign out from all devices
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
