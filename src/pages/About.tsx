import React from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { ModernAbout } from '../components/About/ModernAbout';
import { ModernLayout } from '../components/Layout/ModernLayout';

export default function About() {
  return (
    <ModernLayout className="pt-16">
      <MetaTags 
        title="About Us - Leading AI & Development Team in Greater Noida"
        description="Meet the passionate team behind WebStitch. Learn about our mission, values, and commitment to delivering exceptional digital solutions."
        keywords="about webstitch, development team, Greater Noida tech company, AI specialists, web developers"
        url="/about"
      />
      
      <div className="py-20">
        <ModernAbout />
      </div>
    </ModernLayout>
  );
}