import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  Users, 
  Star, 
  TrendingUp, 
  CheckCircle,
  Globe,
  Clock
} from 'lucide-react';

const trustMetrics = [
  {
    icon: Users,
    value: '50+',
    label: 'Happy Clients',
    description: 'Across various industries',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Award,
    value: '150+',
    label: 'Projects Delivered',
    description: 'Successfully completed',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Client Rating',
    description: 'Average satisfaction',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: TrendingUp,
    value: '98%',
    label: 'Success Rate',
    description: 'Project completion',
    color: 'from-green-500 to-blue-500'
  }
];

const certifications = [
  {
    name: 'AWS Certified',
    icon: Shield,
    description: 'Cloud Solutions Architecture'
  },
  {
    name: 'Google Partner',
    icon: CheckCircle,
    description: 'Verified Development Partner'
  },
  {
    name: 'ISO 27001',
    icon: Shield,
    description: 'Information Security Management'
  },
  {
    name: 'Global Reach',
    icon: Globe,
    description: '12+ Countries Served'
  }
];

export const TrustIndicators: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 5 }}
              >
                <metric.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div 
                className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {metric.value}
              </motion.div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted & Certified
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our certifications and partnerships ensure the highest standards of quality and security
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl mb-3 group-hover:shadow-lg transition-all">
                  <cert.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {cert.name}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {cert.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};