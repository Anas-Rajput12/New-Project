'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'muhammadanasqadri2@gmail.com',
    link: 'mailto:muhammadanasqadri2@gmail.com',
  },
  {
    icon: Phone,
    title: 'GitHub',
    value: '@Anas-Rajput12',
    link: 'https://github.com/Anas-Rajput12',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Nawabshah, Sindh, Pakistan',
    link: '#',
  },
];

const socialLinks = [
  {
    icon: '💻',
    name: 'GitHub',
    handle: '@Anas-Rajput12',
    link: 'https://github.com/Anas-Rajput12',
  },
  {
    icon: '💼',
    name: 'LinkedIn',
    handle: 'Muhammad Anas Qadri',
    link: 'https://linkedin.com/in/muhammad-anas-qadri-a7608a2b7/',
  },
  {
    icon: '📧',
    name: 'Email',
    handle: 'muhammadanasqadri2@gmail.com',
    link: 'mailto:muhammadanasqadri2@gmail.com',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form Submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted">Get in Touch</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let's Work <span className="text-gradient">Together</span>
            </h1>

            <p className="text-xl text-muted max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and
              I'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Start Your Project
                  </CardTitle>

                  <CardDescription>
                    Tell me about your project and I'll get back to you within
                    24 hours to discuss how I can help.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-7">
                    {/* NAME + EMAIL */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Full Name
                        </label>

                        <Input
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-14 rounded-2xl border-border/60 bg-background/40 backdrop-blur-md focus:ring-2 focus:ring-primary/40"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Email Address
                        </label>

                        <Input
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-14 rounded-2xl border-border/60 bg-background/40 backdrop-blur-md focus:ring-2 focus:ring-primary/40"
                        />
                      </div>
                    </div>

                    {/* COMPANY + PROJECT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Company Name
                        </label>

                        <Input
                          name="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                          className="h-14 rounded-2xl border-border/60 bg-background/40 backdrop-blur-md"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Project Type
                        </label>

                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full h-14 rounded-2xl border border-border/60 bg-background/40 backdrop-blur-md px-4 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                        >
                          <option value="">Select Project Type</option>
                          <option value="web">Web Development</option>
                          <option value="mobile">Mobile App</option>
                          <option value="ai">AI Solutions</option>
                          <option value="saas">SaaS Platform</option>
                          <option value="branding">Branding</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* BUDGET + TIMELINE */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Budget Range
                        </label>

                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full h-14 rounded-2xl border border-border/60 bg-background/40 backdrop-blur-md px-4 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                        >
                          <option value="">Select Budget</option>
                          <option value="5k">Under $5,000</option>
                          <option value="10k">$5,000 - $10,000</option>
                          <option value="25k">$10,000 - $25,000</option>
                          <option value="50k">$25,000 - $50,000</option>
                          <option value="100k">$50,000+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Timeline
                        </label>

                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full h-14 rounded-2xl border border-border/60 bg-background/40 backdrop-blur-md px-4 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                        >
                          <option value="">Select Timeline</option>
                          <option value="urgent">Urgent (1-2 Weeks)</option>
                          <option value="normal">1-2 Months</option>
                          <option value="long">3-6 Months</option>
                          <option value="enterprise">Enterprise Scale</option>
                        </select>
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="block text-sm font-medium mb-3">
                        Project Details
                      </label>

                      <textarea
                        name="message"
                        rows={7}
                        placeholder="Describe your project goals, target audience, features, and expectations..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-3xl border border-border/60 bg-background/40 backdrop-blur-md px-5 py-4 text-sm resize-none outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground"
                      />
                    </div>

                    {/* BUTTON */}
                     {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Request Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">
              {/* INFO CARDS */}
              {contactInfo.map((info, index) => {
                const Icon = info.icon;

                return (
                  <Card
                    key={index}
                    className="rounded-3xl border border-border/50 bg-background/60 backdrop-blur-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-5 shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <CardTitle className="text-xl">
                        {info.title}
                      </CardTitle>

                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    </CardHeader>
                  </Card>
                );
              })}

              {/* SOCIALS */}
              <Card className="rounded-3xl border border-border/50 bg-background/60 backdrop-blur-2xl shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl mb-5">
                    Connect With Us
                  </CardTitle>

                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="flex items-center justify-between rounded-2xl border border-border/50 bg-background/40 px-5 py-4 hover:border-primary/40 hover:scale-[1.02] transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-2xl">{social.icon}</div>

                          <div>
                            <div className="font-medium">
                              {social.name}
                            </div>

                            <div className="text-sm text-muted-foreground">
                              {social.handle}
                            </div>
                          </div>
                        </div>

                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                </CardHeader>
              </Card>

              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}