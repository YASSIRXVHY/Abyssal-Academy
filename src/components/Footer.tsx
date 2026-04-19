import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

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
    { icon: Instagram, href: 'https://www.instagram.com/abyssal_academy/', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 ${isRTL ? 'text-right' : ''}`}>
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="inline-block mb-6">
              <img
                src="/images/Logo.png"
                alt="Abyssal Academy"
                className="h-16 w-auto object-contain invert"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('about.p1')}
            </p>
            {/* Social Links */}
            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <h4 className="text-white font-semibold mb-5">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className={`text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <h4 className="text-white font-semibold mb-5">{t('footer.programs')}</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(program.href); }}
                    className={`text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {program.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <h4 className="text-white font-semibold mb-5">{t('footer.contactUs')}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+212772529274"
                  className={`flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <Phone className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                  <span>+212 772529274</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/212772529274"
                  className={`flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <Phone className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                  <span>+212 772529274 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:yassirgattoa@gmail.com"
                  className={`flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <Mail className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                  <span>yassirgattoa@gmail.com</span>
                </a>
              </li>
              <li>
                <div className={`flex items-start gap-3 text-gray-400 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                  <span>{t('about.morocco')}</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 text-sm text-center md:text-left"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              &copy; {new Date().getFullYear()} Abyssal Academy. {t('footer.rights')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className={`flex gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                {t('footer.terms')}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
