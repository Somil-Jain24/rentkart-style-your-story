import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, Store, ArrowRight, Check } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";

export const Route = createFileRoute("/role")({
  head: () => ({
    meta: [
      { title: "Choose your role — The RentVerse" },
      { name: "description", content: "Sign up as a renter or as a seller on The RentVerse." },
    ],
  }),
  component: RoleSelect,
});

function RoleSelect() {
  return (
    <div className="min-h-screen bg-warm-gradient">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/"><Logo /></Link>
        <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground">Sign in instead</Link>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 lg:px-8 lg:py-20">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Welcome to The RentVerse</p>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-5xl">How will you use The RentVerse?</h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Pick a role to continue. You can switch any time from your profile.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <RoleCard
            to="/buyer/register"
            tone="primary"
            icon={ShoppingBag}
            title="I want to Rent Items"
            tagline="For weddings, parties & shoots"
            features={[
              "Browse 8,400+ designer pieces",
              "Refundable hold — never charged unless damaged",
              "Doorstep delivery in 24–72 hours",
              "Cancel free up to 5 days before event",
            ]}
            cta="Continue as Renter"
          />
          <RoleCard
            to="/seller/register"
            tone="ghost"
            icon={Store}
            title="I want to List Items"
            tagline="Earn from your wardrobe"
            features={[
              "List in 5 mins — free, no monthly fee",
              "Earn ₹15,000–₹80,000 / month avg.",
              "The RentVerse handles delivery, payments & disputes",
              "Same-day payouts after returns",
            ]}
            cta="Continue as Seller"
          />
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already on The RentVerse? <Link to="/login" className="font-semibold text-primary">Sign in</Link>
        </p>
      </main>
    </div>
  );
}

function RoleCard({
  to, tone, icon: Icon, title, tagline, features, cta,
}: {
  to: string;
  tone: "primary" | "ghost";
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  features: string[];
  cta: string;
}) {
  const isPrimary = tone === "primary";
  return (
    <Link
      to={to as never}
      className={`group flex flex-col rounded-3xl border p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card lg:p-8 ${
        isPrimary
          ? "border-primary/30 bg-card ring-1 ring-primary/10"
          : "border-border bg-card"
      }`}
    >
      <div className={`grid h-12 w-12 place-items-center rounded-xl ${isPrimary ? "bg-saffron-gradient text-primary-foreground" : "bg-surface-alt text-foreground"}`}>
        <Icon className="h-6 w-6" />
      </div>
      <p className="mt-5 font-mono text-xs uppercase tracking-wider text-muted-foreground">{tagline}</p>
      <h2 className="mt-1 font-display text-2xl font-bold">{title}</h2>
      <ul className="mt-5 flex-1 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <span
        className={`mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors ${
          isPrimary
            ? "bg-primary text-primary-foreground group-hover:bg-primary-hover"
            : "border border-border bg-background text-foreground group-hover:bg-surface-alt"
        }`}
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
