'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bot, Mic, Send, Sparkles, Code, MessageSquare, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description: 'Custom chatbots for customer support, sales, and engagement',
  },
  {
    icon: Code,
    title: 'Intelligent Automation',
    description: 'Automate business processes with AI-powered workflows',
  },
  {
    icon: Mic,
    title: 'Voice Assistants',
    description: 'Voice-enabled AI assistants for hands-free interactions',
  },
  {
    icon: Globe,
    title: 'NLP Solutions',
    description: 'Natural language processing for text analysis and understanding',
  },
];

const commands = [
  { command: 'Build a customer support chatbot', description: 'AI-powered support automation' },
  { command: 'Create a virtual assistant', description: 'Intelligent task automation' },
  { command: 'Implement sentiment analysis', description: 'Understand customer feedback' },
  { command: 'Develop voice recognition', description: 'Voice-enabled applications' },
  { command: 'Build recommendation engine', description: 'Personalized suggestions' },
  { command: 'Create document processing AI', description: 'Automated data extraction' },
];

export default function AIAssistantPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m an AI assistant demo. Ask me about our AI development services or how we can help automate your business processes.' },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages([...messages, { role: 'user', content: message }]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'We can help you build custom AI solutions for that! Our team specializes in developing intelligent chatbots, automation systems, and machine learning models. Would you like to schedule a consultation to discuss your project?'
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen">

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-6">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted">AI-Powered Assistant</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI Development <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              We build custom AI-powered solutions including chatbots, virtual assistants, and intelligent automation for your business.
            </p>
          </div>
        </section>

        {/* Chat Demo */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary" />
                  AI Assistant Demo
                </CardTitle>
                <CardDescription>
                  Experience how our AI solutions can help your business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4 h-96 overflow-y-auto p-4 glass rounded-lg">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-lg ${
                          msg.role === 'user'
                            ? 'bg-gradient-to-r from-primary to-secondary text-white'
                            : 'glass border border-white/10'
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me anything..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <Button onClick={handleSend}>
                    <Send className="w-4 h-4" />
                  </Button>
                  <Button variant="outline">
                    <Mic className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-gradient">AI Capabilities</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="glass-hover border-white/10 hover:border-white/20 transition-all text-center">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Supported Commands */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Example <span className="text-gradient">AI Solutions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commands.map((cmd, index) => (
                <Card key={index} className="glass-hover border-white/10 hover:border-white/20 transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      {cmd.command}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {cmd.description}
                    </CardDescription>
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
