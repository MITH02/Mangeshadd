import { cn } from "@/lib/utils";
import logoAsset from "@/logos/Advocate_Mangesh_Ladhe_Logo.png";

interface BrandMarkProps {
  className?: string;
  tone?: "indigo" | "white";
  alt?: string;
}

export function BrandMark({ className, tone = "indigo", alt = "Mangesh Ladhe crest" }: BrandMarkProps) {
  const toneStyles = tone === "white"
    ? "drop-shadow-[0_6px_16px_rgba(15,32,61,0.28)]"
    : "drop-shadow-sm";

  return (
    <img
      src={logoAsset}
      alt={alt}
      className={cn("block select-none", toneStyles, className)}
      loading="lazy"
    />
  );
}

export function BrandBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[#0b1f3a] text-white shadow-xl ring-4 ring-white/30",
        className
      )}
    >
      <BrandMark tone="white" className="h-4/5 w-4/5" />
    </span>
  );
}

export default BrandMark;
