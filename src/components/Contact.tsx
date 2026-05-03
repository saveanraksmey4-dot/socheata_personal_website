import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const telegramMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const telegramURL = `https://t.me/SSCH_TAR?text=${telegramMessage}`;
    window.open(telegramURL, '_blank');
    alert(t('contact.alert'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-24 min-h-screen flex flex-col justify-center max-w-7xl mx-auto overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-center font-bold mb-16 relative text-slate-900 dark:text-white"
      >
        {t('contact.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">{t('contact.title2')}</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{t('contact.collab')}</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
            {t('contact.desc')}
          </p>

          <div className="flex gap-6">
            <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 transition-all hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white hover:-translate-y-1 shadow-sm hover:shadow-blue-500/50 text-slate-600 dark:text-slate-300">
              <FaGithub size={24} />
            </a>
            <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 transition-all hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white hover:-translate-y-1 shadow-sm hover:shadow-blue-500/50 text-slate-600 dark:text-slate-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://t.me/SSCH_TAR" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 transition-all hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white hover:-translate-y-1 shadow-sm hover:shadow-blue-500/50 text-slate-600 dark:text-slate-300">
              <FaTelegram size={24} />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium text-sm text-slate-700 dark:text-slate-300">{t('contact.label_name')}</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder={t('contact.placeholder_name')}
              className="p-4 bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-900 dark:text-white transition-colors focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 placeholder-slate-400 dark:placeholder-slate-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-sm text-slate-700 dark:text-slate-300">{t('contact.label_email')}</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="your@email.com"
              className="p-4 bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-900 dark:text-white transition-colors focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 placeholder-slate-400 dark:placeholder-slate-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-medium text-sm text-slate-700 dark:text-slate-300">{t('contact.label_message')}</label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              placeholder={t('contact.placeholder_msg')}
              className="p-4 bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-lg text-slate-900 dark:text-white transition-colors focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 placeholder-slate-400 dark:placeholder-slate-500"
            ></textarea>
          </div>
          <button type="submit" className="mt-4 w-full flex items-center justify-center gap-2 p-4 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-medium text-lg rounded-lg shadow-md dark:shadow-[0_4px_14px_rgba(59,130,246,0.5)] transition-all hover:-translate-y-0.5">
            {t('contact.send')} <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
