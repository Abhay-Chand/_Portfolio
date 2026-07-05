import { motion } from "motion/react";
import { portfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/portfolio/shared/SectionHeading";

export function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: "clamp(5rem, 10vh, 8rem) clamp(1rem, 6vw, 5rem)", position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}>
        <SectionHeading eyebrow="FEATURED WORK" title="Projects" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {portfolioContent.projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="proj-card">
              <div style={{ height: "2px", background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
              <div style={{ padding: "1.75rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: project.color, letterSpacing: "0.3em", marginBottom: "0.5rem" }}>{project.subtitle.toUpperCase()}</div>
                  <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.05rem", fontWeight: 700, color: "#e2e8f0", lineHeight: 1.3 }}>{project.title}</h3>
                </div>

                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.84rem", color: "rgba(148,163,184,0.8)", lineHeight: 1.75, marginBottom: "1.25rem" }}>{project.description}</p>

                <div style={{ marginBottom: "1.25rem" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "rgba(56,189,248,0.4)", letterSpacing: "0.2em", marginBottom: "0.6rem" }}>OUTCOMES</div>
                  {project.outcomes.map((outcome) => (
                    <div key={outcome} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", marginBottom: "0.3rem" }}>
                      <span style={{ color: project.color, fontSize: "0.55rem", marginTop: "0.38rem", flexShrink: 0 }}>◆</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "rgba(148,163,184,0.75)", lineHeight: 1.5 }}>{outcome}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {project.tech.map((tech) => (
                    <span key={tech} style={{ display: "inline-flex", alignItems: "center", padding: "0.18rem 0.55rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: project.color, background: `${project.color}12`, border: `1px solid ${project.color}22`, borderRadius: "3px" }}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
