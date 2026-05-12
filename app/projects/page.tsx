'use client';

import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles, Trophy, Users, Code, Clock, Target } from 'lucide-react';
import { projects, achievements } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted">Innovation Portfolio</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Transforming Ideas Into{' '}
                <span className="text-gradient">Digital Reality</span>
              </h1>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Explore cutting-edge solutions powered by AI, modern web technologies, and innovative thinking.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <Trophy className="w-8 h-8 inline-block text-yellow-400 mr-2" />
                Achievements & <span className="text-gradient">Recognition</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="glass-hover border-border/50 hover:border-primary/30 transition-all text-center h-full">
                      <CardHeader>
                        <div className="text-5xl mb-3">{achievement.icon}</div>
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {achievement.description}
                        </CardDescription>
                        <p className="text-sm font-semibold text-primary mt-2">
                          {achievement.year}
                        </p>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
                A showcase of innovative solutions spanning AI, web development, and enterprise applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-hover border-border/50 hover:border-primary/30 transition-all overflow-hidden group h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full glass border border-primary/30 text-primary backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <CardHeader className="flex-grow">
                      <CardTitle className="text-xl group-hover:text-gradient transition-all">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 4).map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full glass border border-border/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-3 py-1 text-xs rounded-full glass border border-border/50 text-muted">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs text-muted mb-4 pb-4 border-b border-border/50">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {project.stats.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-3 h-3" /> {project.stats.type}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {project.link !== '#' && (
                          <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="default" size="sm" className="w-full">
                              <ExternalLink className="w-3 h-3 mr-2" />
                              Live Demo
                            </Button>
                          </Link>
                        )}
                        {project.github !== '#' && (
                          <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="outline" size="sm" className="w-full">
                              <Code className="w-3 h-3 mr-2" />
                              Code
                            </Button>
                          </Link>
                        )}
                        {project.link === '#' && project.github === '#' && (
                          <Button variant="outline" size="sm" className="w-full" disabled>
                            Coming Soon
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass rounded-3xl p-12 border border-primary/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build Something <span className="text-gradient">Amazing?</span>
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                Let's collaborate on your next project and bring your vision to life with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="px-8">
                    Start a Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
