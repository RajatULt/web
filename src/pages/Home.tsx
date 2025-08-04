import React from 'react';
import { ModernHero } from '../components/Hero/ModernHero';
import { InteractiveServices } from '../components/Services/InteractiveServices';
import { ModernTestimonials } from '../components/Testimonials/ModernTestimonials';
import { CompactAIShowcase } from '../components/AI/CompactAIShowcase';
import { InteractiveChatbot } from '../components/AI/InteractiveChatbot';
import { ModernFAQ } from '../components/FAQ/ModernFAQ';
import { BlogPreview } from '../components/Blog/BlogPreview';
import { ConversionOptimizedCTA } from '../components/CTA/ConversionOptimizedCTA';
import { MetaTags } from '../components/SEO/MetaTags';
import { ModernLayout } from '../components/Layout/ModernLayout';
import { TrustIndicators } from '../components/Trust/TrustIndicators';

export const Home: React.FC = () => {
  return (
    <ModernLayout>
      <MetaTags
        title="WebStitch - AI & Automation Solutions Leader"
        description="Transform your business with cutting-edge AI solutions, intelligent automation, and smart digital experiences. Leading AI development company in Greater Noida."
        keywords="AI solutions, machine learning, automation, intelligent systems, AI development, Greater Noida, artificial intelligence, process automation"
        url="/"
      />

      {/* Modern Hero Section */}
      <ModernHero />

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Interactive Services Section */}
      <InteractiveServices />

      {/* Compact AI Showcase */}
      <CompactAIShowcase />

      {/* Modern Testimonials */}
      <ModernTestimonials />

      {/* Blog Preview */}
      <BlogPreview />

      {/* FAQ Section */}
      <ModernFAQ />

      {/* Conversion Optimized CTA */}
      <ConversionOptimizedCTA variant="primary" showStats={true} showTestimonial={false} />

      {/* Interactive Chatbot */}
      <InteractiveChatbot />
    </ModernLayout>
  );
};