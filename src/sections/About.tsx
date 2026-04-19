import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section id="about" className="relative py-32 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Left */}
          <div className={`${isRTL ? 'lg:order-2 text-right' : ''}`}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400 mb-6 tracking-[0.3em] uppercase font-mono"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {t('about.label')}
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(3rem,5vw,4.5rem)] font-bold text-black leading-[0.95]"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {t('about.title')}
            </motion.h2>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
            dir={isRTL ? 'rtl' : ''}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('about.p2')}
            </p>
            
            <div className={`grid grid-cols-2 gap-8 pt-8 border-t border-gray-200 ${isRTL ? 'text-right' : ''}`}>
              <div>
                <p className="text-xs text-gray-400 font-mono mb-2">{t('about.location')}</p>
                <p className="text-black font-medium">{t('about.morocco')}</p>
                <p className="text-gray-500 text-sm">{t('about.online')}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-mono mb-2">{t('about.contact')}</p>
                <p className="text-black font-medium">+212 772529274</p>
                <p className="text-gray-500 text-sm">yassirgattoa@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
