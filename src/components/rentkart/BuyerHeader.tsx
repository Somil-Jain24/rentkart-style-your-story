import { Link } from "@tanstack/react-router";
import { Search, Heart, ShoppingBag, Bell, MapPin, Menu } from "lucide-react";
import { Logo } from "./Logo";

export function BuyerHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 lg:px-8">
        <Link to="/buyer" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link to="/buyer" className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-surface-alt">
            Discover
          </Link>
          <Link to="/buyer/browse" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-surface-alt hover:text-foreground">
            Browse
          </Link>
          <Link to="/buyer/orders" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-surface-alt hover:text-foreground">
            My Orders
          </Link>
          <Link to="/help" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-surface-alt hover:text-foreground">
            Help
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <button className="hidden items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:bg-surface-alt md:flex">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium text-foreground">Mumbai</span>
            <span className="font-mono">400050</span>
          </button>

          <Link
            to="/buyer/browse"
            className="hidden h-10 max-w-sm flex-1 items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:bg-surface-alt md:flex"
          >
            <Search className="h-4 w-4" />
            <span>Search lehengas, sherwanis, sarees…</span>
          </Link>

          <button aria-label="Search" className="grid h-10 w-10 place-items-center rounded-lg hover:bg-surface-alt md:hidden">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Wishlist" className="hidden h-10 w-10 place-items-center rounded-lg hover:bg-surface-alt md:grid">
            <Heart className="h-5 w-5" />
          </button>
          <button aria-label="Notifications" className="relative grid h-10 w-10 place-items-center rounded-lg hover:bg-surface-alt">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
          </button>
          <Link to="/buyer/profile" aria-label="Profile" className="hidden h-10 w-10 place-items-center rounded-full bg-saffron-soft text-sm font-semibold text-primary-deep md:grid">
            PS
          </Link>
          <button aria-label="Menu" className="grid h-10 w-10 place-items-center rounded-lg hover:bg-surface-alt lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
