'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO at Fashion Brand XYZ',
    avatar: '👩‍💻',
    content: 'CoForge built our entire e-commerce platform in just 8 weeks. The team was professional, responsive, and delivered exactly what we needed. Our online sales increased by 50%!',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO at TechFlow',
    avatar: '👨‍💼',
    content: 'We hired CoForge to develop an AI chatbot for customer support. The results exceeded our expectations - 40% reduction in support tickets and customers love it!',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Founder of StartupLab',
    avatar: '👩‍🚀',
    content: 'As a startup founder, I needed a reliable development partner. CoForge delivered our MVP on time and within budget. They truly understand the startup mindset.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Product Manager at CloudScale',
    avatar: '👨‍💻',
    content: 'The custom analytics dashboard CoForge built for us transformed how we make decisions. Real-time data visualization and insights that actually matter.',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    role: 'VP Operations at DataSync',
    avatar: '👩‍💼',
    content: 'CoForge migrated our entire database infrastructure with zero downtime. Their expertise in database architecture is unmatched. Highly recommended!',
    rating: 5,
  },
  {
    name: 'James Park',
    role: 'Director at FinTech Solutions',
    avatar: '👨‍🔬',
    content: 'Security and compliance were critical for our fintech app. CoForge delivered a robust, secure solution that passed all audits. True professionals.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See what our clients are saying about working with CoForge on their projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Card className="h-full glass hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription className="text-xs">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
