'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TiltCard from '@/components/TiltCard';
import {
  Bot,
  CheckSquare,
  Users,
  Mic,
  BarChart3,
  Shield,
  Zap,
  Code,
  Sparkles
} from 'lucide-react';

const features = [
  {
    title: 'AI Development',
    description: 'Custom AI chatbots, machine learning solutions, and intelligent automation for your business.',
    icon: Bot,
    gradient: 'from-primary via-accent-yellow to-accent-orange',
  },
  {
    title: 'Web Development',
    description: 'Full-stack web applications, e-commerce platforms, and progressive web apps built with modern tech.',
    icon: Code,
    gradient: 'from-secondary via-accent-pink to-accent-purple',
  },
  {
    title: 'Mobile Development',
    description: 'Native iOS & Android apps, React Native, and cross-platform solutions for your mobile needs.',
    icon: Zap,
    gradient: 'from-accent via-primary to-accent-yellow',
  },
  {
    title: 'Database Solutions',
    description: 'Database design, architecture, optimization, and migration services for PostgreSQL, MongoDB, MySQL.',
    icon: BarChart3,
    gradient: 'from-accent-purple via-secondary to-accent-pink',
  },
  {
    title: 'Cloud & DevOps',
    description: 'AWS, Azure, Google Cloud deployment, CI/CD pipelines, Docker, and Kubernetes infrastructure.',
    icon: Shield,
    gradient: 'from-accent-orange via-accent-yellow to-primary',
  },
  {
    title: 'API Development',
    description: 'RESTful APIs, GraphQL, third-party integrations, and microservices architecture.',
    icon: Users,
    gradient: 'from-accent-pink via-accent-purple to-secondary',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive Solutions for{' '}
            <span className="text-gradient">Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From AI-powered applications to full-stack web platforms, we deliver scalable solutions tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <TiltCard key={index}>
                <motion.div
                  variants={itemVariants}
                  className="cursor-pointer group h-full"
                >
                  <Card className="h-full glass-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 shine relative overflow-hidden border-2 border-transparent hover:border-primary/30">
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 rounded-[inherit] bg-gradient-to-r ${feature.gradient} opacity-20 blur-xl`} />
                    </div>

                    <CardHeader className="relative z-10">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 neon-glow-rainbow`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6 text-background" />
                      </motion.div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </TiltCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
