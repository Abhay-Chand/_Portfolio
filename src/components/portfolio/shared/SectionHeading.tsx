import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description, align = "center", className, children }: SectionHeadingProps) {
  const alignment = align === "left" ? { textAlign: "left" as const } : { textAlign: "center" as const };

  return (
    <div style={{ marginBottom: "3rem", ...alignment }} className={className}>
      <div className="section-label">{eyebrow}</div>
      <h2 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>{title}</h2>
      {description ? (
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "rgba(148,163,184,0.6)", marginTop: "0.75rem" }}>
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
