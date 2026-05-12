'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Tech Startup Founder',
    role: 'E-Commerce Platform',
    avatar: '🚀',
    content: 'Working with innovative developers who understand modern web technologies and deliver quality solutions on time.',
    rating: 5,
  },
  {
    name: 'Business Owner',
    role: 'AI Integration Project',
    avatar: '💼',
    content: 'Impressed by the expertise in AI and machine learning. The voice assistant solution exceeded expectations.',
    rating: 5,
  },
  {
    name: 'Project Manager',
    role: 'Full-Stack Development',
    avatar: '👨‍💻',
    content: 'Professional approach to development with clean code, modern frameworks, and attention to detail.',
    rating: 5,
  },
  {
    name: 'Startup Team',
    role: 'Web Application',
    avatar: '🎯',
    content: 'Great experience working on complex projects. Strong skills in Next.js, React, and database architecture.',
    rating: 5,
  },
  {
    name: 'Enterprise Client',
    role: 'Database Solutions',
    avatar: '🏢',
    content: 'Solid understanding of scalable architecture and modern development practices. Reliable and efficient.',
    rating: 5,
  },
  {
    name: 'Digital Agency',
    role: 'API Development',
    avatar: '⚡',
    content: 'Excellent technical skills combined with good communication. Delivered robust API solutions.',
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
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building trust through quality work and professional delivery across diverse projects.
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
