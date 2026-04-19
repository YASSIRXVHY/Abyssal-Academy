import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowUpRight, Globe } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

export default function Programs() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const programs = [
    {
      id: 'kids',
      number: '01',
      titleKey: 'programs.kids.title',
      subtitleKey: 'programs.kids.subtitle',
      descriptionKey: 'programs.kids.description',
      price: isRTL ? '1,600 درهم' : '1,600 DH',
      per: isRTL ? '/شهر' : '/month',
    },
    {
      id: 'teens',
      number: '02',
      titleKey: 'programs.teens.title',
      subtitleKey: 'programs.teens.subtitle',
      descriptionKey: 'programs.teens.description',
      price: isRTL ? '2,000 درهم' : '2,000 DH',
      per: isRTL ? '/شهر' : '/month',
    },
    {
      id: 'adults',
      number: '03',
      titleKey: 'programs.adults.title',
      subtitleKey: 'programs.adults.subtitle',
      descriptionKey: 'programs.adults.description',
      price: isRTL ? '2,000 درهم' : '2,000 DH',
      per: isRTL ? '/شهر' : '/month',
    },
    {
      id: 'corporate',
      number: '04',
      titleKey: 'programs.corporate.title',
      subtitleKey: 'programs.corporate.subtitle',
      descriptionKey: 'programs.corporate.description',
      price: t('programs.corporate.price', { defaultValue: 'Custom' }),
      per: '',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="relative py-32 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`mb-20 ${isRTL ? 'text-right' : ''}`}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 mb-6 tracking-[0.3em] uppercase font-mono flex items-center gap-3"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <Globe className="w-4 h-4" />
            {t('programs.label')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(3rem,6vw,5rem)] font-bold text-black leading-[0.9]"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('programs.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-md mt-8"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('programs.subtitle')}
          </motion.p>
        </div>

        {/* Programs List */}
        <div className="border-t border-black">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-black py-10 lg:py-12 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
            >
              <div className={`grid lg:grid-cols-12 gap-6 lg:gap-8 items-start ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="text-sm text-gray-400 font-mono">
                    {program.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className={`lg:col-span-3 ${isRTL ? 'text-right' : ''}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:translate-x-2 transition-transform duration-300" dir={isRTL ? 'rtl' : 'ltr'}>
                    {t(program.titleKey)}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 font-mono" dir={isRTL ? 'rtl' : 'ltr'}>
                    {t(program.subtitleKey)}
                  </p>
                </div>

                {/* Description */}
                <div className={`lg:col-span-4 ${isRTL ? 'text-right' : ''}`}>
                  <p className="text-gray-600 leading-relaxed" dir={isRTL ? 'rtl' : 'ltr'}>
                    {t(program.descriptionKey)}
                  </p>
                </div>

                {/* Price & CTA */}
                <div className={`lg:col-span-4 flex items-center justify-between lg:flex-col lg:items-end lg:gap-4 ${isRTL ? 'lg:items-start' : ''}`}>
                  <div className={`${isRTL ? 'text-right' : ''}`}>
                    <span className="text-3xl font-bold text-black font-mono block" dir={isRTL ? 'rtl' : 'ltr'}>
                      {program.price}
                    </span>
                    {program.per && (
                      <span className="text-sm text-gray-400" dir={isRTL ? 'rtl' : 'ltr'}>{program.per}</span>
                    )}
                  </div>
                  <button 
                    onClick={scrollToContact}
                    className={`flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t('programs.enroll')}
                    <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
        >
          <p className="text-gray-500" dir={isRTL ? 'rtl' : 'ltr'}>{t('programs.consultation')}</p>
          <MagneticButton
            onClick={scrollToContact}
            className="border border-black text-black hover:bg-black hover:text-white px-8 py-5 text-sm tracking-[0.2em] uppercase font-medium inline-flex items-center gap-3 transition-colors"
          >
            {t('programs.freeConsultation')}
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
