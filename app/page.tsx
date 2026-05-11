import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import Stats from '@/sections/Stats';
import ProductShowcase from '@/sections/ProductShowcase';
import Testimonials from '@/sections/Testimonials';
import CTA from '@/sections/CTA';
import Footer from '@/components/Footer';
// import PremiumBadge from '@/components/PremiumBadge';
import MouseFollower from '@/components/MouseFollower';

export default function Home() {
  return (
    <div className="min-h-screen">
      <MouseFollower />
      <Hero />
      <Features />
      <Stats />
      <ProductShowcase />
      <Testimonials />
      <CTA />
      <Footer />
      {/* <PremiumBadge /> */}
    </div>
  );
}
