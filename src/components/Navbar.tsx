import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronRight, Mail, Phone } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.programs'), href: '#programs' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center gap-6">
          <a href="mailto:yassirgattoa@gmail.com" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">yassirgattoa@gmail.com</span>
          </a>
          <span className="w-px h-4 bg-white/30" />
          <a href="tel:+212772529274" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+212 772529274</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="/images/Logo.png"
                alt="Abyssal Academy"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-black hover:bg-gray-100' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* CTA & Language */}
            <div className={`hidden lg:flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <LanguageSwitcher isScrolled={isScrolled} />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  onClick={() => scrollToSection('#contact')}
                  className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 group ${
                    isScrolled
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-white text-black hover:bg-neutral-200'
                  }`}
                >
                  {t('nav.enroll')}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageSwitcher isScrolled={isScrolled} />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-colors ${
                  isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <nav className={`px-6 py-4 flex flex-col gap-2 ${isRTL ? 'items-end' : ''}`}>
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-3 text-gray-800 hover:text-black hover:bg-gray-100 transition-colors font-medium"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-black text-white mt-2 py-3 font-medium"
                >
                  {t('nav.enroll')}
                  <ChevronRight className="w-4 h-4 inline ml-1" />
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
