'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  Users,
  Mic,
  BarChart3,
  Shield,
  Code2,
  Rocket,
  Brain,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Assistant',
    description:
      'Intelligent code generation, debugging, and optimization powered by advanced AI models.',
    gradient: 'from-primary to-accent',
    glow: 'neon-glow',
  },
  {
    icon: Zap,
    title: 'Smart Workflow',
    description:
      'Automated pipelines that learn from your team and adapt to your development style.',
    gradient: 'from-accent to-secondary',
    glow: 'neon-glow-cyan',
  },
  {
    icon: Users,
    title: 'Real-time Collaboration',
    description:
      'Work together seamlessly with live editing, instant sync, and team awareness.',
    gradient: 'from-secondary to-accent-pink',
    glow: 'neon-glow-purple',
  },
  {
    icon: Mic,
    title: 'Voice Commands',
    description:
      'Control your workspace hands-free with natural language voice commands.',
    gradient: 'from-accent-pink to-accent-orange',
    glow: 'neon-glow',
  },
  {
    icon: BarChart3,
    title: 'Productivity Analytics',
    description:
      'Deep insights into team performance, code quality, and project velocity.',
    gradient: 'from-accent-orange to-accent-yellow',
    glow: 'neon-glow-cyan',
  },
  {
    icon: Shield,
    title: 'Secure Cloud Workspace',
    description:
      'Enterprise-grade security with end-to-end encryption and compliance.',
    gradient: 'from-primary to-secondary',
    glow: 'neon-glow-purple',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted">Features</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Everything you need</span>
            <br />
            <span className="text-foreground">to build faster</span>
          </h2>

          <p className="text-xl text-muted max-w-2xl mx-auto">
            A complete development platform with AI-powered tools designed for
            modern teams.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group glass-hover p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 ${feature.glow}`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
