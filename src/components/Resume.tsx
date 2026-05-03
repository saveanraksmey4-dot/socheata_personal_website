import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="resume" className="py-20 px-6 md:px-24 min-h-screen max-w-7xl mx-auto flex flex-col justify-center overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-center font-bold mb-16 relative text-slate-900 dark:text-white"
      >
        {t('resume.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">{t('resume.title2')}</span>
      </motion.h2>
      
      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-8 border-l-2 border-slate-300 dark:border-white/10 pl-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4 -ml-8 pl-8 text-slate-900 dark:text-white relative">
              {t('resume.exp')}
            </motion.h3>
            
            <motion.div variants={itemVariants} className="relative glass-panel rounded-xl">
              <div className="absolute top-8 -left-[2.8rem] w-5 h-5 bg-slate-50 dark:bg-slate-950 border-4 border-blue-500 rounded-full dark:shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-500 rounded-full text-sm font-medium mb-3">{t('resume.job1_date')}</span>
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{t('resume.job1_title')}</h4>
              <h5 className="text-slate-600 dark:text-slate-400 font-medium mb-3">{t('resume.job1_company')}</h5>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t('resume.job1_desc')}
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative glass-panel rounded-xl">
              <div className="absolute top-8 -left-[2.8rem] w-5 h-5 bg-slate-50 dark:bg-slate-950 border-4 border-blue-500 rounded-full dark:shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-500 rounded-full text-sm font-medium mb-3">{t('resume.job2_date')}</span>
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{t('resume.job2_title')}</h4>
              <h5 className="text-slate-600 dark:text-slate-400 font-medium mb-3">{t('resume.job2_company')}</h5>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t('resume.job2_desc')}
              </p>
            </motion.div>
          </motion.div>

          {/* Education Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-8 border-l-2 border-slate-300 dark:border-white/10 pl-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4 -ml-8 pl-8 text-slate-900 dark:text-white relative">
              {t('resume.edu')}
            </motion.h3>
            
            <motion.div variants={itemVariants} className="relative glass-panel rounded-xl">
              <div className="absolute top-8 -left-[2.8rem] w-5 h-5 bg-slate-50 dark:bg-slate-950 border-4 border-blue-500 rounded-full dark:shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-500 rounded-full text-sm font-medium mb-3">{t('resume.edu1_date')}</span>
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{t('resume.edu1_title')}</h4>
              <h5 className="text-slate-600 dark:text-slate-400 font-medium mb-3">{t('resume.edu1_school')}</h5>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t('resume.edu1_desc')}
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative glass-panel rounded-xl">
              <div className="absolute top-8 -left-[2.8rem] w-5 h-5 bg-slate-50 dark:bg-slate-950 border-4 border-blue-500 rounded-full dark:shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-500 rounded-full text-sm font-medium mb-3">{t('resume.edu2_date')}</span>
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{t('resume.edu2_title')}</h4>
              <h5 className="text-slate-600 dark:text-slate-400 font-medium mb-3">{t('resume.edu2_school')}</h5>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t('resume.edu2_desc')}
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">{t('resume.skills')}</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {['AutoCAD', 'SolidWorks', 'Thermodynamics', 'Fluid Mechanics', 'CNC Programming', 'Project Management', 'FEA Simulation', 'Robotics Automation'].map((skill, index) => (
              <motion.div 
                variants={skillVariants}
                key={index} 
                className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/5 py-3 px-6 rounded-xl font-medium text-slate-700 dark:text-slate-300 transition-all hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-500 hover:-translate-y-1 shadow-sm hover:shadow-blue-500/20"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
