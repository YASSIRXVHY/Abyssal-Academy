import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export default function LanguageSwitcher({ isScrolled = true }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', flag: '🇲🇦' },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    // Update document direction for RTL
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
          isScrolled
            ? 'text-gray-700 hover:text-black hover:bg-gray-100'
            : 'text-white/90 hover:text-white hover:bg-white/10'
        }`}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang.code === 'ar' ? 'العربية' : 'EN'}</span>
        <span className="sm:hidden">{currentLang.flag}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full right-0 mt-2 w-40 bg-white border border-black shadow-lg z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                    i18n.language === lang.code ? 'bg-gray-50 font-medium' : ''
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </span>
                  {i18n.language === lang.code && (
                    <Check className="w-4 h-4" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
