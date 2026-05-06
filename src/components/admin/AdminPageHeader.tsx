export interface AdminPageHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export function AdminPageHeader({ title, subtitle, label }: AdminPageHeaderProps) {
  return (
    <div className="mb-8">
      {label && (
        <p className="font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-2">
          {label}
        </p>
      )}
      <h1 className="font-display text-4xl font-bold text-foreground">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
