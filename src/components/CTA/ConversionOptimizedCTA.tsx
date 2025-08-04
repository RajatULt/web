import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp, 
  Clock,
  Shield,
  Award,
  Zap,
  Phone,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTAProps {
  variant?: 'primary' | 'secondary' | 'urgent';
  showStats?: boolean;
  showTestimonial?: boolean;
}

export const ConversionOptimizedCTA: React.FC<CTAProps> = ({
  variant = 'primary',
  showStats = true,
  showTestimonial = true
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    { icon: Users, label: '50+ Companies', value: 'Trust Us' },
    { icon: TrendingUp, label: '340% Average', value: 'ROI' },
    { icon: CheckCircle, label: '99.7%', value: 'Accuracy' },
    { icon: Clock, label: '85%', value: 'Time Saved' }
  ];

  const benefits = [
    'Free 30-minute consultation with AI experts',
    'Custom automation strategy for your business',
    'ROI projection and implementation roadmap',
    'No obligation - just valuable insights'
  ];

  const urgencyElements = {
    primary: {
      badge: 'Limited Time Offer',
      title: 'Ready to Scale Your Business?',
      subtitle: 'Join 50+ successful companies transforming their operations with our solutions',
      cta: 'Get Free Strategy Consultation'
    },
    secondary: {
      badge: 'Proven Results',
      title: 'Accelerate Your Digital Transformation',
      subtitle: 'Discover how technology can revolutionize your business operations',
      cta: 'Schedule Demo'
    },
    urgent: {
      badge: 'Act Now - Save 30%',
      title: 'Limited Spots Available',
      subtitle: 'Limited spots available for Q1 2025 implementation',
      cta: 'Claim Your Spot'
    }
  };

  const content = urgencyElements[variant];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">{content.badge}</span>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {content.title}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-2xl overflow-hidden min-w-[280px] flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="mr-2 w-5 h-5" />
                  {content.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"
                  initial={{ scale: 0 }}
                  animate={{ scale: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="tel:9899721172"
                className="group flex items-center px-8 py-4 border-2 border-white/30 text-white backdrop-blur-sm rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: 9899721172
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-100">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Social Proof */}
          {showTestimonial && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-blue-100 italic mb-4">
                "WebStitch's AI automation reduced our processing time by 85% and saved us over ₹2 crores annually. 
                The ROI was incredible - we saw results within the first month."
              </blockquote>
              <div className="flex items-center justify-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Rajesh Kumar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold text-white">Rajesh Kumar</div>
                  <div className="text-sm text-blue-200">CTO, FinTech Innovations</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Urgency Elements */}
          {variant === 'urgent' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-red-300" />
                <span className="text-sm font-medium text-red-200">
                  Only 5 spots remaining for Q1 2025
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};