import { useEffect, useRef } from 'react';

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    };

    const colors = ['#38bdf8', '#06b6d4', '#818cf8', '#c084fc', '#38bdf8'];
    const count = Math.min(65, Math.floor(window.innerWidth / 20));
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.4 + 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.55 + 0.25,
    }));

    let animationId = 0;
    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let index = 0; index < particles.length; index += 1) {
        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const dx = particles[index].x - particles[nextIndex].x;
          const dy = particles[index].y - particles[nextIndex].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 125) {
            context.strokeStyle = `rgba(56,189,248,${0.11 * (1 - distance / 125)})`;
            context.lineWidth = 0.5;
            context.beginPath();
            context.moveTo(particles[index].x, particles[index].y);
            context.lineTo(particles[nextIndex].x, particles[nextIndex].y);
            context.stroke();
          }
        }
      }

      for (const particle of particles) {
        context.globalAlpha = particle.opacity;
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      }

      context.globalAlpha = 1;
      animationId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />;
}
