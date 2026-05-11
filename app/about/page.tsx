import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart, Zap, Users, Trophy, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Quality First',
    description: 'We write clean, maintainable code following industry best practices and modern standards.',
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our success. We partner with you to achieve your business goals.',
  },
  {
    icon: Trophy,
    title: 'Innovation Driven',
    description: 'We use cutting-edge technologies to build scalable, future-proof solutions.',
  },
  {
    icon: Heart,
    title: 'Transparent Communication',
    description: 'Clear, honest communication throughout the project lifecycle. No surprises.',
  },
];

const team = [
  { name: 'Alex Chen', role: 'CEO & Founder', avatar: '👨‍💻', bio: 'Ex-Google engineer, 10+ years in full-stack development' },
  { name: 'Sarah Johnson', role: 'CTO & Lead Developer', avatar: '👩‍💻', bio: 'Former Meta tech lead, distributed systems expert' },
  { name: 'Marcus Rodriguez', role: 'Senior Full-Stack Developer', avatar: '👨‍💼', bio: 'Ex-Stripe engineer, specializes in scalable architectures' },
  { name: 'Emily Watson', role: 'AI/ML Specialist', avatar: '👩‍🔬', bio: 'PhD in Computer Science, AI & machine learning expert' },
];

const milestones = [
  { year: '2021', event: 'Founded CoForge', description: 'Started as a boutique development agency' },
  { year: '2022', event: '10+ Projects Delivered', description: 'Built solutions for startups and SMBs' },
  { year: '2023', event: 'Team Expansion', description: 'Grew to 10+ developers and specialists' },
  { year: '2024', event: '30+ Happy Clients', description: 'Expanded to serve clients globally' },
  { year: '2025', event: 'AI Specialization', description: 'Became experts in AI-powered solutions' },
  { year: '2026', event: '50+ Projects Milestone', description: 'Celebrating continued growth and success' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="text-gradient">CoForge</span>
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              We're a team of passionate developers who build custom software solutions that drive real business results.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="glass border-white/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted text-lg leading-relaxed">
                  To deliver high-quality, scalable software solutions that drive business growth. We partner with
                  companies to transform their ideas into powerful applications using cutting-edge technologies
                  and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-white/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted text-lg leading-relaxed">
                  To be the trusted technology partner for businesses worldwide, known for delivering innovative
                  solutions that exceed expectations. We envision a future where every business has access to
                  enterprise-grade software solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-gradient">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="glass-hover border-white/10 hover:border-white/20 transition-all text-center">
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
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="glass-hover border-white/10 hover:border-white/20 transition-all text-center">
                  <CardHeader>
                    <div className="text-6xl mb-4">{member.avatar}</div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold mb-2">
                      {member.role}
                    </CardDescription>
                    <p className="text-sm text-muted">{member.bio}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="glass-hover border-white/10 hover:border-white/20 transition-all">
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
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
