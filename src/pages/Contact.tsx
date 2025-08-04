import React, { useState } from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { ModernContact } from '../components/Contact/ModernContact';
import { ModernLayout } from '../components/Layout/ModernLayout';

export const Contact: React.FC = () => {
  return (
    <ModernLayout className="pt-16">
      <MetaTags
        title="Contact Us - Get Your Free Consultation"
        description="Ready to transform your business? Contact WebStitch for web development, app development, and digital solutions. Located in Greater Noida, serving clients globally."
        keywords="contact web development company, Greater Noida web developers, free consultation, project quote, web development services"
        url="/contact"
      />

      <ModernContact />
    </ModernLayout>
  );
};