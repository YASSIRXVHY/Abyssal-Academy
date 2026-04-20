import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Books, Baby, Student, Briefcase, Buildings } from '@phosphor-icons/react';
import MagneticButton from '@/components/MagneticButton';

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

export default function Programs() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const programs = [
    {
      id: 'kids',
      number: '01',
      icon: Baby,
      iconWeight: 'duotone',
      iconColor: 'text-rose-500',
      bgColor: 'bg-rose-50',
      titleKey: 'programs.kids.title',
      subtitleKey: 'programs.kids.subtitle',
      descriptionKey: 'programs.kids.description',
      priceMorocco: isRTL ? '200 درهم' : '200 DH',
      priceIntl: '$40',
      per: isRTL ? '/شهر' : '/month',
    },
    {
      id: 'teens',
      number: '02',
      icon: Student,
      iconWeight: 'duotone',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
      titleKey: 'programs.teens.title',
      subtitleKey: 'programs.teens.subtitle',
      descriptionKey: 'programs.teens.description',
      priceMorocco: isRTL ? '300 درهم' : '300 DH',
      priceIntl: '$50',
      per: isRTL ? '/شهر' : '/month',
    },
    {
      id: 'adults',
      number: '03',
      icon: Briefcase,
      iconWeight: 'duotone',
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50',
      titleKey: 'programs.adults.title',
      subtitleKey: 'programs.adults.subtitle',
      descriptionKey: 'programs.adults.description',
      priceMorocco: isRTL ? '300 درهم' : '300 DH',
      priceIntl: '$50',
      per: isRTL ? '/شهر' : '/month',
    },
    {
      id: 'corporate',
      number: '04',
      icon: Buildings,
      iconWeight: 'duotone',
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-50',
      titleKey: 'programs.corporate.title',
      subtitleKey: 'programs.corporate.subtitle',
      descriptionKey: 'programs.corporate.description',
      priceMorocco: t('programs.corporate.price', { defaultValue: 'Custom' }),
      priceIntl: 'Custom',
      per: '',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="relative py-32 lg:py-40 bg-white">
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
            <Books className="w-4 h-4 text-blue-500" weight="duotone" />
            {t('programs.label')}
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-black leading-[1] tracking-tight"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('programs.title')}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-neutral-500 text-lg max-w-md mt-8"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('programs.subtitle')}
          </motion.p>
        </div>

        {/* Programs Grid - Card Style */}
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={fadeInUp}
              className="group relative bg-neutral-50 border border-neutral-200 p-8 lg:p-10 hover:bg-neutral-950 hover:border-neutral-800 transition-all duration-500 cursor-pointer"
            >
              {/* Number Badge */}
              <span className={`absolute top-6 text-xs text-neutral-400 font-mono ${isRTL ? 'left-6' : 'right-6'}`}>
                {program.number}
              </span>

              {/* Colored Icon */}
              <div className={`mb-6 ${isRTL ? 'flex justify-end' : ''}`}>
                <div className={`w-14 h-14 ${program.bgColor} rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors duration-500`}>
                  <program.icon className={`w-7 h-7 ${program.iconColor} group-hover:text-white transition-colors duration-500`} weight={program.iconWeight} />
                </div>
              </div>

              <div className={`${isRTL ? 'text-right' : ''}`}>
                {/* Title & Subtitle */}
                <h3 
                  className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-500" 
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  {t(program.titleKey)}
                </h3>
                <p 
                  className="text-sm text-neutral-500 mt-2 mb-6 font-medium tracking-wide" 
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  {t(program.subtitleKey)}
                </p>

                {/* Description */}
                <p 
                  className="text-neutral-600 group-hover:text-neutral-400 leading-relaxed mb-8 transition-colors duration-500" 
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  {t(program.descriptionKey)}
                </p>

                {/* Price */}
                <div className={`flex items-baseline gap-2 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <span 
                    className="text-2xl font-bold text-black group-hover:text-white font-mono transition-colors duration-500" 
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    {program.priceMorocco}
                  </span>
                  <span className="text-sm text-neutral-500">{program.per}</span>
                </div>

                {/* CTA */}
                <button 
                  onClick={scrollToContact}
                  className={`flex items-center gap-2 text-sm font-medium text-black group-hover:text-white transition-colors duration-300 ${isRTL ? 'flex-row-reverse ml-auto' : ''}`}
                >
                  {t('programs.enroll')}
                  <ArrowUpRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${isRTL ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          className={`mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-neutral-950 ${isRTL ? 'sm:flex-row-reverse text-right' : ''}`}
        >
          <p className="text-neutral-400" dir={isRTL ? 'rtl' : 'ltr'}>
            {t('programs.consultation', { defaultValue: 'Not sure which program fits you?' })}
          </p>
          <MagneticButton
            onClick={scrollToContact}
            className="bg-white text-black hover:bg-neutral-200 px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium inline-flex items-center gap-3 transition-colors"
          >
            {t('programs.freeConsultation')}
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
