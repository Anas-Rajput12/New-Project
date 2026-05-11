'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full glass glass-hover flex items-center px-1 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent-cyan shadow-lg"
        animate={{
          x: theme === 'dark' ? 0 : 28,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      <div className="flex items-center justify-between w-full px-1 relative z-10">
        <Moon className="w-3 h-3 text-primary" />
        <Sun className="w-3 h-3 text-primary" />
      </div>
    </motion.button>
  );
}
