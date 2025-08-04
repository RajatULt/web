import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Code
} from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'Mobile Apps', href: '/services#mobile-apps' },
    { name: 'UI/UX Design', href: '/services#ui-ux-design' },
    { name: 'E-commerce', href: '/services#ecommerce' },
    { name: 'Cloud Solutions', href: '/services#cloud' },
    { name: 'SEO & Marketing', href: '/services#seo' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ],
  resources: [
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Tech Blog', href: '/blog' },
    { name: 'Free Consultation', href: '/contact' },
    { name: 'Project Quote', href: '/contact' },
    { name: 'Support', href: '/contact' },
    { name: 'FAQ', href: '/contact' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' }
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/webstitch' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/webstitch' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/webstitch' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/webstitch' }
];

export const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <motion.div
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Code className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
              </motion.div>
             <Link to="/" className="flex items-center space-x-2">
                         <img 
                           src="/webstitch-logo.png" 
                           alt="WebStitch Logo" 
                           className="h-6 w-auto sm:h-8 md:h-10 rounded-lg"
                         />
                       </Link>
             
            </Link>
            
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Empowering businesses with innovative, scalable, and secure digital solutions. 
              We transform ideas into powerful digital experiences that drive growth and success.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400" />
                <span className="text-sm sm:text-base">Greater Noida, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400" />
                <a href="tel:9899721172" className="hover:text-white transition-colors">
                  <span className="text-sm sm:text-base">9899721172</span>
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400" />
                <a href="mailto:webstitchh@gmail.com" className="hover:text-white transition-colors">
                  <span className="text-sm sm:text-base">webstitchh@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Stay Updated</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Subscribe to our newsletter for the latest tech insights and project updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
              />
              <motion.button
                type="submit"
                disabled={isSubscribed}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  isSubscribed
                    ? 'bg-green-600 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                } text-sm sm:text-base`}
                whileHover={!isSubscribed ? { scale: 1.05 } : {}}
                whileTap={!isSubscribed ? { scale: 0.95 } : {}}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} WebStitch. All rights reserved. Made with ❤️ in Greater Noida.
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm justify-center">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};