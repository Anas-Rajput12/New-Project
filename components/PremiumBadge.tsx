'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function PremiumBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-8 right-8 z-50 hidden lg:block"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        className="glass-card px-6 py-3 flex items-center gap-3 cursor-pointer group relative overflow-hidden border-2 border-primary/30 neon-glow-rainbow"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent-pink/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-5 h-5 text-primary" />
        </motion.div>

        <div className="relative z-10">
          <div className="text-sm font-bold text-gradient-rainbow tracking-tight">Premium Experience</div>
          <div className="text-xs text-muted-foreground font-medium">Enterprise Ready</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
