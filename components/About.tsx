'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">CoForge DevX</span>
            </h2>
            <p className="text-xl text-gray-400 mb-6">
              We're on a mission to democratize software development by making AI-powered
              tools accessible to every developer, from solo founders to enterprise teams.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Founded by engineers who understand the challenges of modern development,
              CoForge DevX combines cutting-edge AI research with practical developer
              experience to create tools that actually work.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Founded', value: '2024' },
                { label: 'Team Size', value: '150+ Engineers' },
                { label: 'Funding', value: '$100M Series B' },
                { label: 'Headquarters', value: 'San Francisco, CA' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" />
                  <span className="text-gray-400">{item.label}:</span>
                  <span className="text-white font-semibold">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-gradient-blue">
                  Our Vision
                </h3>
                <p className="text-gray-300 mb-6">
                  To create a world where every developer has access to AI-powered tools
                  that amplify their creativity and productivity, enabling them to build
                  the next generation of transformative applications.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🚀', label: 'Innovation First' },
                    { icon: '🌍', label: 'Global Impact' },
                    { icon: '🤝', label: 'Developer-Centric' },
                    { icon: '⚡', label: 'Lightning Fast' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="glass p-4 text-center"
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
