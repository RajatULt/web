import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  BarChart3, 
  MessageCircle, 
  Play, 
  Pause,
  TrendingUp,
  CheckCircle,
  Clock,
  Target,
  ArrowRight
} from 'lucide-react';

interface AIFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  metric: string;
  value: string;
  color: string;
  details: string[];
}

const aiFeatures: AIFeature[] = [
  {
    id: 'automation',
    title: 'Intelligent Process Automation',
    description: 'AI-driven workflows that adapt and optimize automatically',
    icon: Zap,
    metric: 'Efficiency Gain',
    value: '85%',
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Automated decision making',
      'Real-time process optimization',
      'Intelligent task routing',
      'Predictive maintenance'
    ]
  },
  {
    id: 'analytics',
    title: 'Predictive Analytics Engine',
    description: 'Advanced ML models for accurate business forecasting',
    icon: BarChart3,
    metric: 'Prediction Accuracy',
    value: '99.7%',
    color: 'from-purple-500 to-pink-500',
    details: [
      'Market trend analysis',
      'Customer behavior prediction',
      'Risk assessment models',
      'Revenue forecasting'
    ]
  },
  {
    id: 'chatbot',
    title: 'Conversational AI Assistants',
    description: 'Natural language processing for human-like interactions',
    icon: MessageCircle,
    metric: 'Query Resolution',
    value: '96%',
    color: 'from-green-500 to-blue-500',
    details: [
      'Natural language understanding',
      'Context-aware responses',
      'Multi-language support',
      'Sentiment analysis'
    ]
  },
  {
    id: 'learning',
    title: 'Adaptive Machine Learning',
    description: 'Self-improving AI systems that evolve with your data',
    icon: Brain,
    metric: 'Learning Speed',
    value: '340%',
    color: 'from-orange-500 to-red-500',
    details: [
      'Continuous model training',
      'Automated feature engineering',
      'Performance optimization',
      'Anomaly detection'
    ]
  }
];

export const CompactAIShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % aiFeatures.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentFeature = aiFeatures[activeFeature];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Enterprise AI Solutions That Deliver Results
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience next-generation artificial intelligence and automation that revolutionizes how businesses operate, with proven ROI and measurable results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive AI Demo */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              {/* Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
              
              <div className="relative z-10">
                {/* Demo Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Live AI Intelligence Demo
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Real-time AI processing and decision making
                    </p>
                  </div>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4 mr-2" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Play
                      </>
                    )}
                  </button>
                </div>

                {/* Feature Display */}
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-8"
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${currentFeature.color} rounded-2xl mb-6 relative`}
                    animate={isPlaying ? { 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ 
                      rotate: { duration: 4, ease: "linear", repeat: Infinity },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <currentFeature.icon className="w-12 h-12 text-white" />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {currentFeature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                    {currentFeature.description}
                  </p>
                  
                  {/* Metric Display */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-6">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {currentFeature.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">
                      {currentFeature.metric}
                    </div>
                  </div>

                  {/* Feature Details */}
                  <div className="grid grid-cols-2 gap-3">
                    {currentFeature.details.map((detail, idx) => (
                      <motion.div
                        key={detail}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-3">
                  {aiFeatures.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeFeature
                          ? 'bg-blue-500 w-8'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Features Grid */}
          <div className="grid grid-cols-1 gap-6">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer group ${
                  index === activeFeature
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 hover:shadow-md'
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {feature.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {feature.metric}
                      </span>
                      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        {feature.value}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Implement AI in Your Business?</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-8 h-8 text-blue-200" />
              <div>
                <div className="text-3xl font-bold">6-12 Weeks</div>
                <div className="text-blue-200">Implementation Time</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Target className="w-8 h-8 text-purple-200" />
              <div>
                <div className="text-3xl font-bold">450% ROI</div>
                <div className="text-purple-200">Average Return</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-8 h-8 text-green-200" />
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-green-200">Success Rate</div>
              </div>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <Brain className="w-6 h-6 mr-3" />
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};