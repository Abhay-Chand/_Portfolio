import { motion } from "motion/react";
import { portfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/portfolio/shared/SectionHeading";
import { GlassCard } from "@/components/portfolio/shared/GlassCard";

export function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "clamp(5rem, 10vh, 8rem) clamp(1rem, 6vw, 5rem)", position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}>
        <SectionHeading eyebrow="PROFESSIONAL JOURNEY" title="Experience" />

        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          <div style={{ position: "absolute", left: 0, top: "1.2rem", bottom: "1.2rem", width: "1px", background: "linear-gradient(180deg, #38bdf8 0%, rgba(56,189,248,0.3) 100%)" }} />

          {portfolioContent.experience.map((experience, index) => (
            <motion.div key={experience.company} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.15 }} style={{ position: "relative", marginBottom: index < portfolioContent.experience.length - 1 ? "2.5rem" : 0 }}>
              <div style={{ position: "absolute", left: "-2rem", top: "1.2rem", transform: "translate(-50%, -50%)", width: "10px", height: "10px", borderRadius: "50%", background: experience.current ? "#38bdf8" : "rgba(56,189,248,0.4)", border: "2px solid #38bdf8", boxShadow: experience.current ? "0 0 12px #38bdf8" : "none" }} />

              <GlassCard style={{ padding: "1.5rem 1.75rem", marginLeft: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.6rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div>
                    <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "1rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "0.2rem" }}>{experience.title}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#38bdf8", fontWeight: 500 }}>{experience.company}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(148,163,184,0.6)", marginBottom: "0.3rem" }}>{experience.period}</div>
                    {experience.current ? (
                      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "#10b981", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", padding: "0.15rem 0.5rem", borderRadius: "3px" }}>
                        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981" }} />
                        CURRENT
                      </div>
                    ) : null}
                  </div>
                </div>

                <ul style={{ margin: "0.85rem 0", padding: 0, listStyle: "none" }}>
                  {experience.highlights.map((highlight, highlightIndex) => (
                    <li key={`${experience.company}-${highlightIndex}`} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontFamily: "'Inter', sans-serif", fontSize: "0.84rem", color: "rgba(148,163,184,0.85)", lineHeight: 1.7, marginBottom: "0.4rem" }}>
                      <span style={{ color: "#38bdf8", flexShrink: 0, marginTop: "0.35rem", fontSize: "0.5rem" }}>◆</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.75rem" }}>
                  {experience.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </GlassCard>
            </motion.div>
          ))}

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} style={{ position: "relative", marginTop: "2.5rem" }}>
            <div style={{ position: "absolute", left: "-2rem", top: "1.2rem", transform: "translate(-50%, -50%)", width: "10px", height: "10px", borderRadius: "50%", background: "#818cf8", border: "2px solid #818cf8", boxShadow: "0 0 10px #818cf8" }} />
            <GlassCard style={{ padding: "1.25rem 1.75rem", marginLeft: "1rem", borderColor: "rgba(129,140,248,0.2)" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "rgba(129,140,248,0.6)", letterSpacing: "0.25em", marginBottom: "0.4rem" }}>EDUCATION</div>
              <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "0.88rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "0.2rem" }}>B.Tech — Artificial Intelligence & ML</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "rgba(148,163,184,0.7)" }}>Uttarakhand Technical University · 2022 — 2026</div>
            </GlassCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
