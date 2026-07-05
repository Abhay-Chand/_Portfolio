import { motion } from "motion/react";
import { portfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/portfolio/shared/SectionHeading";
import { GlassCard } from "@/components/portfolio/shared/GlassCard";

export function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "clamp(5rem, 10vh, 8rem) clamp(1rem, 6vw, 5rem)", position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
        <SectionHeading eyebrow="TECHNICAL ECOSYSTEM" title="Skills & Technologies" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {portfolioContent.skillCategories.map((category, index) => (
            <motion.div key={category.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="glow-card" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                <div style={{ width: "3px", height: "20px", borderRadius: "2px", background: category.color, boxShadow: `0 0 8px ${category.color}` }} />
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", fontWeight: 600, color: category.color, letterSpacing: "0.06em" }}>{category.label}</div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill" style={{ "--pill-color": category.color } as React.CSSProperties}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
