'use client';

import { motion } from 'framer-motion';

const companies = [
  'TechCorp',
  'InnovateLabs',
  'FutureAI',
  'CloudScale',
  'DataFlow',
  'NexGen',
];

export default function TrustedBy() {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-muted uppercase tracking-wider">
            Trusted by innovative teams worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <div className="glass-hover px-6 py-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all">
                <span className="text-lg font-semibold text-muted-foreground">
                  {company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
