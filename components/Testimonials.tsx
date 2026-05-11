'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
    image: '👩‍💼',
    content: 'CoForge DevX has transformed how our team builds software. We ship features 3x faster now.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Engineer at DataSync',
    image: '👨‍💻',
    content: 'The AI code generation is mind-blowing. It understands context better than any tool I\'ve used.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Founder of StartupLab',
    image: '👩‍🚀',
    content: 'As a solo founder, CoForge DevX is like having a senior engineer on my team 24/7.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'VP Engineering at CloudScale',
    image: '👨‍💼',
    content: 'The security scanning caught vulnerabilities we missed in code review. Absolutely essential.',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    role: 'Senior Developer at FinTech Pro',
    image: '👩‍💻',
    content: 'Best developer tool I\'ve used in my 15-year career. The ROI is incredible.',
    rating: 5,
  },
  {
    name: 'James Park',
    role: 'Tech Lead at AI Innovations',
    image: '👨‍🔬',
    content: 'CoForge DevX helps us maintain code quality while moving fast. Game changer for our team.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Loved by <span className="text-gradient">Developers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of developers and teams who are building faster with CoForge DevX.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass glass-hover p-6 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
