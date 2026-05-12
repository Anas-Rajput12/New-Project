'use client';

import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Code2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AIShowcase() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted">
                AI Assistant
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Your AI pair</span>
              <br />
              <span className="text-foreground">programmer</span>
            </h2>

            <p className="text-xl text-muted mb-8 leading-relaxed">
              Write code faster with intelligent suggestions, automated
              debugging, and real-time collaboration. Our AI understands your
              codebase and adapts to your style.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Code2,
                  title: 'Intelligent Code Generation',
                  desc: 'Generate production-ready code from natural language',
                },
                {
                  icon: MessageSquare,
                  title: 'Context-Aware Suggestions',
                  desc: 'Get smart completions based on your entire project',
                },
                {
                  icon: Zap,
                  title: 'Instant Debugging',
                  desc: 'Find and fix bugs before they reach production',
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link href="/ai-assistant">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 rounded-xl neon-glow"
              >
                Try AI Assistant
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Right - AI Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card p-6 rounded-2xl border border-primary/20">
              {/* Chat Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs text-muted">Online</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-end"
                >
                  <div className="glass px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                    <p className="text-sm">
                      Create a React component for user authentication
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-start"
                >
                  <div className="glass-card px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] border border-primary/20">
                    <p className="text-sm mb-3">
                      I'll create a secure authentication component for you:
                    </p>
                    <div className="bg-background/50 p-3 rounded-lg font-mono text-xs">
                      <code className="text-primary">
                        {'const Auth = () => {'}
                        <br />
                        {'  return <LoginForm />'}
                        <br />
                        {'}'}
                      </code>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="flex justify-start"
                >
                  <div className="glass-card px-4 py-3 rounded-2xl rounded-tl-sm border border-accent/20">
                    <p className="text-xs text-muted flex items-center gap-2">
                      <Zap className="w-3 h-3 text-accent" />
                      Generated in 0.8s
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Input */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <div className="glass px-4 py-3 rounded-xl flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Ask anything..."
                    className="flex-1 bg-transparent border-none outline-none text-sm"
                    disabled
                  />
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full border border-accent/20"
            >
              <p className="text-xs font-semibold text-accent">
                ⚡ Powered by AI
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
