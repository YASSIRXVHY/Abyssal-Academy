import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    const chars = text.innerText.split('');
    text.innerHTML = chars
      .map((char) => `<span class="inline-block opacity-0 translate-y-full">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');

    const spans = text.querySelectorAll('span');

    gsap.to(spans, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.03,
      ease: 'power3.out',
      delay: delay,
      scrollTrigger: {
        trigger: text,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }, [children, delay]);

  return (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );
}

export function WordReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    const words = text.innerText.split(' ');
    text.innerHTML = words
      .map((word) => `<span class="inline-block overflow-hidden mr-[0.25em]"><span class="inline-block translate-y-full">${word}</span></span>`)
      .join('');

    const spans = text.querySelectorAll('span > span');

    gsap.to(spans, {
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      delay: delay,
      scrollTrigger: {
        trigger: text,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }, [children, delay]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}

export function LineReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
