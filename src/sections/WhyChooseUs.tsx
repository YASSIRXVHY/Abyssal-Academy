import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Monitor, Users, Clock, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      icon: Monitor,
      number: '01',
      titleKey: 'whyUs.online.title',
      descriptionKey: 'whyUs.online.description',
    },
    {
      icon: Users,
      number: '02',
      titleKey: 'whyUs.teachers.title',
      descriptionKey: 'whyUs.teachers.description',
    },
    {
      icon: Clock,
      number: '03',
      titleKey: 'whyUs.flexible.title',
      descriptionKey: 'whyUs.flexible.description',
    },
    {
      icon: Award,
      number: '04',
      titleKey: 'whyUs.certified.title',
      descriptionKey: 'whyUs.certified.description',
    },
  ];

  return (
    <section id="why-us" className="relative py-32 lg:py-40 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`mb-20 ${isRTL ? 'text-right' : ''}`}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 mb-6 tracking-[0.3em] uppercase font-mono"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('whyUs.label')}
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(3rem,6vw,5rem)] font-bold text-black leading-[0.9]"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('whyUs.title')}
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-black border border-black">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-10 lg:p-14 group hover:bg-black hover:text-white transition-colors duration-500 ${isRTL ? 'text-right' : ''}`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className={`flex items-start justify-between mb-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <feature.icon className="w-10 h-10 text-black group-hover:text-white transition-colors" strokeWidth={1} />
                <span className="text-sm text-gray-400 group-hover:text-gray-500 font-mono transition-colors">{feature.number}</span>
              </div>
              <h3 className="text-2xl font-bold text-black group-hover:text-white mb-4 transition-colors">
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">
                {t(feature.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
