import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, CheckSquare, Users, Mic, BarChart3, Shield, Code, Zap, Sparkles, Brain, Workflow, Globe } from 'lucide-react';

const features = [
  {
    title: 'AI Development Services',
    description: 'Custom AI chatbots, machine learning models, natural language processing, and intelligent automation solutions.',
    icon: Bot,
    gradient: 'from-primary to-accent',
    details: [
      'AI chatbots & virtual assistants',
      'Machine learning model development',
      'Natural language processing',
      'Computer vision solutions',
    ],
  },
  {
    title: 'Web Development',
    description: 'Full-stack web applications, e-commerce platforms, and progressive web apps built with modern frameworks.',
    icon: Code,
    gradient: 'from-secondary to-pink-500',
    details: [
      'React, Next.js, Vue.js development',
      'Node.js, Python backend services',
      'E-commerce platforms',
      'Custom CMS solutions',
    ],
  },
  {
    title: 'Mobile Development',
    description: 'Native iOS & Android apps, React Native, and cross-platform mobile solutions for your business.',
    icon: CheckSquare,
    gradient: 'from-accent to-green-500',
    details: [
      'iOS & Android native apps',
      'React Native development',
      'Flutter applications',
      'Cross-platform solutions',
    ],
  },
  {
    title: 'Database Solutions',
    description: 'Database design, architecture, optimization, migration, and administration services.',
    icon: BarChart3,
    gradient: 'from-purple-500 to-pink-500',
    details: [
      'Database design & architecture',
      'PostgreSQL, MongoDB, MySQL',
      'Performance optimization',
      'Data migration services',
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure setup, CI/CD pipelines, containerization, and deployment automation.',
    icon: Shield,
    gradient: 'from-yellow-500 to-orange-500',
    details: [
      'AWS, Azure, Google Cloud',
      'CI/CD pipeline setup',
      'Docker & Kubernetes',
      'Infrastructure as Code',
    ],
  },
  {
    title: 'API Development',
    description: 'RESTful APIs, GraphQL, microservices architecture, and third-party integrations.',
    icon: Globe,
    gradient: 'from-red-500 to-pink-500',
    details: [
      'RESTful API development',
      'GraphQL implementation',
      'Third-party integrations',
      'Microservices architecture',
    ],
  },
  {
    title: 'UI/UX Design',
    description: 'Modern, responsive user interfaces with focus on user experience and accessibility.',
    icon: Sparkles,
    gradient: 'from-blue-500 to-cyan-500',
    details: [
      'UI/UX design & prototyping',
      'Responsive web design',
      'Design system creation',
      'Accessibility compliance',
    ],
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
    icon: Zap,
    gradient: 'from-green-500 to-emerald-500',
    details: [
      'Online store development',
      'Payment gateway integration',
      'Inventory management',
      'Order tracking systems',
    ],
  },
  {
    title: 'Consulting & Strategy',
    description: 'Technical consulting, architecture planning, code reviews, and technology recommendations.',
    icon: Brain,
    gradient: 'from-indigo-500 to-purple-500',
    details: [
      'Technical consulting',
      'Architecture planning',
      'Code review & audit',
      'Technology stack selection',
    ],
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, bug fixes, feature updates, and 24/7 technical support.',
    icon: Users,
    gradient: 'from-cyan-500 to-blue-500',
    details: [
      'Post-launch support',
      'Bug fixes & updates',
      'Performance monitoring',
      '24/7 technical support',
    ],
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive testing services including automated testing, security audits, and performance testing.',
    icon: CheckSquare,
    gradient: 'from-orange-500 to-red-500',
    details: [
      'Automated testing',
      'Security audits',
      'Performance testing',
      'User acceptance testing',
    ],
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored software solutions designed specifically for your unique business requirements.',
    icon: Sparkles,
    gradient: 'from-pink-500 to-rose-500',
    details: [
      'Custom software development',
      'Business process automation',
      'Legacy system modernization',
      'Integration services',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted">What We Offer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Comprehensive software development services tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="glass-hover border-white/10 hover:border-white/20 transition-all">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
