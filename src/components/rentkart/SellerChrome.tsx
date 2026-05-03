import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Boxes, Package, BarChart3, User, HelpCircle, LogOut } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function SellerSidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const items = [
    { to: "/seller", label: "Dashboard", icon: LayoutDashboard, exact: true },
    { to: "/seller/listings", label: "My Listings", icon: Boxes },
    { to: "/seller/orders", label: "Orders", icon: Package },
    { to: "/seller/analytics", label: "Analytics", icon: BarChart3 },
    { to: "/seller/account", label: "Account", icon: User },
  ];
  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-border lg:bg-card">
      <div className="flex h-16 items-center border-b border-border px-5"><Logo /></div>
      <div className="px-3 py-3">
        <span className="rounded-full bg-success-soft px-2 py-0.5 text-[10px] font-semibold text-success">Seller mode</span>
      </div>
      <nav className="flex-1 space-y-0.5 p-3">
        {items.map((it) => {
          const active = it.exact ? path === it.to : path.startsWith(it.to);
          const Icon = it.icon;
          return (
            <Link key={it.to} to={it.to as never} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${active ? "bg-saffron-soft text-primary-deep" : "text-muted-foreground hover:bg-surface-alt hover:text-foreground"}`}>
              <Icon className="h-4 w-4" /> {it.label}
            </Link>
          );
        })}
      </nav>
      <div className="space-y-0.5 border-t border-border p-3">
        <Link to="/help" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-surface-alt"><HelpCircle className="h-4 w-4" /> Help & support</Link>
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-surface-alt"><LogOut className="h-4 w-4" /> Sign out</button>
      </div>
    </aside>
  );
}

export function SellerTopbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-border bg-background/90 px-4 backdrop-blur lg:px-8">
      <div className="lg:hidden"><Logo /></div>
      <div className="hidden lg:block">
        <h1 className="font-display text-xl font-bold leading-tight">{title}</h1>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Link to="/seller/listings/new" className="hidden h-10 items-center gap-1.5 rounded-lg bg-primary px-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover sm:inline-flex">
          + Add listing
        </Link>
        <div className="grid h-10 w-10 place-items-center rounded-full bg-saffron-soft text-sm font-bold text-primary-deep">AC</div>
      </div>
    </header>
  );
}
