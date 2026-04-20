import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Desktop, Users, Clock, Trophy, Sparkle } from '@phosphor-icons/react';

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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function WhyChooseUs() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      icon: Desktop,
      number: '01',
      iconWeight: 'duotone',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
      titleKey: 'whyUs.online.title',
      descriptionKey: 'whyUs.online.description',
    },
    {
      icon: Users,
      number: '02',
      iconWeight: 'duotone',
      iconColor: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      titleKey: 'whyUs.teachers.title',
      descriptionKey: 'whyUs.teachers.description',
    },
    {
      icon: Clock,
      number: '03',
      iconWeight: 'duotone',
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50',
      titleKey: 'whyUs.flexible.title',
      descriptionKey: 'whyUs.flexible.description',
    },
    {
      icon: Trophy,
      number: '04',
      iconWeight: 'duotone',
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-50',
      titleKey: 'whyUs.certified.title',
      descriptionKey: 'whyUs.certified.description',
    },
  ];

  return (
    <section id="why-us" className="relative py-32 lg:py-40 bg-neutral-100 overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <div className={`mb-20 ${isRTL ? 'text-right' : ''}`}>
          <motion.p
            variants={fadeInUp}
            className="text-xs text-neutral-400 mb-6 tracking-[0.4em] uppercase font-medium flex items-center gap-3"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <Sparkle className="w-4 h-4 text-amber-500" weight="duotone" />
            {t('whyUs.label')}
          </motion.p>
          
          <motion.h2
            variants={fadeInUp}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-black leading-[1] tracking-tight"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('whyUs.title')}
          </motion.h2>
        </div>

        {/* Features Grid - Minimal Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.number}
              variants={fadeInUp}
              className={`group relative bg-white p-8 border border-neutral-200 hover:border-neutral-950 hover:bg-neutral-950 transition-all duration-500 ${isRTL ? 'text-right' : ''}`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-xs text-neutral-300 font-mono group-hover:text-neutral-600 transition-colors">
                {feature.number}
              </span>

              {/* Icon */}
              <div className={`mb-8 ${isRTL ? 'flex justify-end' : ''}`}>
                <div className={`w-14 h-14 ${feature.bgColor} group-hover:bg-neutral-800 rounded-xl flex items-center justify-center transition-colors duration-500`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor} group-hover:text-white transition-colors duration-500`} weight={feature.iconWeight} />
                </div>
              </div>

              <h3 className="text-lg font-bold text-black group-hover:text-white mb-3 transition-colors duration-500">
                {t(feature.titleKey)}
              </h3>
              <p className="text-neutral-500 group-hover:text-neutral-400 text-sm leading-relaxed transition-colors duration-500">
                {t(feature.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div 
          variants={fadeInUp}
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 ${isRTL ? 'text-right' : ''}`}
        >
          {[
            { num: '500+', label: t('nav.students', { defaultValue: 'Students' }) },
            { num: '20+', label: t('nav.programs', { defaultValue: 'Programs' }) },
            { num: '15+', label: t('nav.teachers', { defaultValue: 'Teachers' }) },
            { num: '10+', label: t('nav.years', { defaultValue: 'Years' }) },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-8 group hover:bg-neutral-950 transition-colors duration-500">
              <p className="text-3xl lg:text-4xl font-bold text-black group-hover:text-white mb-2 font-mono transition-colors">
                {stat.num}
              </p>
              <p className="text-neutral-400 text-xs tracking-wider uppercase group-hover:text-neutral-500 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
