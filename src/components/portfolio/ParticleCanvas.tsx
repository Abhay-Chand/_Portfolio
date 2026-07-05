import { useEffect, useRef } from "react";

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const colors = ["#38bdf8", "#06b6d4", "#818cf8", "#c084fc", "#38bdf8"];
    const count = Math.min(65, Math.floor(window.innerWidth / 20));
    const points = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.4 + 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.55 + 0.25,
    }));

    let animationFrameId: number;

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let index = 0; index < points.length; index += 1) {
        for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
          const dx = points[index].x - points[nextIndex].x;
          const dy = points[index].y - points[nextIndex].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 125) {
            context.strokeStyle = `rgba(56,189,248,${0.11 * (1 - distance / 125)})`;
            context.lineWidth = 0.5;
            context.beginPath();
            context.moveTo(points[index].x, points[index].y);
            context.lineTo(points[nextIndex].x, points[nextIndex].y);
            context.stroke();
          }
        }
      }

      for (const point of points) {
        context.globalAlpha = point.opacity;
        context.fillStyle = point.color;
        context.beginPath();
        context.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        context.fill();
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 0) point.x = canvas.width;
        if (point.x > canvas.width) point.x = 0;
        if (point.y < 0) point.y = canvas.height;
        if (point.y > canvas.height) point.y = 0;
      }
      context.globalAlpha = 1;
      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}
