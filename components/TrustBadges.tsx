'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Zap, Users } from 'lucide-react';

const trustBadges = [
  { icon: Shield, label: 'SOC 2 Certified' },
  { icon: Award, label: 'ISO 27001' },
  { icon: Zap, label: '99.9% Uptime' },
  { icon: Users, label: '50K+ Users' },
];

export default function TrustBadges() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-white/10"
    >
      {trustBadges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <Icon className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold tracking-tight">{badge.label}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
