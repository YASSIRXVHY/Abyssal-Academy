/**
 * Hero Section - Premium Luxury Black/White Design
 * Features:
 * - Fullscreen dark hero with 3D floating element
 * - Subtle glitch effect on title (hover + intermittent)
 * - Noise overlay for film-like texture
 * - Smooth Framer Motion animations
 * - Micro-interactions on CTA buttons
 */

import { useRef, useEffect, Suspense, lazy } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown } from 'lucide-react';
import LuxuryGlitch from '@/components/LuxuryGlitch';
import { StaticNoise } from '@/components/NoiseOverlay';

// Lazy load 3D component for performance
const FloatingShape = lazy(() => import('@/components/FloatingShape'));

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const, // Smooth cubic bezier
    },
  },
};

export default function Hero() {
  const { t, i18n } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const isRTL = i18n.language === 'ar';

  // Parallax scroll effect for background elements
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && (e.target as HTMLElement)?.getAttribute('role') === 'button') {
        (e.target as HTMLElement).click();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen w-full bg-black overflow-hidden"
      aria-label="Hero section"
    >
      {/* Noise texture overlay - subtle film grain */}
      <StaticNoise opacity={0.025} />

      {/* 3D Background Element */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <Suspense fallback={null}>
          <FloatingShape />
        </Suspense>
      </motion.div>

      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(30,30,30,0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(20,20,20,0.3) 0%, transparent 40%),
            linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)
          `,
        }}
      />

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center"
        style={{ opacity: opacityFade }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 xl:px-16">
          <div className={`grid lg:grid-cols-12 gap-8 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Left Content Column - Offset for asymmetry */}
            <div className={`lg:col-span-7 lg:col-start-1 ${isRTL ? 'lg:order-2 lg:col-start-6 text-right' : ''}`}>
              
              {/* Eyebrow Label */}
              <motion.p
                variants={itemVariants}
                className={`text-xs md:text-sm text-neutral-500 mb-6 tracking-[0.4em] uppercase font-medium ${isRTL ? 'text-right' : ''}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {t('hero.label', { defaultValue: 'Online English Academy' })}
              </motion.p>

              {/* Main Title with Glitch Effect */}
              <motion.div variants={itemVariants} className={`mb-8 ${isRTL ? 'text-right' : ''}`}>
                <LuxuryGlitch
                  as="h1"
                  trigger="both"
                  intensity="low"
                  className="text-[clamp(2.8rem,8vw,6.5rem)] font-bold text-white leading-[0.95] tracking-[-0.02em] select-none inline-block"
                >
                  <span dir={isRTL ? 'rtl' : 'ltr'}>
                    {t('hero.title', { defaultValue: 'Abyssal Academy' })}
                  </span>
                </LuxuryGlitch>
              </motion.div>

              {/* Subtitle - Clean hierarchy */}
              <motion.p
                variants={itemVariants}
                className={`text-neutral-400 text-base md:text-lg lg:text-xl mb-12 max-w-md leading-relaxed font-light ${isRTL ? 'text-right' : ''}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {t('hero.subtitle', { defaultValue: 'Master English from anywhere. All levels, professional instructors, proven results.' })}
              </motion.p>

              {/* CTA Buttons with micro-interactions */}
              <motion.div
                variants={itemVariants}
                className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
              >
                {/* Primary CTA - Start Learning */}
                <motion.button
                  onClick={() => scrollToSection('#programs')}
                  className={`group relative overflow-hidden bg-white text-black px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium inline-flex items-center justify-center gap-3 transition-all duration-500 ease-out ${isRTL ? 'flex-row-reverse' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={t('hero.startLearning', { defaultValue: 'Start Learning' })}
                >
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className={`relative z-10 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('hero.startLearning', { defaultValue: 'Start Learning' })}
                    <ArrowRight 
                      className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} 
                    />
                  </span>
                </motion.button>

                {/* Secondary CTA - Learn More */}
                <motion.button
                  onClick={() => scrollToSection('#about')}
                  className="group relative border border-neutral-700 text-neutral-300 hover:text-white px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium transition-all duration-500 ease-out hover:border-neutral-500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={t('hero.learnMore', { defaultValue: 'Learn More' })}
                >
                  {/* Border glow effect */}
                  <span className="absolute inset-0 border border-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100" />
                  <span className="relative z-10">
                    {t('hero.learnMore', { defaultValue: 'Learn More' })}
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - Spacer for 3D element visibility */}
            <div className="lg:col-span-5 hidden lg:block" aria-hidden="true" />
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Minimal */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="group flex flex-col items-center gap-3 text-neutral-500 hover:text-neutral-300 transition-colors duration-300"
          whileHover={{ y: 2 }}
          aria-label={t('hero.scroll', { defaultValue: 'Scroll to explore' })}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium">
            {t('hero.scroll', { defaultValue: 'Scroll' })}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}

