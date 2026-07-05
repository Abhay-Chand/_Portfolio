import { motion } from "motion/react";
import { Github, Linkedin, MapPin } from "lucide-react";
import { portfolioContent } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" style={{ padding: "clamp(5rem, 10vh, 8rem) clamp(1rem, 6vw, 5rem)", position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 5vw, 5rem)", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="drift" style={{ position: "relative", width: "280px", height: "280px" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(56,189,248,0.2)", animation: "spin-slow 12s linear infinite" }}>
              <div style={{ position: "absolute", top: "50%", left: 0, width: "8px", height: "8px", borderRadius: "50%", background: "#38bdf8", transform: "translate(-50%,-50%)", boxShadow: "0 0 10px #38bdf8" }} />
            </div>
            <div style={{ position: "absolute", inset: "20px", borderRadius: "50%", border: "1px solid rgba(129,140,248,0.2)", animation: "spin-rev 8s linear infinite" }}>
              <div style={{ position: "absolute", top: 0, left: "50%", width: "6px", height: "6px", borderRadius: "50%", background: "#818cf8", transform: "translate(-50%,-50%)", boxShadow: "0 0 8px #818cf8" }} />
            </div>
            <div style={{ position: "absolute", inset: "40px", borderRadius: "50%", background: "rgba(10,15,40,0.8)", border: "1px solid rgba(56,189,248,0.3)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 0 40px rgba(56,189,248,0.12), inset 0 0 30px rgba(56,189,248,0.04)" }}>
              <div style={{ fontFamily: "'Orbitron', monospace", fontWeight: 900, fontSize: "2.5rem", background: "linear-gradient(135deg, #38bdf8, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AC</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", color: "rgba(56,189,248,0.45)", letterSpacing: "0.25em", marginTop: "0.3rem" }}>AI ENGINEER</div>
            </div>
          </div>
        </div>

        <div>
          <div className="section-label">ABOUT ME</div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", marginBottom: "1.25rem" }}>Building Data-Driven Intelligent Systems</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(148,163,184,0.85)", marginBottom: "1.75rem" }}>{portfolioContent.bio}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem", marginBottom: "1.75rem" }}>
            {[
              { label: "Degree", value: "B.Tech AI & ML" },
              { label: "University", value: "UTU Dehradun" },
              { label: "Location", value: portfolioContent.location },
              { label: "Status", value: "Open to Opportunities" },
            ].map((item) => (
              <div key={item.label} style={{ background: "rgba(10,15,40,0.5)", border: "1px solid rgba(56,189,248,0.1)", borderRadius: "8px", padding: "0.75rem 1rem" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "rgba(56,189,248,0.4)", letterSpacing: "0.2em", marginBottom: "0.2rem" }}>{item.label.toUpperCase()}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 500, color: "#e2e8f0" }}>{item.value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {[
              { icon: <Github size={14} />, label: "GitHub", href: portfolioContent.github },
              { icon: <Linkedin size={14} />, label: "LinkedIn", href: portfolioContent.linkedin },
              { icon: <MapPin size={14} />, label: portfolioContent.location, href: "#" },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "rgba(148,163,184,0.7)", textDecoration: "none", padding: "0.35rem 0.8rem", border: "1px solid rgba(56,189,248,0.14)", borderRadius: "4px", transition: "all 0.2s ease" }} onMouseEnter={(e) => { e.currentTarget.style.color = "#38bdf8"; e.currentTarget.style.borderColor = "rgba(56,189,248,0.35)"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(148,163,184,0.7)"; e.currentTarget.style.borderColor = "rgba(56,189,248,0.14)"; }}>
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
