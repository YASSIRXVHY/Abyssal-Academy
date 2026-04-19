import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowDown } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t, i18n } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.to('.hero-content', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const isRTL = i18n.language === 'ar';

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className={`grid lg:grid-cols-12 gap-12 lg:gap-8 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {/* Left: Text */}
            <div className={`lg:col-span-7 hero-content ${isRTL ? 'lg:order-2 text-right' : ''}`}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-sm text-gray-400 mb-8 tracking-[0.3em] uppercase font-mono"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {t('hero.label')}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[clamp(2.5rem,7vw,6rem)] font-bold text-black leading-[0.95] mb-10 tracking-tight"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {t('hero.title')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-gray-500 text-lg md:text-xl mb-12 max-w-lg leading-relaxed"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
              >
                <MagneticButton
                  onClick={() => scrollToSection('#programs')}
                  className="bg-black text-white hover:bg-gray-800 px-8 py-5 text-sm tracking-[0.2em] uppercase font-medium inline-flex items-center gap-3 transition-colors border border-black"
                >
                  {t('hero.viewPrograms')}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </MagneticButton>

                <MagneticButton
                  onClick={() => scrollToSection('#about')}
                  className="bg-white text-black hover:bg-black hover:text-white px-8 py-5 text-sm tracking-[0.2em] uppercase font-medium border border-black transition-colors"
                >
                  {t('hero.aboutUs')}
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right: Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className={`lg:col-span-5 ${isRTL ? 'lg:order-1' : ''}`}
            >
              <div className="grid grid-cols-2 gap-px bg-black border border-black">
                {[
                  { num: '500+', label: t('nav.students', { defaultValue: 'Students' }) },
                  { num: '20+', label: t('nav.programs', { defaultValue: 'Programs' }) },
                  { num: '15+', label: t('nav.teachers', { defaultValue: 'Teachers' }) },
                  { num: '10+', label: t('nav.years', { defaultValue: 'Years' }) },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ backgroundColor: '#f3f4f6' }}
                    className="bg-white p-8 lg:p-10 group transition-colors duration-300"
                  >
                    <p className="text-4xl lg:text-5xl font-bold text-black mb-2 font-mono">
                      {stat.num}
                    </p>
                    <p className="text-gray-400 text-sm tracking-wider uppercase">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <MagneticButton
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-3 text-gray-400 hover:text-black transition-colors"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-mono">{t('hero.scroll')}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </MagneticButton>
      </motion.div>
    </section>
  );
}
