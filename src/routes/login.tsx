import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Store } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — RentKart" }] }),
  component: Login,
});

function Login() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <Logo />
        <span className="w-12" />
      </header>
      <main className="mx-auto grid w-full max-w-md gap-6 px-4 py-8 lg:py-16">
        <div>
          <h1 className="font-display text-3xl font-bold">Welcome back</h1>
          <p className="mt-1 text-sm text-muted-foreground">Sign in to continue your RentKart journey.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">Mobile number</label>
            <div className="mt-1 flex h-11 items-center rounded-lg border border-border bg-card focus-within:ring-2 focus-within:ring-ring">
              <span className="grid h-full w-14 place-items-center border-r border-border font-mono text-sm text-muted-foreground">+91</span>
              <input type="tel" inputMode="numeric" maxLength={10} placeholder="98xxxxxxxx" className="h-full flex-1 bg-transparent px-3 text-base outline-none font-mono" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Password</label>
            <input type="password" placeholder="Enter password" className="mt-1 h-11 w-full rounded-lg border border-border bg-card px-3 text-base outline-none focus:ring-2 focus:ring-ring" />
            <a href="#" className="mt-1 block text-right text-xs font-medium text-primary">Forgot password?</a>
          </div>
          <button type="button" className="h-11 w-full rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
            Sign in
          </button>
          <button type="button" className="h-11 w-full rounded-lg border border-border bg-card text-sm font-semibold text-foreground hover:bg-surface-alt">
            Continue with OTP
          </button>
        </form>

        <div className="rounded-xl border border-dashed border-border p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">New to RentKart?</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <Link to="/buyer/register" className="flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5 text-sm font-medium hover:bg-surface-alt">
              <ShoppingBag className="h-4 w-4" /> Sign up to rent
            </Link>
            <Link to="/seller/register" className="flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5 text-sm font-medium hover:bg-surface-alt">
              <Store className="h-4 w-4" /> Sign up to sell
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
