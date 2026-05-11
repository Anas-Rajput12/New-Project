'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const knowledgeBase = {
  services: {
    keywords: ['service', 'services', 'what do you do', 'what can you build', 'offerings', 'capabilities'],
    response: `We offer comprehensive IT services:

🤖 **AI Development**
- Custom AI chatbots & assistants
- Machine learning solutions
- Natural language processing
- AI integration services

💻 **Web Development**
- Full-stack web applications
- E-commerce platforms
- Progressive web apps
- Custom CMS solutions

📱 **Mobile Development**
- iOS & Android apps
- React Native development
- Cross-platform solutions

🗄️ **Database Solutions**
- Database design & architecture
- PostgreSQL, MongoDB, MySQL
- Performance optimization
- Data migration

☁️ **Cloud & DevOps**
- AWS, Azure, Google Cloud
- CI/CD pipeline setup
- Docker & Kubernetes deployment`
  },
  pricing: {
    keywords: ['price', 'pricing', 'cost', 'budget', 'how much', 'rates', 'quote'],
    response: `Our pricing is flexible based on project scope:

💼 **Hourly Rate**: $50 - $100/hour
Perfect for consulting and small tasks

📦 **Fixed Price Projects**: Starting from $5,000
For well-defined projects with clear scope

🏢 **Dedicated Team**: Custom pricing
For long-term projects requiring full team

🎯 **Monthly Retainer**: Custom packages
For ongoing support and maintenance

Would you like a custom quote? Contact us for a free consultation!`
  },
  projects: {
    keywords: ['project', 'projects', 'portfolio', 'work', 'examples', 'case studies', 'clients'],
    response: `We've successfully delivered 50+ projects including:

🤖 **AI Code Review Assistant**
- 2.3k GitHub stars
- Automated code review with GPT-4
- Tech: Python, FastAPI, OpenAI

💻 **Real-time Collaboration IDE**
- Web-based IDE with live collaboration
- Tech: React, WebRTC, Node.js

🚀 **DevOps Automation Platform**
- Complete CI/CD pipeline automation
- Tech: Go, Kubernetes, Docker

✅ **Smart Task Manager**
- AI-powered task prioritization
- Tech: Next.js, PostgreSQL, AI

Check our Projects page to see detailed case studies with results and client testimonials!`
  },
  technologies: {
    keywords: ['technology', 'technologies', 'tech stack', 'tools', 'frameworks', 'languages'],
    response: `We work with cutting-edge technologies:

**Frontend:**
React, Next.js, Vue.js, TypeScript, Tailwind CSS

**Backend:**
Node.js, Python, FastAPI, Django, Express.js

**Mobile:**
React Native, Flutter

**Databases:**
PostgreSQL, MongoDB, MySQL, Redis

**AI/ML:**
OpenAI, TensorFlow, PyTorch, LangChain

**Cloud & DevOps:**
AWS, Azure, Google Cloud, Docker, Kubernetes

**Other:**
Git, CI/CD, REST APIs, GraphQL, WebSockets`
  },
  contact: {
    keywords: ['contact', 'reach', 'email', 'phone', 'call', 'talk', 'consultation', 'meeting'],
    response: `Let's connect! Here's how to reach us:

📧 **Email**: hello@coforge.com
📞 **Phone**: +1 (555) 123-4567
📍 **Office**: San Francisco, CA
🕐 **Hours**: Mon-Fri, 9 AM - 6 PM PST

🎯 **Get Free Consultation**
Visit our Contact page to request a custom quote or schedule a discovery call.

We typically respond within 24 hours!`
  },
  process: {
    keywords: ['process', 'how do you work', 'methodology', 'workflow', 'steps', 'timeline'],
    response: `Our proven development process:

1️⃣ **Discovery Call** (Free)
   Understand your requirements and goals

2️⃣ **Proposal & Planning**
   Detailed plan, timeline, and cost estimate

3️⃣ **Design Phase**
   UI/UX design, wireframes, mockups

4️⃣ **Development**
   Agile sprints with regular updates

5️⃣ **Testing**
   Comprehensive QA and bug fixes

6️⃣ **Deployment**
   Production launch and optimization

7️⃣ **Support**
   Post-launch maintenance and updates

Typical timeline: 4-12 weeks depending on complexity`
  },
  about: {
    keywords: ['about', 'who are you', 'company', 'team', 'experience', 'founded'],
    response: `**About CoForge**

We're a full-stack software development company specializing in AI-powered solutions, web applications, and database architecture.

📊 **Our Track Record:**
- 50+ projects delivered
- 30+ happy clients worldwide
- 5+ years of experience
- 100% on-time delivery rate

👥 **Our Team:**
Expert developers with experience from Google, Meta, and Stripe

🎯 **Our Mission:**
Deliver high-quality, scalable software solutions that drive business growth

💡 **Why Choose Us:**
- Quality code & best practices
- Transparent communication
- Agile methodology
- 24/7 support available`
  },
  hackathons: {
    keywords: ['hackathon', 'awards', 'achievements', 'wins', 'competitions'],
    response: `We've won multiple prestigious hackathons:

🏆 **ETHGlobal 2024** - 1st Place ($50,000)
🏆 **Google AI Hackathon** - 2nd Place ($30,000)
🏆 **Y Combinator Startup School** - Winner ($25,000)
🏆 **MIT Innovation Challenge** - 1st Place ($40,000)

Our team's expertise is proven through real-world competitions and client success stories!`
  }
};

