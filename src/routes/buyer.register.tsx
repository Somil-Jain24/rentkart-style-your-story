import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";

export const Route = createFileRoute("/buyer/register")({
  head: () => ({ meta: [{ title: "Create renter account — RentKart" }] }),
  component: BuyerRegister,
});

function BuyerRegister() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/role" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <Logo />
        <span className="w-12" />
      </header>

      <main className="mx-auto grid max-w-5xl gap-10 px-4 py-8 lg:grid-cols-[1.2fr,1fr] lg:py-14 lg:px-8">
        <section>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Renter signup</p>
          <h1 className="mt-2 font-display text-3xl font-bold">Create your renter account</h1>
          <p className="mt-1 text-sm text-muted-foreground">Takes 2 minutes. We'll verify your mobile to keep RentKart safe.</p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name" placeholder="Priya" />
              <Field label="Last name" placeholder="Sharma" />
            </div>
            <Field label="Email" type="email" placeholder="priya@example.com" />
            <div>
              <label className="text-sm font-medium">Mobile number</label>
              <div className="mt-1 flex h-11 items-center rounded-lg border border-border bg-card">
                <span className="grid h-full w-14 place-items-center border-r border-border font-mono text-sm text-muted-foreground">+91</span>
                <input className="h-full flex-1 bg-transparent px-3 outline-none font-mono" placeholder="98xxxxxxxx" />
                <button type="button" className="mr-1.5 h-8 rounded-md bg-saffron-soft px-3 text-xs font-semibold text-primary-deep">
                  Send OTP
                </button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Create password" type="password" placeholder="Min 8 characters" />
              <Field label="City" placeholder="Mumbai" />
            </div>
            <label className="flex items-start gap-2 text-xs text-muted-foreground">
              <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-border text-primary" defaultChecked />
              <span>I agree to RentKart's <a className="text-primary" href="#">Terms</a> and <a className="text-primary" href="#">Privacy Policy</a>. I understand that the refundable hold is reversed only after a successful return inspection.</span>
            </label>
            <Link to="/buyer" className="grid h-12 place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
              Create account & start browsing
            </Link>
          </form>
        </section>

        <aside className="rounded-2xl border border-border bg-surface-alt/60 p-6 lg:sticky lg:top-6 lg:self-start">
          <h3 className="font-display text-lg font-semibold">What you get on RentKart</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              "Refundable hold — never charged if you return on time",
              "Free cancellation up to 5 days before rental",
              "Verified sellers across 24 cities",
              "₹500 first-rental credit when you complete signup",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-lg border border-border bg-card p-4">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Welcome credit</p>
            <p className="mt-1 font-display text-2xl font-bold text-primary">₹500</p>
            <p className="text-xs text-muted-foreground">Auto-applied at checkout on your first rental.</p>
          </div>
        </aside>
      </main>
    </div>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-1 h-11 w-full rounded-lg border border-border bg-card px-3 text-base outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
