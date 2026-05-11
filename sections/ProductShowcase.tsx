'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Palette, Rocket, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    title: 'E-commerce Platform',
    description: 'Full-featured online store with payment integration, inventory management, and analytics dashboard.',
    icon: Code,
    gradient: 'from-primary via-accent-yellow to-accent-orange',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    demo: '/projects',
    github: '/projects',
  },
  {
    title: 'AI Customer Support Bot',
    description: 'Intelligent chatbot that handles customer queries, reduces support tickets by 40%, and improves satisfaction.',
    icon: Palette,
    gradient: 'from-secondary via-accent-pink to-accent-purple',
    tags: ['AI', 'Python', 'OpenAI', 'FastAPI'],
    demo: '/projects',
    github: '/projects',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Custom analytics platform with live data visualization, reporting, and business intelligence features.',
    icon: Rocket,
    gradient: 'from-accent via-primary to-accent-yellow',
    tags: ['React', 'D3.js', 'WebSockets', 'MongoDB'],
    demo: '/projects',
    github: '/projects',
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Client Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore some of the innovative solutions we've built for our clients across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
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
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full glass text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link href={product.demo} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <ExternalLink className="w-4 h-4" />
                          View Case Study
                        </Button>
                      </Link>
                      <Link href="/contact" className="flex-1">
                        <Button size="sm" className="w-full">
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
