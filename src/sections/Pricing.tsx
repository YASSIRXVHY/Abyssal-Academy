import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

export default function Pricing() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [isMorocco, setIsMorocco] = useState(true);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Morocco pricing - 200, 300, 500 DH per month
  const moroccoPlans = [
    {
      name: t('pricing.starter.name'),
      price: '200',
      currency: t('pricing.starter.currency'),
      unit: t('pricing.perMonth'),
      sessions: t('pricing.sessionsInfo'),
      description: t('pricing.starter.description'),
      features: t('pricing.starter.features', { returnObjects: true }) as string[],
      popular: false,
    },
    {
      name: t('pricing.professional.name'),
      price: '300',
      currency: t('pricing.professional.currency'),
      unit: t('pricing.perMonth'),
      sessions: t('pricing.sessionsInfo'),
      description: t('pricing.professional.description'),
      features: t('pricing.professional.features', { returnObjects: true }) as string[],
      popular: true,
    },
    {
      name: t('pricing.intensive.name'),
      price: '500',
      currency: t('pricing.intensive.currency'),
      unit: t('pricing.perMonth'),
      sessions: t('pricing.intensive.features.0'),
      description: t('pricing.intensive.description'),
      features: [
        t('pricing.intensive.features.0'),
        t('pricing.intensive.features.1'),
        t('pricing.intensive.features.2'),
        t('pricing.intensive.features.3'),
        t('pricing.intensive.features.4'),
      ],
      popular: false,
    },
  ];

  // International pricing
  const internationalPlans = [
    {
      name: t('pricing.starter.name'),
      price: '40',
      currency: '$',
      unit: t('pricing.perMonth'),
      sessions: t('pricing.sessionsInfo'),
      description: t('pricing.starter.description'),
      features: t('pricing.starter.features', { returnObjects: true }) as string[],
      popular: false,
    },
    {
      name: t('pricing.professional.name'),
      price: '50',
      currency: '$',
      unit: t('pricing.perMonth'),
      sessions: t('pricing.sessionsInfo'),
      description: t('pricing.professional.description'),
      features: t('pricing.professional.features', { returnObjects: true }) as string[],
      popular: true,
    },
    {
      name: t('pricing.intensive.name'),
      price: '90',
      currency: '$',
      unit: t('pricing.perMonth'),
      sessions: t('pricing.intensive.features.0'),
      description: t('pricing.intensive.description'),
      features: [
        t('pricing.intensive.features.0'),
        t('pricing.intensive.features.1'),
        t('pricing.intensive.features.2'),
        t('pricing.intensive.features.3'),
        t('pricing.intensive.features.4'),
      ],
      popular: false,
    },
  ];

  const plans = isMorocco ? moroccoPlans : internationalPlans;

  return (
    <section id="pricing" className="relative py-32 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 mb-6 tracking-[0.3em] uppercase font-mono"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('pricing.label')}
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(3rem,6vw,5rem)] font-bold text-black leading-[0.9] mb-6"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('pricing.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-md mx-auto mb-8"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('pricing.subtitle')}
          </motion.p>

          {/* Location Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`inline-flex border border-black p-1 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <button
              onClick={() => setIsMorocco(true)}
              className={`px-6 py-2 text-sm font-medium transition-colors ${
                isMorocco 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {t('pricing.morocco')}
            </button>
            <button
              onClick={() => setIsMorocco(false)}
              className={`px-6 py-2 text-sm font-medium transition-colors ${
                !isMorocco 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {t('pricing.international')}
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-black border border-black">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-8 lg:p-10 relative ${plan.popular ? 'z-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-black text-white text-center py-2 text-xs tracking-widest uppercase font-mono">
                  {t('pricing.professional.popular')}
                </div>
              )}
              
              <div className={plan.popular ? 'pt-8' : ''}>
                <p className="text-sm text-gray-400 font-mono mb-2">{plan.name}</p>
                
                {/* Price Display - Fixed Size */}
                <div className={`flex items-baseline gap-2 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-5xl lg:text-6xl font-bold text-black font-mono tracking-tight">
                    {plan.price}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-black">{plan.currency}</span>
                    <span className="text-sm text-gray-400">{plan.unit}</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 font-mono mb-4">{plan.sessions}</p>
                <p className="text-gray-500 text-sm mb-8">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center gap-3 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Check className="w-4 h-4 text-black flex-shrink-0" strokeWidth={3} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <MagneticButton
                  onClick={scrollToContact}
                  className={`w-full py-5 text-sm tracking-[0.15em] uppercase font-medium inline-flex items-center justify-center gap-2 transition-colors ${
                    plan.popular 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'border border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {plan.popular ? t('pricing.getStarted') : t('pricing.choosePlan')}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
