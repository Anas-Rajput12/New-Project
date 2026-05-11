'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Sparkles } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';

const footerLinks = {
  Product: [
    { name: 'Services', href: '/features' },
    { name: 'AI Development', href: '/ai-assistant' },
    { name: 'Portfolio', href: '/projects' },
    { name: 'Case Studies', href: '/projects' },
    { name: 'Technologies', href: '/features' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/about' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '/contact' },
  ],
  Resources: [
    { name: 'Get Quote', href: '/contact' },
    { name: 'Free Consultation', href: '/contact' },
    { name: 'FAQ', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Documentation', href: '#' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Licenses', href: '#' },
    { name: 'Security', href: '#' },
  ],
};

const socialLinks = [
  { icon: '𝕏', href: '#', label: 'Twitter' },
  { icon: '💻', href: '#', label: 'GitHub' },
  { icon: '💼', href: '#', label: 'LinkedIn' },
  { icon: '📧', href: '/contact', label: 'Email' },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="border-t border-border py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/3 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mb-4 cursor-pointer inline-block"
              >
                <img
                  src={theme === 'light' ? '/logo.png' : '/logo1.png'}
                  alt="CoForge DevX"
                  className="h-16 w-auto object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs font-medium leading-relaxed">
              Professional software development company specializing in AI-powered solutions and custom applications.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center cursor-pointer text-lg hover:border-primary/30 transition-colors"
                  >
                    <span>{social.icon}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4 tracking-tight">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <motion.span
                        whileHover={{ x: 2 }}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer inline-block"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} CoForge DevX. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#">
              <span className="hover:text-primary transition-colors cursor-pointer">
                Privacy
              </span>
            </Link>
            <Link href="#">
              <span className="hover:text-primary transition-colors cursor-pointer">
                Terms
              </span>
            </Link>
            <Link href="#">
              <span className="hover:text-primary transition-colors cursor-pointer">
                Cookies
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
