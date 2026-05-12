'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
    content:
      'CoForge DevX transformed our development workflow. The AI assistant alone saved us hundreds of hours. Truly next-generation tooling.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Engineer at DataScale',
    content:
      "The most impressive development platform I've used. The attention to detail and performance optimization is unmatched.",
    rating: 5,
    avatar: '👨‍💻',
  },
  {
    name: 'Emily Watson',
    role: 'Founder at InnovateLabs',
    content:
      'Working with CoForge DevX feels like having a senior developer on your team 24/7. Game-changing for startups.',
    rating: 5,
    avatar: '👩‍🚀',
  },
];

export default function TestimonialsNew() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Loved by</span>
            <br />
            <span className="text-gradient">developers worldwide</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            See what teams are saying about their experience with CoForge DevX
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-hover p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-lg mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
