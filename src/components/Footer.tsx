import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 py-12 px-6 mt-20 transition-colors duration-300">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="text-2xl font-bold font-['Outfit'] text-slate-900 dark:text-white">
          Socheata<span className="text-blue-500">.</span>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm">© {year} {t('footer.rights')}</p>
        <p className="text-slate-500 dark:text-slate-500 text-sm">{t('footer.built')}</p>
      </div>
    </footer>
  );
};

export default Footer;
