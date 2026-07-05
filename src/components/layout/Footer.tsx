import { Github, Linkedin, MapPin } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function Footer() {
  return (
    <footer style={{ padding: '4rem clamp(1rem, 6vw, 5rem) 3rem', position: 'relative', zIndex: 1, borderTop: '1px solid rgba(56,189,248,0.08)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Orbitron', monospace", fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 4rem)', background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(129,140,248,0.2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          {siteConfig.name}
        </div>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'rgba(148,163,184,0.6)', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          {siteConfig.footerNote}
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {[
            { icon: <Github size={16} />, label: 'GitHub', href: siteConfig.github },
            { icon: <Linkedin size={16} />, label: 'LinkedIn', href: siteConfig.linkedin },
            { icon: <MapPin size={16} />, label: siteConfig.location, href: '#' },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'rgba(148,163,184,0.65)', textDecoration: 'none', border: '1px solid rgba(56,189,248,0.14)', padding: '0.55rem 1.1rem', borderRadius: '5px', transition: 'all 0.2s ease' }} onMouseEnter={(event) => { event.currentTarget.style.color = '#38bdf8'; event.currentTarget.style.borderColor = 'rgba(56,189,248,0.35)'; event.currentTarget.style.background = 'rgba(56,189,248,0.05)'; }} onMouseLeave={(event) => { event.currentTarget.style.color = 'rgba(148,163,184,0.65)'; event.currentTarget.style.borderColor = 'rgba(56,189,248,0.14)'; event.currentTarget.style.background = 'transparent'; }}>
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: 'rgba(56,189,248,0.25)', letterSpacing: '0.2em' }}>
          {siteConfig.name} · {siteConfig.bootVersion} · BUILT WITH REACT
        </div>
      </div>
    </footer>
  );
}
