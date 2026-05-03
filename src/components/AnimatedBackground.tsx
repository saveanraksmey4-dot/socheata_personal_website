import React from 'react';
import { Settings, Hexagon, Cog } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-blueprint">
      {/* Decorative Gradient Orbs */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 dark:bg-blue-600/20 blur-[100px]"
      />
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px]"
      />
      
      {/* Floating Mechanical Gears */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="absolute top-[15%] left-[5%] text-slate-300/40 dark:text-slate-700/30"
      >
        <Settings size={160} strokeWidth={1} />
      </motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        className="absolute top-[22%] left-[13%] text-slate-300/30 dark:text-slate-700/20"
      >
        <Cog size={100} strokeWidth={1} />
      </motion.div>
      
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        className="absolute top-[60%] right-[5%] text-blue-300/20 dark:text-blue-900/20"
      >
        <Settings size={220} strokeWidth={1} />
      </motion.div>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="absolute top-[48%] right-[16%] text-slate-300/30 dark:text-slate-800/40"
      >
        <Cog size={130} strokeWidth={1} />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 2 }}
        className="absolute bottom-[10%] left-[20%] text-blue-500/10 dark:text-blue-500/5"
      >
        <Hexagon size={140} strokeWidth={1} />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-[30%] right-[30%] text-indigo-500/10 dark:text-indigo-500/5"
      >
        <Hexagon size={80} strokeWidth={1} />
      </motion.div>
    </div>
  );
};

export default AnimatedBackground;
