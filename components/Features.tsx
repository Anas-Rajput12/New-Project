'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI Code Generation',
    description: 'Generate production-ready code instantly with our advanced AI models trained on billions of lines of code.',
    icon: '🤖',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Smart Debugging',
    description: 'Identify and fix bugs automatically with AI-powered debugging that understands your codebase.',
    icon: '🔍',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Real-time Collaboration',
    description: 'Work seamlessly with your team using AI-enhanced collaboration tools and live code sharing.',
    icon: '👥',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    title: 'Performance Optimization',
    description: 'Automatically optimize your code for speed and efficiency with intelligent performance analysis.',
    icon: '⚡',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Security Scanning',
    description: 'Detect vulnerabilities and security issues before they reach production with AI-powered scanning.',
    icon: '🛡️',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    title: 'Documentation AI',
    description: 'Generate comprehensive documentation automatically from your code with natural language processing.',
    icon: '📚',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build, ship, and scale your applications faster than ever before.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass glass-hover p-8 cursor-pointer"
            >
              <div className={`text-5xl mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
