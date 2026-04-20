/**
 * NoiseOverlay - Subtle grain/noise texture for premium feel
 * Adds film-like texture without being distracting
 */

import { useRef, useEffect } from 'react';

interface NoiseOverlayProps {
  opacity?: number;
  grainSize?: number;
  animated?: boolean;
}

export default function NoiseOverlay({ 
  opacity = 0.03, 
  grainSize = 1,
  animated = true 
}: NoiseOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Generate noise pattern
    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        data[i] = noise;     // R
        data[i + 1] = noise; // G
        data[i + 2] = noise; // B
        data[i + 3] = 255;   // A
      }

      ctx.putImageData(imageData, 0, 0);
    };

    if (animated) {
      let frame = 0;
      const animate = () => {
        // Regenerate noise every 3rd frame for subtle movement (30fps -> 10fps noise)
        if (frame % 3 === 0) {
          generateNoise();
        }
        frame++;
        animationRef.current = requestAnimationFrame(animate);
      };
      animate();
    } else {
      generateNoise();
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animated]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        opacity,
        mixBlendMode: 'overlay',
        imageRendering: 'pixelated',
      }}
    />
  );
}

// CSS-only static noise for better performance (alternative)
export function StaticNoise({ opacity = 0.02 }: { opacity?: number }) {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        mixBlendMode: 'overlay',
      }}
    />
  );
}
