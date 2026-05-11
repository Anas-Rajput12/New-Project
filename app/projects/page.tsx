import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles, Trophy, Users, Code } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-featured online store with payment integration, inventory management, and real-time analytics.',
    image: '🛍️',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    demo: '#',
    stats: { duration: '8 weeks', team: '4 devs', client: 'Fashion Brand' },
  },
  {
    title: 'AI Customer Support Bot',
    description: 'Intelligent chatbot that handles customer queries, reduces support tickets by 40%.',
    image: '🤖',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    github: '#',
    demo: '#',
    stats: { duration: '6 weeks', team: '3 devs', client: 'TechCorp' },
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Custom analytics platform with live data visualization and business intelligence.',
    image: '📊',
    tags: ['React', 'D3.js', 'WebSockets', 'MongoDB'],
    github: '#',
    demo: '#',
    stats: { duration: '10 weeks', team: '5 devs', client: 'DataSync' },
  },
  {
    title: 'Healthcare Management System',
    description: 'HIPAA-compliant patient management system with appointment scheduling and records.',
    image: '🏥',
    tags: ['Vue.js', 'Django', 'PostgreSQL', 'AWS'],
    github: '#',
    demo: '#',
    stats: { duration: '12 weeks', team: '6 devs', client: 'MediCare' },
  },
  {
    title: 'FinTech Mobile App',
    description: 'Secure mobile banking app with biometric authentication and real-time transactions.',
    image: '💳',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#',
    stats: { duration: '14 weeks', team: '5 devs', client: 'FinTech Solutions' },
  },
  {
    title: 'Inventory Management System',
    description: 'Cloud-based inventory tracking with barcode scanning and automated reordering.',
    image: '📦',
    tags: ['Angular', 'Express', 'MySQL', 'Docker'],
    github: '#',
    demo: '#',
    stats: { duration: '9 weeks', team: '4 devs', client: 'Warehouse Co' },
  },
];

const hackathons = [
  { name: 'ETHGlobal 2024', position: '1st Place', prize: '$50,000' },
  { name: 'Google AI Hackathon', position: '2nd Place', prize: '$30,000' },
  { name: 'Y Combinator Startup School', position: 'Winner', prize: '$25,000' },
  { name: 'MIT Innovation Challenge', position: '1st Place', prize: '$40,000' },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-6">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted">Client Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Explore the innovative solutions we've built for clients across various industries.
            </p>
          </div>
        </section>

        {/* Hackathon Wins */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <Trophy className="w-8 h-8 inline-block text-yellow-400 mr-2" />
              Hackathon <span className="text-gradient">Victories</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hackathons.map((hackathon, index) => (
                <Card key={index} className="glass-hover border-white/10 hover:border-white/20 transition-all text-center">
                  <CardHeader>
                    <div className="text-4xl mb-3">🏆</div>
                    <CardTitle className="text-lg">{hackathon.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {hackathon.position}
                    </CardDescription>
                    <p className="text-2xl font-bold text-gradient-blue mt-2">
                      {hackathon.prize}
                    </p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="glass-hover border-white/10 hover:border-white/20 transition-all">
                  <CardHeader>
                    <div className="text-6xl mb-4 text-center">{project.image}</div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full glass border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted mb-4">
                      <span className="flex items-center gap-1">
                        ⏱️ {project.stats.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" /> {project.stats.team}
                      </span>
                      <span className="flex items-center gap-1">
                        🏢 {project.stats.client}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Case Study
                      </Button>
                      <Button size="sm" className="flex-1">
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
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
