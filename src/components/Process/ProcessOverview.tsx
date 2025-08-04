import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Lightbulb, 
  Code, 
  Rocket, 
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Target,
  Zap,
  Brain,
  Settings
} from 'lucide-react';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  duration: string;
  deliverables: string[];
  color: string;
  details: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    title: 'AI Strategy & Discovery',
    description: 'Deep analysis of your business processes to identify AI opportunities',
    icon: MessageCircle,
    duration: '1-2 weeks',
    deliverables: ['Business Process Analysis', 'AI Opportunity Assessment', 'ROI Projections', 'Technical Roadmap'],
    color: 'from-blue-500 to-cyan-500',
    details: 'We conduct comprehensive interviews with stakeholders, analyze current workflows, and identify the most impactful areas for AI implementation.'
  },
  {
    id: 'design',
    title: 'Solution Design & Architecture',
    description: 'Creating intelligent system designs and AI model architecture',
    icon: Lightbulb,
    duration: '2-3 weeks',
    deliverables: ['AI Model Design', 'System Architecture', 'Integration Plan', 'Security Framework'],
    color: 'from-purple-500 to-pink-500',
    details: 'Our experts design custom AI solutions tailored to your specific needs, ensuring scalability, security, and optimal performance.'
  },
  {
    id: 'development',
    title: 'AI Development & Training',
    description: 'Building and training intelligent systems with cutting-edge technology',
    icon: Code,
    duration: '4-8 weeks',
    deliverables: ['AI Model Development', 'System Integration', 'Quality Testing', 'Performance Optimization'],
    color: 'from-green-500 to-blue-500',
    details: 'We develop custom AI models, integrate them with your existing systems, and conduct rigorous testing to ensure reliability and accuracy.'
  },
  {
    id: 'launch',
    title: 'Deployment & Optimization',
    description: 'Launching your AI solution with continuous monitoring and improvement',
    icon: Rocket,
    duration: '1-2 weeks',
    deliverables: ['Production Deployment', 'Team Training', 'Monitoring Setup', 'Ongoing Support'],
    color: 'from-orange-500 to-red-500',
    details: 'We deploy your AI solution to production, train your team, set up monitoring systems, and provide ongoing optimization and support.'
  }
];

export const ProcessOverview: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-600 rounded-full animate-spin-slow" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-600 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-green-600 rotate-45 animate-bounce" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Proven Development & AI Implementation Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A systematic approach that ensures successful project delivery and AI transformation with measurable results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Process Timeline */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-6 rounded-2xl border-2 transition-all cursor-pointer group ${
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
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    index === activeStep
                      ? `bg-gradient-to-br ${step.color}`
                      : index < activeStep
                      ? 'bg-green-500'
                      : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-blue-500'
                  }`}>
                    {index < activeStep ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <step.icon className="w-6 h-6 text-white" />
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
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.slice(0, 2).map((deliverable) => (
                        <span
                          key={deliverable}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                        >
                          {deliverable}
                        </span>
                      ))}
                      {step.deliverables.length > 2 && (
                        <span className="text-xs text-gray-500">
                          +{step.deliverables.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Step Number */}
                <div className="absolute -left-3 top-6 w-6 h-6 bg-white dark:bg-gray-800 border-2 border-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-500">
                    {index + 1}
                  </span>
                </div>

                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-3 top-16 w-0.5 h-8 bg-gray-300 dark:bg-gray-600" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-600 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full translate-y-12 -translate-x-12" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="text-center mb-8">
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${processSteps[activeStep].color} rounded-2xl mb-6`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {(() => {
                      const IconComponent = processSteps[activeStep].icon;
                      return <IconComponent className="w-10 h-10 text-white" />;
                    })()}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {processSteps[activeStep].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {processSteps[activeStep].details}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-blue-600" />
                    Key Deliverables:
                  </h4>
                  {processSteps[activeStep].deliverables.map((deliverable, idx) => (
                    <motion.div
                      key={deliverable}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{deliverable}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Timeline: {processSteps[activeStep].duration}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Step {activeStep + 1} of {processSteps.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Process Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { icon: Target, label: 'On-Time Delivery', value: '98%', description: 'Projects delivered on schedule', color: 'from-blue-500 to-cyan-500' },
            { icon: Users, label: 'Client Satisfaction', value: '4.9/5', description: 'Average client rating', color: 'from-purple-500 to-pink-500' },
            { icon: Zap, label: 'Success Rate', value: '100%', description: 'Project completion rate', color: 'from-green-500 to-blue-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};