import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.programs'), href: '#programs' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const programs = [
    { name: t('programs.kids.title'), href: '#programs' },
    { name: t('programs.teens.title'), href: '#programs' },
    { name: t('programs.adults.title'), href: '#programs' },
    { name: t('programs.corporate.title'), href: '#programs' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/abyssal_academy/', label: 'Instagram', color: 'text-pink-500', hoverBg: 'hover:bg-pink-500/10 hover:border-pink-500/30' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'text-blue-500', hoverBg: 'hover:bg-blue-500/10 hover:border-blue-500/30' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'text-sky-500', hoverBg: 'hover:bg-sky-500/10 hover:border-sky-500/30' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'text-indigo-500', hoverBg: 'hover:bg-indigo-500/10 hover:border-indigo-500/30' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-neutral-950 text-white pt-24 pb-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-950 to-neutral-950 pointer-events-none" />
      
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Footer Content */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 ${isRTL ? 'text-right rtl-grid' : ''}`}>
          {/* Brand Column - Order 4 in RTL, Order 1 in LTR */}
          <motion.div
            variants={fadeInUp}
            className={`lg:col-span-1 ${isRTL ? 'lg:order-4' : 'lg:order-1'}`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="inline-block mb-6 group">
              <img
                src="/images/Logo.png"
                alt="Abyssal Academy"
                className="h-20 w-auto object-contain invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-neutral-500 text-sm leading-relaxed mb-8">
              {t('about.p1', { defaultValue: 'Premium online English education for all ages. Learn with expert instructors worldwide.' })}
            </p>
            {/* Social Links */}
            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center ${social.color} ${social.hoverBg} hover:scale-110 transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Order 3 in RTL, Order 2 in LTR */}
          <motion.div variants={fadeInUp} className={isRTL ? 'lg:order-3' : 'lg:order-2'} dir={isRTL ? 'rtl' : 'ltr'}>
            <h4 className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6 font-medium">
              {t('footer.quickLinks', { defaultValue: 'Quick Links' })}
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className={`text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2 group ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-white transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs - Order 2 in RTL, Order 3 in LTR */}
          <motion.div variants={fadeInUp} className={isRTL ? 'lg:order-2' : 'lg:order-3'} dir={isRTL ? 'rtl' : 'ltr'}>
            <h4 className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6 font-medium">
              {t('footer.programs', { defaultValue: 'Programs' })}
            </h4>
            <ul className="space-y-4">
              {programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(program.href); }}
                    className={`text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2 group ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-white transition-all duration-300" />
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Order 1 in RTL, Order 4 in LTR */}
          <motion.div variants={fadeInUp} className={isRTL ? 'lg:order-1' : 'lg:order-4'} dir={isRTL ? 'rtl' : 'ltr'}>
            <h4 className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6 font-medium">
              {t('footer.contactUs', { defaultValue: 'Contact' })}
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:+212772529274"
                  className={`group flex items-start gap-3 text-neutral-400 hover:text-white transition-colors text-sm ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-8 h-8 bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs mb-1">{t('footer.phone', { defaultValue: 'Phone' })}</p>
                    <p dir="ltr">+212 772529274</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:yassirgattoa@gmail.com"
                  className={`group flex items-start gap-3 text-neutral-400 hover:text-white transition-colors text-sm ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-8 h-8 bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs mb-1">{t('footer.email', { defaultValue: 'Email' })}</p>
                    <p className="break-all">yassirgattoa@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className={`group flex items-start gap-3 text-neutral-400 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-8 h-8 bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs mb-1">{t('footer.location', { defaultValue: 'Location' })}</p>
                    <p>{t('about.morocco', { defaultValue: 'Morocco' })}</p>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={fadeInUp}
          className="pt-8 border-t border-white/10"
        >
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-neutral-500 text-xs tracking-wider" dir={isRTL ? 'rtl' : 'ltr'}>
              &copy; {new Date().getFullYear()} Abyssal Academy. {t('footer.rights', { defaultValue: 'All rights reserved.' })}
            </p>
            <div className={`flex gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors text-xs tracking-wider">
                {t('footer.privacy', { defaultValue: 'Privacy' })}
              </a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors text-xs tracking-wider">
                {t('footer.terms', { defaultValue: 'Terms' })}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
