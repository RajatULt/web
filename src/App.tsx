import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/Performance/CookieConsent';
import { Home } from './pages/Home';
import About from './pages/About';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { Careers } from './pages/Careers';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { BlogPost } from './pages/BlogPost';
import { ResponsiveDemo } from './pages/ResponsiveDemo';
import { OrganizationSchema, LocalBusinessSchema } from './components/SEO/StructuredData';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <OrganizationSchema />
            <LocalBusinessSchema />
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/responsive-demo" element={<ResponsiveDemo />} />
            </Routes>
            <Footer />
            <CookieConsent />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;