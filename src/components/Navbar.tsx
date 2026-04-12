import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import GmailIcon from '@/components/icons/GmailIcon';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Kids', href: '#kids' },
  { name: 'Adolescents', href: '#adolescents' },
  { name: 'Adults', href: '#adults' },
  { name: 'Business', href: '#business' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="gradient-top-bar animate-gradient-shift text-white py-2 text-sm">
        <div className="section-padding">
          <div className="container-wide flex items-center justify-center gap-6">
            <a href="mailto:yassirgattoa@gmail.com" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <GmailIcon className="w-4 h-4" />
              <span className="hidden sm:inline">yassirgattoa@gmail.com</span>
            </a>
            <span className="w-px h-4 bg-white/30" />
            <a href="tel:+212772529274" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden sm:inline">+212 772529274</span>
            </a>
            <span className="w-px h-4 bg-white/30 hidden sm:inline" />
            <a href="https://wa.me/212772529274" className="hidden sm:flex items-center gap-2 hover:text-primary-200 transition-colors">
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg' : 'bg-white'
        }`}
      >
        <div className="section-padding">
          <div className="container-wide flex items-center justify-between py-3">
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
              <div className="relative">
                <img
                  src="/images/Logo.png"
                  alt="Abyssal Academy"
                  className="h-24 md:h-28 w-auto object-contain"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 -z-10 blur-xl bg-primary/20 rounded-full scale-110" />
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
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
                  className="px-4 py-2 text-sm font-medium text-navy-800 hover:text-primary transition-colors rounded-lg hover:bg-primary-50"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="gradient-primary text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                >
                  Enroll Now
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-navy-800" />
              ) : (
                <Menu className="w-6 h-6 text-navy-800" />
              )}
            </button>
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
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <nav className="section-padding py-4 flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-3 text-navy-800 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors font-medium"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="gradient-primary text-white mt-2 rounded-full font-semibold"
                >
                  Enroll Now
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
