import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Github, Linkedin } from "lucide-react";
import { useRoleCycler } from "@/hooks/useRoleCycler";
import { portfolioContent } from "@/data/portfolio";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const { roleIdx, roleVisible } = useRoleCycler(portfolioContent.roles);

  return (
    <section id="home" style={{ minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 clamp(1rem, 4vw, 3rem)", zIndex: 1 }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(56,189,248,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
        <div className="section-label" style={{ fontSize: "0.6rem", letterSpacing: "0.45em", marginBottom: "1.75rem" }}>PORTFOLIO.EXE — INITIALIZED</div>

        <h1 className="shimmer-text" style={{ fontFamily: "'Orbitron', monospace", fontWeight: 900, fontSize: "clamp(3.2rem, 12vw, 9rem)", lineHeight: 0.95, letterSpacing: "0.04em", marginBottom: "1.25rem" }}>
          {siteConfig.name.split(" ").map((part) => `${part}\n`).join("").trim()}
        </h1>

        <div style={{ height: "2.2rem", overflow: "hidden", marginBottom: "2.25rem", position: "relative" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(0.75rem, 2.2vw, 1.05rem)", letterSpacing: "0.35em", color: "#06b6d4", transition: "opacity 0.32s ease, transform 0.32s ease", opacity: roleVisible ? 1 : 0, transform: roleVisible ? "translateY(0)" : "translateY(8px)" }}>
            {portfolioContent.roles[roleIdx].toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", gap: "clamp(1.5rem, 4vw, 3rem)", justifyContent: "center", marginBottom: "2.75rem" }}>
          {siteConfig.heroStats.map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#38bdf8", textShadow: "0 0 20px rgba(56,189,248,0.4)" }}>{stat.value}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "rgba(148,163,184,0.55)", letterSpacing: "0.25em", marginTop: "0.2rem" }}>{stat.label.toUpperCase()}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.7rem 1.6rem", background: "linear-gradient(135deg, #38bdf8, #06b6d4)", color: "#020409", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", borderRadius: "5px", textDecoration: "none", boxShadow: "0 0 24px rgba(56,189,248,0.3)", transition: "opacity 0.2s ease" }} onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
            VIEW WORK <ArrowRight size={13} />
          </a>
          <a href={portfolioContent.linkedin} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.7rem 1.6rem", background: "transparent", color: "#38bdf8", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", borderRadius: "5px", textDecoration: "none", border: "1px solid rgba(56,189,248,0.35)", transition: "all 0.2s ease" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(56,189,248,0.07)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
            <Linkedin size={13} /> LINKEDIN
          </a>
        </div>
      </motion.div>

      <div className="bounce-y" style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "rgba(56,189,248,0.35)", letterSpacing: "0.35em", zIndex: 1 }}>
        SCROLL
        <ChevronDown size={13} />
      </div>
    </section>
  );
}
