'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 rounded-3xl border border-primary/20 text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted">
              Start Building Today
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Ready to</span>{' '}
            <span className="text-gradient-glow neon-text">forge the future</span>
            <span className="text-foreground">?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of developers building the next generation of
            applications with AI-powered tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold rounded-xl neon-glow"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="glass-hover border-primary/20 hover:border-primary/40 px-10 py-6 text-lg font-semibold rounded-xl"
              >
                View Projects
              </Button>
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-10 pt-8 border-t border-border/50">
            <p className="text-sm text-muted">
              Trusted by 10,000+ developers • No credit card required • Free
              14-day trial
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
