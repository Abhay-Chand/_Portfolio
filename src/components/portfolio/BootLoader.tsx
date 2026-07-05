import { useEffect, useState } from "react";

const bootMessages = [
  "LOADING AI CORE...",
  "CONNECTING CLOUD INFRASTRUCTURE...",
  "INITIALIZING DISTRIBUTED CLUSTER...",
  "AUTHENTICATING CREDENTIALS...",
  "LOADING DATA WAREHOUSE...",
  "READY.",
];

interface BootLoaderProps {
  onComplete: () => void;
}

export function BootLoader({ onComplete }: BootLoaderProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    bootMessages.forEach((message, index) => {
      timers.push(
        window.setTimeout(() => {
          setLines((previous) => [...previous, message]);
          setProgress(((index + 1) / bootMessages.length) * 100);
        }, index * 430),
      );
    });
    timers.push(
      window.setTimeout(() => {
        setFading(true);
        window.setTimeout(onComplete, 700);
      }, bootMessages.length * 430 + 400),
    );
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "#020409", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transition: "opacity 0.7s ease", opacity: fading ? 0 : 1, pointerEvents: fading ? "none" : "auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <div style={{ fontFamily: "'Orbitron', monospace", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3rem)", background: "linear-gradient(135deg, #38bdf8, #06b6d4, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "0.25em", marginBottom: "0.4rem" }}>AC</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "rgba(56,189,248,0.4)", letterSpacing: "0.4em" }}>PORTFOLIO OS v1.0.0</div>
      </div>

      <div style={{ width: "min(480px, 88vw)", background: "rgba(10,15,40,0.8)", border: "1px solid rgba(56,189,248,0.18)", borderRadius: "10px", padding: "1.5rem 1.75rem", backdropFilter: "blur(20px)", boxShadow: "0 0 50px rgba(56,189,248,0.07)" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", lineHeight: 1.8 }}>
          {lines.map((line, index) => (
            <div key={`${line}-${index}`} style={{ display: "flex", gap: "0.6rem", alignItems: "baseline" }}>
              <span style={{ color: "rgba(56,189,248,0.3)", flexShrink: 0 }}>▶</span>
              <span style={{ color: line === "READY." ? "#10b981" : "rgba(56,189,248,0.85)" }}>{line}</span>
              {index === lines.length - 1 && line !== "READY." ? <span className="cursor-blink" style={{ color: "#38bdf8" }}>█</span> : null}
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: "min(480px, 88vw)", marginTop: "1rem" }}>
        <div style={{ height: "2px", background: "rgba(56,189,248,0.12)", borderRadius: "1px", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, #38bdf8, #06b6d4)", transition: "width 0.4s ease", boxShadow: "0 0 8px #38bdf8" }} />
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "rgba(56,189,248,0.35)", textAlign: "right", marginTop: "0.3rem" }}>{Math.round(progress)}%</div>
      </div>
    </div>
  );
}
