import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, FileCheck, Users, AlertTriangle, Wallet, BarChart3, LogOut, Settings, HelpCircle } from "lucide-react";
import { Logo } from "./Logo";

export function AdminSidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  const menuItems = [
    { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard, exact: true },
    { to: "/admin/listings", label: "Listing Approvals", icon: FileCheck, badge: "14" },
    { to: "/admin/kyc", label: "KYC Review", icon: Users, badge: "6" },
    { to: "/admin/disputes", label: "Disputes", icon: AlertTriangle, badge: "3" },
    { to: "/admin/payouts", label: "Payouts", icon: Wallet },
    { to: "/admin/sellers", label: "Seller Management", icon: Users },
    { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
    { to: "/admin/audit-logs", label: "Audit Logs", icon: LayoutDashboard },
  ];

  const bottomItems = [
    { to: "/admin/settings", label: "Settings", icon: Settings },
    { to: "/help", label: "Help & support", icon: HelpCircle },
  ];

  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-border lg:bg-card lg:h-screen lg:sticky lg:top-0">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-border px-5">
        <Link to="/" className="hover:opacity-75">
          <Logo />
        </Link>
      </div>

      {/* Badge */}
      <div className="px-5 py-3">
        <span className="rounded-full bg-info-soft px-2 py-0.5 text-[10px] font-semibold text-info">Operations console</span>
      </div>

      {/* Main nav */}
      <nav className="flex-1 space-y-0.5 p-3 overflow-y-auto">
        {menuItems.map((item) => {
          const active = item.exact ? path === item.to : path.startsWith(item.to as string);
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to as never}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors relative ${
                active
                  ? "bg-saffron-soft text-primary-deep"
                  : "text-muted-foreground hover:bg-surface-alt hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-error/20 text-[10px] font-semibold text-error">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom nav */}
      <div className="space-y-0.5 border-t border-border p-3">
        {bottomItems.map((item) => {
          const active = path === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to as never}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-saffron-soft text-primary-deep"
                  : "text-muted-foreground hover:bg-surface-alt hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Admin info */}
      <div className="border-t border-border p-3">
        <div className="flex items-center gap-2 rounded-lg bg-surface-alt p-3">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-saffron-soft text-xs font-bold text-primary-deep">
            OP
          </div>
          <div className="min-w-0 flex-1 text-xs">
            <p className="font-semibold truncate">Admin Ops</p>
            <p className="truncate text-muted-foreground">ops@rentkart.in</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
