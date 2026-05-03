export function Logo({ tone = "default" }: { tone?: "default" | "light" }) {
  return (
    <span className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-md bg-saffron-gradient text-primary-foreground shadow-soft">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7l8-4 8 4v10l-8 4-8-4V7z" />
          <path d="M12 11v10" />
          <path d="M4 7l8 4 8-4" />
        </svg>
      </span>
      <span className={`font-display text-xl font-bold tracking-tight ${tone === "light" ? "text-primary-foreground" : "text-foreground"}`}>
        The Rent<span className="text-primary">Verse</span>
      </span>
    </span>
  );
}
