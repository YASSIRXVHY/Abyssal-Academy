import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Phone, Globe } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

export default function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section id="about" className="relative py-32 lg:py-40 bg-neutral-950 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black pointer-events-none" />
      
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Left - Title */}
          <div className={`${isRTL ? 'lg:order-2 text-right' : ''}`}>
            <motion.p
              variants={fadeInUp}
              className="text-xs text-neutral-500 mb-6 tracking-[0.4em] uppercase font-medium"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {t('about.label', { defaultValue: 'About Us' })}
            </motion.p>
            
            <motion.h2
              variants={fadeInUp}
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.1] tracking-tight"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {t('about.title', { defaultValue: 'Excellence in Online Education' })}
            </motion.h2>
            
            {/* Decorative line */}
            <motion.div 
              variants={fadeInUp}
              className={`mt-8 h-px w-24 bg-gradient-to-r from-white/40 to-transparent ${isRTL ? 'ml-auto' : ''}`}
            />
          </div>

          {/* Right - Content */}
          <motion.div
            variants={staggerContainer}
            className="space-y-6"
            dir={isRTL ? 'rtl' : ''}
          >
            <motion.p 
              variants={fadeInUp}
              className="text-neutral-400 text-lg leading-relaxed"
            >
              {t('about.p1', { defaultValue: 'At Abyssal Academy, we believe language learning should be accessible, engaging, and effective. Our online platform connects students with professional instructors worldwide.' })}
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="text-neutral-400 text-lg leading-relaxed"
            >
              {t('about.p2', { defaultValue: 'Since 2014, we have helped thousands of students achieve their English goals through personalized instruction and innovative teaching methods.' })}
            </motion.p>
            
            {/* Info Cards */}
            <motion.div 
              variants={fadeInUp}
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 ${isRTL ? 'text-right' : ''}`}
            >
              <div className="group p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <Globe className={`w-5 h-5 text-emerald-500 mb-3 ${isRTL ? 'ml-auto' : ''}`} />
                <p className="text-xs text-neutral-500 tracking-wider uppercase mb-1">{t('about.location', { defaultValue: 'Location' })}</p>
                <p className="text-white font-medium">{t('about.morocco', { defaultValue: 'Morocco' })}</p>
                <p className="text-neutral-500 text-sm">{t('about.online', { defaultValue: '100% Online' })}</p>
              </div>
              
              <div className="group p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                <Phone className={`w-5 h-5 text-blue-500 mb-3 ${isRTL ? 'ml-auto' : ''}`} />
                <p className="text-xs text-neutral-500 tracking-wider uppercase mb-1">{t('about.contact', { defaultValue: 'Contact' })}</p>
                <p className="text-white font-medium" dir="ltr">+212 772529274</p>
                <p className="text-neutral-500 text-sm truncate">yassirgattoa@gmail.com</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
