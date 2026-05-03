import React from 'react';
import { User, MapPin, Mail, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 px-6 md:px-24 min-h-screen flex flex-col justify-center max-w-7xl mx-auto overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-center font-bold mb-16 relative text-slate-900 dark:text-white"
      >
        {t('about.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">{t('about.title2')}</span>
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-5 gap-8"
      >
        <motion.div variants={itemVariants} className="md:col-span-3 glass-panel">
          <h3 className="text-2xl text-blue-600 dark:text-blue-500 font-semibold mb-6">{t('about.story_title')}</h3>
          <p className="text-slate-700 dark:text-slate-400 mb-4 leading-relaxed text-lg">
            {t('about.story_p1')}
          </p>
          <p className="text-slate-700 dark:text-slate-400 leading-relaxed text-lg">
            {t('about.story_p2')}
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="md:col-span-2 glass-panel">
          <h3 className="text-2xl text-blue-600 dark:text-blue-500 font-semibold mb-6">{t('about.details_title')}</h3>
          <ul className="flex flex-col gap-6">
            <li className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 p-3 rounded-lg"><User size={24} /></div>
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">{t('about.name')}</strong>
                <span className="text-slate-600 dark:text-slate-400 text-sm">{t('hero.full_name')}</span>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 p-3 rounded-lg"><Calendar size={24} /></div>
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">{t('about.experience')}</strong>
                <span className="text-slate-600 dark:text-slate-400 text-sm">{t('about.exp_val')}</span>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 p-3 rounded-lg"><MapPin size={24} /></div>
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">{t('about.location')}</strong>
                <span className="text-slate-600 dark:text-slate-400 text-sm">{t('about.location_val')}</span>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 p-3 rounded-lg"><Mail size={24} /></div>
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">{t('about.email')}</strong>
                <span className="text-slate-600 dark:text-slate-400 text-sm">contact@socheata.dev</span>
              </div>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
