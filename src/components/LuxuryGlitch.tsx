/**
 * LuxuryGlitch - Premium minimal glitch effect
 * RGB shift with subtle distortion lines on hover/intermittent
 * NOT chaotic - elegant and restrained
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LuxuryGlitchProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  trigger?: 'hover' | 'auto' | 'both';
  intensity?: 'low' | 'medium' | 'high';
}

export default function LuxuryGlitch({
  children,
  className = '',
  as: Component = 'div',
  trigger = 'both',
  intensity = 'low',
}: LuxuryGlitchProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchKey, setGlitchKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Intensity settings - keep it minimal and luxury
  const intensityConfig = {
    low: { duration: 0.15, stagger: 0.02, rgbOffset: 2 },
    medium: { duration: 0.2, stagger: 0.03, rgbOffset: 3 },
    high: { duration: 0.25, stagger: 0.04, rgbOffset: 4 },
  };

  const config = intensityConfig[intensity];

  // Auto-trigger intermittent glitch
  useEffect(() => {
    if (trigger === 'auto' || trigger === 'both') {
      intervalRef.current = setInterval(() => {
        // 15% chance to glitch every 4-6 seconds (very subtle)
        if (Math.random() > 0.85) {
          setIsGlitching(true);
          setGlitchKey(prev => prev + 1);
          setTimeout(() => setIsGlitching(false), config.duration * 1000);
        }
      }, 4000 + Math.random() * 2000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [trigger, config.duration]);

  const handleMouseEnter = useCallback(() => {
    if (trigger === 'hover' || trigger === 'both') {
      setIsGlitching(true);
      setGlitchKey(prev => prev + 1);
    }
  }, [trigger]);

  const handleMouseLeave = useCallback(() => {
    if (trigger === 'hover' || trigger === 'both') {
      setIsGlitching(false);
    }
  }, [trigger]);

  return (
    <Component
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        textShadow: isGlitching 
          ? `${config.rgbOffset}px 0 rgba(255,0,0,0.3), -${config.rgbOffset}px 0 rgba(0,255,255,0.3)` 
          : 'none'
      }}
    >
      {/* Base content */}
      <span className="relative z-10">{children}</span>

      {/* Glitch layers - only render when glitching */}
      <AnimatePresence mode="wait">
        {isGlitching && (
          <>
            {/* Cyan shift layer */}
            <motion.span
              key={`cyan-${glitchKey}`}
              className="absolute inset-0 z-20 text-cyan-400 mix-blend-screen pointer-events-none"
              initial={{ x: 0, opacity: 0 }}
              animate={{ 
                x: [-config.rgbOffset, config.rgbOffset, -config.rgbOffset/2, 0],
                opacity: [0, 0.6, 0.4, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: config.duration, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              {children}
            </motion.span>

            {/* Red shift layer */}
            <motion.span
              key={`red-${glitchKey}`}
              className="absolute inset-0 z-20 text-red-400 mix-blend-screen pointer-events-none"
              initial={{ x: 0, opacity: 0 }}
              animate={{ 
                x: [config.rgbOffset, -config.rgbOffset, config.rgbOffset/2, 0],
                opacity: [0, 0.6, 0.4, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: config.duration, ease: 'easeInOut', delay: 0.01 }}
              aria-hidden="true"
            >
              {children}
            </motion.span>

            {/* Scan line effect */}
            <motion.div
              key={`scan-${glitchKey}`}
              className="absolute inset-0 z-30 pointer-events-none overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: config.duration }}
            >
              <div 
                className="w-full h-px bg-white absolute"
                style={{
                  boxShadow: '0 0 4px rgba(255,255,255,0.8)',
                  top: '30%',
                }}
              />
              <div 
                className="w-full h-px bg-white absolute"
                style={{
                  boxShadow: '0 0 4px rgba(255,255,255,0.6)',
                  top: '70%',
                }}
              />
            </motion.div>

            {/* Subtle distortion bars */}
            <motion.div
              key={`distort-${glitchKey}`}
              className="absolute inset-0 z-25 pointer-events-none"
              initial={{ opacity: 0, scaleY: 1 }}
              animate={{ 
                opacity: [0, 0.1, 0],
                scaleY: [1, 1.02, 0.98, 1],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: config.duration * 0.8 }}
              style={{
                background: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(255,255,255,0.03) 2px,
                  rgba(255,255,255,0.03) 4px
                )`,
              }}
              aria-hidden="true"
            />
          </>
        )}
      </AnimatePresence>
    </Component>
  );
}

// Simpler version for smaller text elements
export function SubtleGlitch({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <span 
      className={`relative inline-block group ${className}`}
    >
      <span className="relative z-10 transition-all duration-150">
        {children}
      </span>
      <span 
        className="absolute inset-0 opacity-0 group-hover:opacity-60 text-cyan-300 mix-blend-screen transition-opacity duration-75 translate-x-[1px]"
        aria-hidden="true"
      >
        {children}
      </span>
      <span 
        className="absolute inset-0 opacity-0 group-hover:opacity-60 text-red-300 mix-blend-screen transition-opacity duration-75 -translate-x-[1px]"
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}
