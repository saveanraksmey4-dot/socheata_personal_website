import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'km' ? 'en' : 'km';
    i18n.changeLanguage(newLang);
  };

  const navClass = `fixed top-0 left-0 w-full px-6 md:px-24 py-5 z-50 transition-all duration-300 ${
    scrolled || location.pathname !== '/' || isMobileMenuOpen
      ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-4 border-b border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none'
      : 'bg-transparent text-slate-800 dark:text-white'
  }`;

  const linkClass = "text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors";
  const mobileLinkClass = "block py-3 text-lg font-medium text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-white/5";

  return (
    <nav className={navClass}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold font-['Outfit'] text-slate-900 dark:text-white">
          Socheata<span className="text-blue-500">.</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <li><Link to="/" className={linkClass}>{t('nav.home')}</Link></li>
            <li><Link to="/about" className={linkClass}>{t('nav.about')}</Link></li>
            <li><Link to="/resume" className={linkClass}>{t('nav.resume')}</Link></li>
            <li><Link to="/contact" className={linkClass}>{t('nav.contact')}</Link></li>
          </ul>

          <div className="flex items-center gap-4 border-l border-slate-300 dark:border-white/20 pl-6">
            <button 
              onClick={toggleLanguage} 
              className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              title="Toggle Language"
            >
              <Globe size={18} />
              <span className="uppercase">{i18n.language}</span>
            </button>
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors"
          >
            <Globe size={18} />
            <span className="uppercase">{i18n.language}</span>
          </button>
          <button 
            onClick={toggleTheme} 
            className="p-2 text-slate-600 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-900 dark:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-200 dark:border-white/10 animate-fade-in bg-white dark:bg-slate-900 px-6 pb-6 shadow-xl absolute left-0 w-full">
          <ul className="flex flex-col">
            <li><Link to="/" className={mobileLinkClass}>{t('nav.home')}</Link></li>
            <li><Link to="/about" className={mobileLinkClass}>{t('nav.about')}</Link></li>
            <li><Link to="/resume" className={mobileLinkClass}>{t('nav.resume')}</Link></li>
            <li><Link to="/contact" className={mobileLinkClass}>{t('nav.contact')}</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
