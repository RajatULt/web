import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Smartphone, 
  MessageCircle, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: React.ComponentType<any>;
  features: string[];
  technologies: string[];
  stats: {
    label: string;
    value: string;
  }[];
  color: string;
  category: string;
  benefits: string[];
}

const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Machine Learning',
    description: 'Custom AI systems that learn, adapt, and optimize your business operations automatically with 99.7% accuracy.',
    shortDescription: 'Intelligent AI systems with 99.7% accuracy',
    icon: Brain,
    features: [
      'Custom AI model development',
      'Predictive analytics & forecasting',
      'Natural language processing',
      'Computer vision & image recognition',
      'Intelligent automation workflows',
      'Real-time data processing'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'Python', 'CUDA', 'Hugging Face'],
    stats: [
      { label: 'Accuracy', value: '99.7%' },
      { label: 'Speed', value: '2.3s' },
      { label: 'Cost Reduction', value: '85%' }
    ],
    color: 'from-blue-500 to-cyan-500',
    category: 'AI & ML',
    benefits: [
      'Automated decision making',
      'Predictive insights',
      'Reduced human error',
      'Scalable intelligence'
    ]
  },
  {
    id: 'automation',
    title: 'Intelligent Process Automation',
    description: 'AI-driven automation that handles complex workflows and scales with your business growth.',
    shortDescription: 'AI-driven automation with 85% time savings',
    icon: Zap,
    features: [
      'Robotic Process Automation (RPA)',
      'Workflow orchestration',
      'Document processing & extraction',
      'API integration & connectivity',
      'Performance monitoring',
      'Intelligent task routing'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Python', 'Zapier', 'Microsoft Power Automate', 'Node.js'],
    stats: [
      { label: 'Time Saved', value: '85%' },
      { label: 'Error Reduction', value: '94%' },
      { label: 'ROI', value: '340%' }
    ],
    color: 'from-orange-500 to-red-500',
    category: 'Automation',
    benefits: [
      'Eliminate manual tasks',
      'Improve accuracy',
      'Scale operations',
      'Reduce costs'
    ]
  },
  {
    id: 'web-development',
    title: 'Next-Gen Web Applications',
    description: 'Modern web applications with AI integration, stunning design, and exceptional performance.',
    shortDescription: 'High-performance web apps with AI integration',
    icon: Globe,
    features: [
      'AI-powered user experiences',
      'Progressive Web App capabilities',
      'Advanced animations & interactions',
      'SEO optimization & performance',
      'Cloud integration & scalability',
      'Real-time features & APIs'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL'],
    stats: [
      { label: 'Load Time', value: '<1s' },
      { label: 'Performance', value: '98/100' },
      { label: 'Engagement', value: '+150%' }
    ],
    color: 'from-purple-500 to-pink-500',
    category: 'Web Dev',
    benefits: [
      'Lightning-fast performance',
      'Mobile-first design',
      'SEO optimized',
      'Scalable architecture'
    ]
  }
];

export const InteractiveServices: React.FC = () => {
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());

  const toggleService = (serviceId: string) => {
    setExpandedServices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI and digital solutions designed to transform your business operations
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Service Header */}
              <div className={`p-6 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                    <span className="text-white/80 text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {service.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">
                    Key Benefits:
                  </h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="text-xs text-gray-500">+{service.technologies.length - 3}</span>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    to="/contact"
                    className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-medium text-center text-sm"
                  >
                    Get Started
                  </Link>
                  <button
                    onClick={() => toggleService(service.id)}
                    className="px-4 py-3 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    {expandedServices.has(service.id) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
                
                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedServices.has(service.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                    >
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">
                        Complete Features:
                      </h4>
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-16 h-16 border border-white rounded-full animate-pulse" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border border-white rounded-full animate-bounce" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join 50+ successful companies that have revolutionized their operations with our AI solutions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <div className="flex items-center space-x-8 text-blue-100">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>50+ Clients</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>150+ Projects</span>
                  </div>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl"
                >
                  <Brain className="w-6 h-6 mr-3" />
                  Start Your AI Transformation
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};