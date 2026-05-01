import { cn } from "@/lib/utils";

type Props = {
  hue: number;
  className?: string;
  label?: string;
  variant?: "card" | "hero" | "thumb";
};

// Visual placeholder for product imagery — uses warm gradients, not "AI glow blobs".
// Conveys fabric/texture feel via layered conic + linear gradients.
export function ProductImage({ hue, className, label, variant = "card" }: Props) {
  const h = hue;
  const bg = `radial-gradient(120% 80% at 30% 20%, oklch(0.78 0.12 ${h}) 0%, oklch(0.55 0.16 ${h}) 45%, oklch(0.32 0.1 ${h + 10}) 100%)`;
  const overlay = `repeating-linear-gradient(115deg, transparent 0 18px, oklch(1 0 0 / 0.04) 18px 19px)`;

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        variant === "card" && "aspect-[3/4] rounded-xl",
        variant === "hero" && "aspect-[4/5] rounded-2xl",
        variant === "thumb" && "aspect-square rounded-lg",
        className,
      )}
      style={{ backgroundImage: `${overlay}, ${bg}` }}
      aria-label={label || "Product image"}
      role="img"
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(60% 40% at 70% 80%, oklch(0.95 0.05 ${h} / 0.35), transparent 60%)`,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}
