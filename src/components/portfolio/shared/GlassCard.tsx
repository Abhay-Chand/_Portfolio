import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/app/components/ui/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function GlassCard({ children, className, style }: GlassCardProps) {
  return (
    <div className={cn("glow-card", className)} style={style}>
      {children}
    </div>
  );
}
