import { motion } from "motion/react";
import { portfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/portfolio/shared/SectionHeading";
import { GlassCard } from "@/components/portfolio/shared/GlassCard";

export function PipelineSection() {
  const width = 860;
  const nodeRadius = 30;
  const steps = portfolioContent.pipeline;
  const spacing = (width - 80) / (steps.length - 1);

  return (
    <section style={{ padding: "clamp(5rem, 10vh, 8rem) clamp(1rem, 6vw, 5rem)", position: "relative", zIndex: 1 }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }} style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeading eyebrow="DATA ARCHITECTURE" title="Data Engineering Pipeline" description="Watch data travel from raw sources to AI-powered insights" />

        <GlassCard style={{ padding: "2.5rem 1rem", overflow: "hidden" }}>
          <svg viewBox={`0 0 ${width} 200`} style={{ width: "100%", maxWidth: "100%", overflow: "visible" }}>
            {steps.map((step, index) => {
              if (index >= steps.length - 1) return null;
              const x1 = 40 + index * spacing + nodeRadius;
              const x2 = 40 + (index + 1) * spacing - nodeRadius;
              const y = 80;
              return (
                <g key={`conn-${index}`}>
                  <line x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(56,189,248,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle r="4" fill={step.color} opacity="0.9" filter="url(#glow)">
                    <animateMotion dur={`${1.6 + index * 0.2}s`} repeatCount="indefinite" begin={`${index * 0.4}s`} path={`M${x1},${y} L${x2},${y}`} />
                  </circle>
                  <circle r="3" fill={steps[index + 1].color} opacity="0.6">
                    <animateMotion dur={`${1.6 + index * 0.2}s`} repeatCount="indefinite" begin={`${index * 0.4 + 0.8}s`} path={`M${x1},${y} L${x2},${y}`} />
                  </circle>
                </g>
              );
            })}

            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {steps.map((step, index) => {
              const cx = 40 + index * spacing;
              const cy = 80;
              return (
                <g key={step.id}>
                  <circle cx={cx} cy={cy} r={nodeRadius + 8} fill={`${step.color}08`} />
                  <circle cx={cx} cy={cy} r={nodeRadius} fill="rgba(10,15,40,0.9)" stroke={step.color} strokeWidth="1.5" opacity="0.95" />
                  <text x={cx} y={cy + 6} textAnchor="middle" fontSize="16" style={{ userSelect: "none" }}>{step.icon}</text>
                  <text x={cx} y={cy + nodeRadius + 18} textAnchor="middle" fill={step.color} fontSize="9" fontFamily="'Orbitron', monospace" fontWeight="700">{step.label}</text>
                  <text x={cx} y={cy + nodeRadius + 30} textAnchor="middle" fill="rgba(148,163,184,0.5)" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">{step.sub}</text>
                </g>
              );
            })}
          </svg>
        </GlassCard>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
          {[
            { label: "Pipeline Stages", value: "7", unit: "nodes" },
            { label: "Processing", value: "Real-Time", unit: "streaming" },
            { label: "Throughput", value: "∞", unit: "scalable" },
            { label: "Output", value: "AI", unit: "insights" },
          ].map((stat) => (
            <GlassCard key={stat.label} style={{ padding: "1rem 1.25rem", textAlign: "center" }}>
              <div style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: "1.2rem", color: "#38bdf8" }}>{stat.value}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "rgba(56,189,248,0.4)", letterSpacing: "0.2em" }}>{stat.unit.toUpperCase()}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(148,163,184,0.6)", marginTop: "0.2rem" }}>{stat.label}</div>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