const quickQuestions = [
  "What services do you offer?",
  "How much does a project cost?",
  "Show me your portfolio",
  "What technologies do you use?",
  "How can I contact you?"
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm CoForge AI Assistant. I can help you learn about our services, pricing, projects, and more. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for greetings
    if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
      return "Hello! 👋 I'm here to help you learn about CoForge. You can ask me about our services, pricing, projects, technologies, or how to get in touch. What would you like to know?";
    }

    // Check for thanks
    if (lowerMessage.match(/(thank|thanks|appreciate)/)) {
      return "You're welcome! Feel free to ask if you have any other questions. We're here to help! 😊";
    }

    // Search knowledge base
    for (const [key, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return data.response;
      }
    }

    // Default response
    return `I can help you with information about:

• **Services** - What we build for clients
• **Pricing** - Project costs and rates
• **Projects** - Our portfolio and case studies
• **Technologies** - Tech stack we use
• **Contact** - How to reach us
• **Process** - How we work with clients
• **About** - Company info and team

What would you like to know more about?`;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 800));

    // Get response
    const response = findBestResponse(userMessage);

    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
  };

  const handleQuickQuestion = (question: string) => {
    setMessages(prev => [...prev, { role: 'user', content: question }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = findBestResponse(question);
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 800);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg flex items-center justify-center cursor-pointer group"
          >
            <Bot className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? 'auto' : '600px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] glass border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">CoForge AI Assistant</h3>
                  <p className="text-xs text-white/80">Online • Instant replies</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4 text-white" />
                  ) : (
                    <Minimize2 className="w-4 h-4 text-white" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.role === 'user'
                            ? 'bg-gradient-to-r from-primary to-secondary text-white'
                            : 'glass border border-white/10'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="glass border border-white/10 p-3 rounded-2xl">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                {messages.length === 1 && (
                  <div className="p-4 border-t border-white/10 bg-background/30">
                    <p className="text-xs text-muted mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickQuestion(question)}
                          className="text-xs px-3 py-1.5 glass border border-white/10 rounded-full hover:border-primary/50 transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-white/10 bg-background/50">
                  <div className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask me anything..."
                      className="flex-1"
                    />
                    <Button onClick={handleSend} size="icon">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted mt-2 text-center">
                    Powered by CoForge AI
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
