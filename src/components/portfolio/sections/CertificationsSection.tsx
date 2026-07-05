import { motion } from "motion/react";
import { Award } from "lucide-react";
import { portfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/portfolio/shared/SectionHeading";

export function CertificationsSection() {
  return (
    <section id="certifications" style={{ padding: "clamp(5rem, 10vh, 8rem) clamp(1rem, 6vw, 5rem)", position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}>
        <SectionHeading eyebrow="CREDENTIALS" title="Certifications" description={`${portfolioContent.certifications.length} credentials · IBM · Deloitte · Tata · Neo4j · AlmaBetter`} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
          {portfolioContent.certifications.map((certification, index) => (
            <motion.div key={certification.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="cert-card" style={{ "--cert-color": certification.color } as React.CSSProperties}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: `${certification.color}18`, border: `1px solid ${certification.color}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Award size={14} color={certification.color} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 500, color: "#e2e8f0", lineHeight: 1.4, marginBottom: "0.35rem" }}>{certification.name}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", color: certification.color, opacity: 0.8 }}>{certification.issuer}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "rgba(148,163,184,0.45)" }}>{certification.date}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
