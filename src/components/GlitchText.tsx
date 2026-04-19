import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface GlitchTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export default function GlitchText({ children, className = '', as: Component = 'span' }: GlitchTextProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    const originalText = children;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    let iteration = 0;
    const interval = setInterval(() => {
      text.innerText = originalText
        .split('')
        .map((char, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          if (char === ' ') return ' ';
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [children]);

  return <Component ref={textRef as any} className={`font-mono ${className}`}>{children}</Component>;
}

export function GlitchReveal({ children, className = '' }: { children: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      containerRef.current,
      { 
        skewX: 20,
        opacity: 0,
        x: -50,
      },
      {
        skewX: 0,
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power4.out',
      }
    );

    // Add glitch shake effect
    tl.to(containerRef.current, {
      x: 2,
      duration: 0.05,
      repeat: 5,
      yoyo: true,
      ease: 'none',
    }, '-=0.3');

  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
