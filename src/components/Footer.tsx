import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Kids', href: '#kids' },
  { name: 'Adolescents', href: '#adolescents' },
  { name: 'Adults', href: '#adults' },
  { name: 'Business', href: '#business' },
  { name: 'Contact', href: '#contact' },
];

const programs = [
  { name: 'Kids (Ages 5-9)', href: '#kids' },
  { name: 'Core (Ages 10-15)', href: '#adolescents' },
  { name: 'STEM (Ages 16-18)', href: '#adolescents' },
  { name: 'Leadership', href: '#adolescents' },
  { name: 'Adult Learning', href: '#adults' },
  { name: 'Corporate Training', href: '#business' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: WhatsAppIcon, href: 'https://wa.me/212772529274', label: 'WhatsApp' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-navy-900 pt-16 pb-8 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl bg-primary/10 -bottom-40 -right-40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="inline-block mb-6">
                <img
                  src="/images/Logo.png"
                  alt="Abyssal Academy"
                  className="h-16 w-auto object-contain"
                />
              </a>
              <p className="text-navy-300 text-sm leading-relaxed mb-6">
                North Morocco&apos;s premier communication academy, empowering learners 
                of all ages with exceptional language and communication skills since 2014.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-navy-400 hover:bg-primary hover:text-white transition-all duration-300"
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
            >
              <h4 className="text-white font-semibold mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-navy-300 hover:text-primary transition-colors text-sm flex items-center gap-1 group"
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
            >
              <h4 className="text-white font-semibold mb-5">Programs</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <a
                      href={program.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(program.href); }}
                      className="text-navy-300 hover:text-primary transition-colors text-sm flex items-center gap-1 group"
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
            >
              <h4 className="text-white font-semibold mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+212772529274"
                    className="flex items-start gap-3 text-navy-300 hover:text-primary transition-colors text-sm"
                  >
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>+212 772529274</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/212772529274"
                    className="flex items-start gap-3 text-navy-300 hover:text-primary transition-colors text-sm"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>+212 772529274 (WhatsApp)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:yassirgattoa@gmail.com"
                    className="flex items-start gap-3 text-navy-300 hover:text-primary transition-colors text-sm"
                  >
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>yassirgattoa@gmail.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-navy-300 text-sm">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>North Morocco</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-navy-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-navy-400 text-sm text-center md:text-left"
              >
                &copy; {new Date().getFullYear()} Abyssal Academy. All rights reserved.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex gap-6"
              >
                <a href="#" className="text-navy-400 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-navy-400 hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
