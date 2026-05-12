'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      {/* Gradient Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted">
              AI-Powered Development Platform
            </span>
            <Zap className="w-4 h-4 text-accent" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-gradient-glow neon-text">
              Forge Together.
            </span>
            <br />
            <span className="text-foreground">
              Build the Future.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            An AI-powered ecosystem where developers collaborate, innovate,
            and scale ideas beyond limits.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl neon-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>

            <Link href="/ai-assistant">
              <Button
                size="lg"
                variant="outline"
                className="group glass-hover border-primary/20 hover:border-primary/40 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Live Demo
              </Button>
            </Link>
          </motion.div>

          {/* Floating Cards Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative"
          >
            <div className="glass-card p-8 max-w-4xl mx-auto rounded-2xl border border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Feature Card 1 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-hover p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 neon-glow">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Assistant</h3>
                  <p className="text-sm text-muted">
                    Intelligent code generation and real-time collaboration
                  </p>
                </motion.div>

                {/* Feature Card 2 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-hover p-6 rounded-xl border border-secondary/10 hover:border-secondary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent-pink flex items-center justify-center mb-4 neon-glow-purple">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Smart Workflow</h3>
                  <p className="text-sm text-muted">
                    Automated pipelines that adapt to your team
                  </p>
                </motion.div>

                {/* Feature Card 3 */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-hover p-6 rounded-xl border border-accent/10 hover:border-accent/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 neon-glow-cyan">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
                  <p className="text-sm text-muted">
                    Deploy in seconds with edge optimization
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
