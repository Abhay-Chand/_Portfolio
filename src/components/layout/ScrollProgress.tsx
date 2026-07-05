import { useScrollProgress } from '../../hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60, height: '2px', background: 'rgba(56,189,248,0.12)' }}>
      <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #38bdf8, #06b6d4)', transition: 'width 0.18s ease-out' }} />
    </div>
  );
}
