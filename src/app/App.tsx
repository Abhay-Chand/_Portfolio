import { Component, lazy, Suspense, useState, type ReactNode } from 'react';
import { AboutSection } from '../components/sections/AboutSection';
import { AnalyticsSection } from '../components/sections/AnalyticsSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { HeroSection } from '../components/sections/HeroSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { BootLoader } from '../components/layout/BootLoader';
import { Footer } from '../components/layout/Footer';
import { Navigation } from '../components/layout/Navigation';
import { ParticleCanvas } from '../components/layout/ParticleCanvas';
import { ScrollProgress } from '../components/layout/ScrollProgress';
import { PipelineSection } from '../components/sections/PipelineSection';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '3rem 1rem', textAlign: 'center', color: 'rgba(148,163,184,0.8)' }}>
          Something went wrong while rendering this section.
        </div>
      );
    }

    return this.props.children;
  }
}

function SectionFallback() {
  return (
    <div style={{ padding: '4rem 1rem', textAlign: 'center', color: 'rgba(148,163,184,0.7)' }}>
      Loading section...
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ background: '#020409', minHeight: '100vh', color: '#e2e8f0' }}>
      {!loaded ? (
        <BootLoader onComplete={() => setLoaded(true)} />
      ) : (
        <>
          <ScrollProgress />
          <ParticleCanvas />
          <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(56,189,248,0.03) 0%, transparent 60%)' }} />
          <Navigation />
          <main style={{ position: 'relative', zIndex: 1 }}>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ErrorBoundary>
              <Suspense fallback={<SectionFallback />}>
                <PipelineSection />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
              <Suspense fallback={<SectionFallback />}>
                <AnalyticsSection />
              </Suspense>
            </ErrorBoundary>
            <CertificationsSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
