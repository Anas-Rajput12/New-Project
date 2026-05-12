'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '8+',
    label: 'Projects Delivered',
    description: 'Successfully completed',
    gradient: 'from-primary via-accent-yellow to-accent-orange',
  },
  {
    icon: Users,
    value: '5+',
    label: 'Tech Stack',
    description: 'Modern technologies',
    gradient: 'from-secondary via-accent-pink to-accent-purple',
  },
  {
    icon: TrendingUp,
    value: '2+',
    label: 'Years Experience',
    description: 'Industry expertise',
    gradient: 'from-accent via-primary to-accent-yellow',
  },
  {
    icon: Zap,
    value: '100%',
    label: 'Client Satisfaction',
    description: 'Quality guaranteed',
    gradient: 'from-accent-orange via-accent-pink to-secondary',
  },
];

export default function Stats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Delivering <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building innovative solutions with cutting-edge technology and proven expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Card className="h-full glass p-6 text-center hover:border-primary/30 transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-base font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
