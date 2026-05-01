import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ShoppingBag, Bell, User, LayoutDashboard, Package, Boxes } from "lucide-react";

export function BuyerBottomNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const items = [
    { to: "/buyer", label: "Home", icon: Home, exact: true },
    { to: "/buyer/orders", label: "Orders", icon: ShoppingBag },
    { to: "/buyer/notifications", label: "Alerts", icon: Bell },
    { to: "/buyer/profile", label: "Profile", icon: User },
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-4 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      {items.map((it) => {
        const active = it.exact ? path === it.to : path.startsWith(it.to);
        const Icon = it.icon;
        return (
          <Link
            key={it.to}
            to={it.to}
            className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium"
          >
            <Icon className={`h-5 w-5 ${active ? "text-primary" : "text-muted-foreground"}`} />
            <span className={active ? "text-primary" : "text-muted-foreground"}>{it.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function SellerBottomNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const items = [
    { to: "/seller", label: "Dashboard", icon: LayoutDashboard, exact: true },
    { to: "/seller/listings", label: "Listings", icon: Boxes },
    { to: "/seller/orders", label: "Orders", icon: Package },
    { to: "/seller/account", label: "Profile", icon: User },
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-4 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      {items.map((it) => {
        const active = it.exact ? path === it.to : path.startsWith(it.to);
        const Icon = it.icon;
        return (
          <Link key={it.to} to={it.to} className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium">
            <Icon className={`h-5 w-5 ${active ? "text-primary" : "text-muted-foreground"}`} />
            <span className={active ? "text-primary" : "text-muted-foreground"}>{it.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
