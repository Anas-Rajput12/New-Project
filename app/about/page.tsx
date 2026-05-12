'use client';

import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart, Zap, Users, Trophy, Sparkles, Code, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

const values = [
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Leveraging cutting-edge AI and modern technologies to build future-ready solutions.',
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our priority. We deliver solutions that exceed expectations.',
  },
  {
    icon: Trophy,
    title: 'Quality Excellence',
    description: 'Writing clean, scalable code following industry best practices and standards.',
  },
  {
    icon: Heart,
    title: 'Reliable Partnership',
    description: 'Building long-term relationships through transparency and consistent delivery.',
  },
];

const skills = [
  { category: 'Frontend', techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', techs: ['Node.js', 'FastAPI', 'Python', 'Express'] },
  { category: 'AI/ML', techs: ['NLP', 'RAG', 'Speech Recognition', 'OpenAI'] },
  { category: 'Database', techs: ['PostgreSQL', 'MongoDB', 'Neondb', 'Qdrant'] },
  { category: 'CMS', techs: ['Sanity', 'Docusaurus', 'Headless CMS'] },
  { category: 'Tools', techs: ['Git', 'Docker', 'Firebase', 'Better Auth'] },
];

const milestones = [
  { year: '2023', event: 'Company Founded', description: 'Started with a vision to deliver exceptional software solutions' },
  { year: '2024', event: 'First Major Projects', description: 'Successfully delivered AI-powered and web applications' },
  { year: '2024', event: 'Technology Expansion', description: 'Expanded expertise in AI, ML, and modern web frameworks' },
  { year: '2025', event: 'AI Specialization', description: 'Became specialists in voice recognition and RAG-powered systems' },
  { year: '2025', event: 'Portfolio Growth', description: 'Built diverse portfolio across e-commerce, AI, and enterprise solutions' },
  { year: '2026', event: 'Continued Innovation', description: 'Leading the way in intelligent automation and modern development' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted">Our Story</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                About <span className="text-gradient">CoForge</span>
              </h1>
              <p className="text-2xl text-muted mb-4">
                Building Tomorrow's Technology Today
              </p>
              <p className="text-xl text-muted leading-relaxed">
                A professional software development company specializing in AI-powered applications, modern web solutions, and intelligent automation that drives business growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass border-border/50 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted text-lg leading-relaxed">
                    To deliver innovative, high-quality software solutions that empower businesses to thrive in the digital age.
                    We combine cutting-edge AI technology with modern web development to create applications that drive real results and business growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass border-border/50 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent-pink flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted text-lg leading-relaxed">
                    To be a leading force in AI-driven software development, recognized for delivering exceptional solutions that transform businesses.
                    We envision a future where intelligent automation and modern technology are accessible to companies of all sizes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Core <span className="text-gradient">Values</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="glass-hover border-border/50 hover:border-primary/30 transition-all text-center h-full">
                      <CardHeader>
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                        <CardDescription className="text-base">
                          {value.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Professional <span className="text-gradient">Experience</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-hover border-border/50 hover:border-primary/30 transition-all h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-1">{exp.role}</CardTitle>
                      <CardDescription className="text-base font-semibold text-primary mb-2">
                        {exp.company}
                      </CardDescription>
                      <p className="text-sm text-muted mb-3">{exp.duration}</p>
                      <ul className="space-y-2">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="text-muted text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Technical <span className="text-gradient">Skills</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-hover border-border/50 hover:border-primary/30 transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg mb-4">{skill.category}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {skill.techs.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full glass border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our <span className="text-gradient">Journey</span>
              </h2>
            </motion.div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-hover border-border/50 hover:border-primary/30 transition-all">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">{milestone.year}</span>
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{milestone.event}</CardTitle>
                          <CardDescription className="text-base">
                            {milestone.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
