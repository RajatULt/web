import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Palette, 
  Code, 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Users,
  Target,
  Zap,
  Brain,
  Globe,
  Smartphone
} from 'lucide-react';

interface ServiceType {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  steps: ProcessStep[];
}

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

const serviceTypes: ServiceType[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    steps: [
      {
        id: 'analysis',
        title: 'AI Requirements Analysis',
        description: 'Deep dive into your business processes to identify AI opportunities',
        duration: '1-2 weeks',
        deliverables: ['Process Mapping', 'AI Feasibility Study', 'ROI Projections', 'Technical Specifications']
      },
      {
        id: 'model-design',
        title: 'Model Design & Training',
        description: 'Custom AI model development and training with your data',
        duration: '3-4 weeks',
        deliverables: ['Custom AI Models', 'Training Datasets', 'Performance Metrics', 'Validation Results']
      },
      {
        id: 'integration',
        title: 'System Integration',
        description: 'Seamless integration with your existing business systems',
        duration: '2-3 weeks',
        deliverables: ['API Integration', 'System Testing', 'Performance Optimization', 'Security Implementation']
      },
      {
        id: 'deployment',
        title: 'Deployment & Monitoring',
        description: 'Launch your AI solution with continuous monitoring and support',
        duration: '1 week',
        deliverables: ['Production Deployment', 'Monitoring Dashboard', 'User Training', 'Support Documentation']
      }
    ]
  },
  {
    id: 'web-development',
    name: 'Web Development',
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
    steps: [
      {
        id: 'discovery',
        title: 'Discovery & Planning',
        description: 'Understanding your business goals and technical requirements',
        duration: '1 week',
        deliverables: ['Requirements Document', 'Site Architecture', 'Technology Stack', 'Project Timeline']
      },
      {
        id: 'design',
        title: 'Design & Prototyping',
        description: 'Creating stunning visual designs and interactive prototypes',
        duration: '2-3 weeks',
        deliverables: ['UI/UX Designs', 'Interactive Prototypes', 'Design System', 'Responsive Layouts']
      },
      {
        id: 'development',
        title: 'Development & Testing',
        description: 'Building your website with modern technologies and thorough testing',
        duration: '4-6 weeks',
        deliverables: ['Frontend Development', 'Backend APIs', 'Database Design', 'Quality Assurance']
      },
      {
        id: 'launch',
        title: 'Launch & Optimization',
        description: 'Deploying your website and optimizing for performance',
        duration: '1 week',
        deliverables: ['Production Deployment', 'Performance Optimization', 'SEO Setup', 'Analytics Integration']
      }
    ]
  },
  {
    id: 'mobile-apps',
    name: 'Mobile Apps',
    icon: Smartphone,
    color: 'from-green-500 to-blue-500',
    steps: [
      {
        id: 'strategy',
        title: 'App Strategy & Planning',
        description: 'Defining app features, user experience, and technical approach',
        duration: '1-2 weeks',
        deliverables: ['App Strategy', 'Feature Specifications', 'User Journey Maps', 'Technical Architecture']
      },
      {
        id: 'design',
        title: 'UI/UX Design',
        description: 'Creating intuitive and engaging mobile app interfaces',
        duration: '2-3 weeks',
        deliverables: ['Mobile UI Designs', 'Interactive Prototypes', 'Design Guidelines', 'Icon Sets']
      },
      {
        id: 'development',
        title: 'App Development',
        description: 'Building native or cross-platform mobile applications',
        duration: '6-8 weeks',
        deliverables: ['iOS App', 'Android App', 'Backend Services', 'API Integration']
      },
      {
        id: 'store-launch',
        title: 'App Store Launch',
        description: 'Publishing your app to app stores and ongoing support',
        duration: '1-2 weeks',
        deliverables: ['App Store Submission', 'Marketing Materials', 'Launch Strategy', 'Post-Launch Support']
      }
    ]
  }
];

export const EnhancedServiceProcess: React.FC = () => {
  const [selectedService, setSelectedService] = useState(serviceTypes[0]);
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = selectedService.steps[activeStep];

  return (
    <div className="space-y-12">
      {/* Service Type Selector */}
      <div className="flex flex-wrap justify-center gap-4">
        {serviceTypes.map((service) => (
          <motion.button
            key={service.id}
            onClick={() => {
              setSelectedService(service);
              setActiveStep(0);
            }}
            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all ${
              selectedService.id === service.id
                ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-blue-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <service.icon className="w-5 h-5 mr-2" />
            {service.name}
          </motion.button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Process Steps */}
        <div className="space-y-4">
          {selectedService.steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                index === activeStep
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                  : index < activeStep
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300'
              }`}
              onClick={() => setActiveStep(index)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                  index === activeStep
                    ? `bg-gradient-to-br ${selectedService.color}`
                    : index < activeStep
                    ? 'bg-green-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}>
                  {index < activeStep ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Step Details */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedService.id}-${activeStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-6">
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${selectedService.color} rounded-2xl mb-4`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <selectedService.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {currentStep.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {currentStep.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  What You'll Receive:
                </h4>
                {currentStep.deliverables.map((deliverable, idx) => (
                  <motion.div
                    key={deliverable}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{deliverable}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Duration: {currentStep.duration}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Step {activeStep + 1} of {selectedService.steps.length}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep(Math.min(selectedService.steps.length - 1, activeStep + 1))}
                  disabled={activeStep === selectedService.steps.length - 1}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Process Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Why Our Process Works</h3>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Our structured approach ensures successful delivery and exceptional results
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: 'Goal-Oriented', description: 'Every step aligned with your business objectives' },
            { icon: Users, title: 'Collaborative', description: 'Continuous communication and feedback loops' },
            { icon: Zap, title: 'Efficient', description: 'Streamlined process for faster delivery' }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">{benefit.title}</h4>
              <p className="text-blue-100 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};