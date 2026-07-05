import { motion } from "motion/react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartData } from "@/data/portfolio";
import { SectionHeading } from "@/components/portfolio/shared/SectionHeading";
import { GlassCard } from "@/components/portfolio/shared/GlassCard";

const chartTooltipStyle = {
  background: "rgba(10,15,40,0.95)",
  border: "1px solid rgba(56,189,248,0.2)",
  borderRadius: "8px",
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.68rem",
  color: "#e2e8f0",
};

export function AnalyticsSection() {
  return (
    <section id="analytics" style={{ padding: "clamp(5rem, 10vh, 8rem) clamp(1rem, 6vw, 5rem)", position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}>
        <SectionHeading eyebrow="ANALYTICS COMMAND CENTER" title="Data Analytics Showcase" description="Interactive recreations of real project dashboards" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="glow-card" style={{ padding: "1.75rem" }}>
            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "rgba(56,189,248,0.4)", letterSpacing: "0.2em" }}>PROJECT 01 · WORLD BANK ANALYSIS</div>
              <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "0.95rem", fontWeight: 700, color: "#e2e8f0", marginTop: "0.3rem" }}>GDP per Capita — Global Benchmark</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#38bdf8", marginTop: "0.2rem" }}>Global Average: $9,310</div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chartData.gdp} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(56,189,248,0.06)" />
                <XAxis dataKey="region" tick={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, fill: "rgba(148,163,184,0.6)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, fill: "rgba(148,163,184,0.6)" }} axisLine={false} tickLine={false} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip contentStyle={chartTooltipStyle} formatter={(value: number) => [`$${value.toLocaleString()}`, "GDP per Capita"]} />
                <ReferenceLine y={9310} stroke="#f472b6" strokeDasharray="4 4" strokeWidth={1.5} label={{ value: "Global Avg", position: "insideTopRight", fill: "#f472b6", fontSize: 9, fontFamily: "'JetBrains Mono', monospace" }} />
                <Bar dataKey="gdp" fill="#38bdf8" fillOpacity={0.7} radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="glow-card" style={{ padding: "1.75rem" }}>
            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "rgba(192,132,252,0.5)", letterSpacing: "0.2em" }}>PROJECT 02 · RETAIL INTELLIGENCE</div>
              <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "0.95rem", fontWeight: 700, color: "#e2e8f0", marginTop: "0.3rem" }}>YoY Sales Growth Analysis</div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginTop: "0.3rem" }}>
                <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.1rem", fontWeight: 900, color: "#10b981", textShadow: "0 0 12px rgba(16,185,129,0.4)" }}>+142%</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(148,163,184,0.5)" }}>Year-over-Year Growth</div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={chartData.retail} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="grad2023" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="grad2024" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c084fc" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#c084fc" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(56,189,248,0.06)" />
                <XAxis dataKey="month" tick={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, fill: "rgba(148,163,184,0.6)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, fill: "rgba(148,163,184,0.6)" }} axisLine={false} tickLine={false} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip contentStyle={chartTooltipStyle} formatter={(value: number) => [`$${value.toLocaleString()}`, ""]} />
                <Area type="monotone" dataKey="2023" stroke="#818cf8" strokeWidth={1.5} fill="url(#grad2023)" name="2023" />
                <Area type="monotone" dataKey="2024" stroke="#c084fc" strokeWidth={2} fill="url(#grad2024)" name="2024" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
          {[
            { label: "Avg GDP Analyzed", value: "$9.31K", sub: "Global per Capita", color: "#38bdf8" },
            { label: "YoY Revenue Growth", value: "142%", sub: "Retail Intelligence", color: "#c084fc" },
            { label: "Dashboards Built", value: "6+", sub: "Power BI & Tableau", color: "#10b981" },
            { label: "Detection Accuracy", value: "~95%", sub: "YOLOv8 Blood Cells", color: "#f472b6" },
          ].map((kpi) => (
            <GlassCard key={kpi.label} style={{ padding: "1.1rem 1.25rem", transition: "all 0.25s ease" }}>
              <div style={{ fontFamily: "'Orbitron', monospace", fontWeight: 900, fontSize: "1.5rem", color: kpi.color, textShadow: `0 0 16px ${kpi.color}50` }}>{kpi.value}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#e2e8f0", marginTop: "0.2rem" }}>{kpi.label}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "rgba(148,163,184,0.45)", letterSpacing: "0.1em", marginTop: "0.2rem" }}>{kpi.sub}</div>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
