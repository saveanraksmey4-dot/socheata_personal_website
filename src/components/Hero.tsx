import React, { useState } from 'react';
import { ChevronRight, Download, Maximize2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import photoImg from '../assets/photo.png';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  return (
    <section id="home" className="pt-32 pb-20 px-6 md:px-24 min-h-screen flex items-center max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h4 className="inline-block text-lg font-medium mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">{t('hero.hello')}</h4>
          <h1 className="text-5xl md:text-7xl font-bold mb-2 text-slate-900 dark:text-white">Savean Socheata</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-400 mb-6">
            {t('hero.role')} <span className="bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-300 dark:to-cyan-300 bg-clip-text text-transparent opacity-90">{t('hero.subtitle')}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-medium rounded-lg shadow-md dark:shadow-[0_4px_14px_rgba(59,130,246,0.5)] transition-all hover:-translate-y-0.5">
              {t('hero.contact_btn')} <ChevronRight size={18} />
            </Link>
            <Link to="/resume" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-300 dark:border-white/20 hover:border-slate-400 dark:hover:border-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-100 font-medium rounded-lg transition-all">
              {t('hero.resume_btn')} <Download size={18} />
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative w-64 md:w-80 h-72 md:h-96 rounded-2xl group cursor-pointer" onClick={() => setIsImageZoomed(true)}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/30 dark:bg-blue-500/50 blur-[60px] dark:blur-[80px] rounded-full z-0"></div>
            <img src={photoImg} alt="Savean Socheata" className="w-full h-full object-cover object-top rounded-2xl relative z-10 shadow-xl dark:shadow-2xl border border-slate-200 dark:border-white/5 transition-transform duration-500 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 rounded-2xl">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                <Maximize2 size={24} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isImageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageZoomed(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); setIsImageZoomed(false); }}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={photoImg}
              alt="Savean Socheata"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
