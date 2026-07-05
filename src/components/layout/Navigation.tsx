import { useEffect, useState } from 'react';
import { Github } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 clamp(1rem, 4vw, 2.5rem)',
        height: '58px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(2,4,9,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(56,189,248,0.08)' : 'none',
        transition: 'all 0.35s ease',
      }}
    >
      <div
        style={{
          fontFamily: "'Orbitron', monospace",
          fontWeight: 900,
          fontSize: '1rem',
          background: 'linear-gradient(135deg, #38bdf8, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '0.15em',
        }}
      >
        {siteConfig.shortName}
      </div>

      <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
        {siteConfig.navigation.map((link) => (
          <a key={link.label} href={link.href} className="nav-link" style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}>
            {link.label}
          </a>
        ))}
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.68rem',
            color: '#38bdf8',
            textDecoration: 'none',
            border: '1px solid rgba(56,189,248,0.3)',
            padding: '0.35rem 0.85rem',
            borderRadius: '4px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.background = 'rgba(56,189,248,0.08)';
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.background = 'transparent';
          }}
        >
          <Github size={12} /> GitHub
        </a>
      </div>
    </nav>
  );
}
