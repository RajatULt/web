import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ResponsiveHero } from '../components/Responsive/ResponsiveHero';
import { FluidGrid } from '../components/Responsive/FluidGrid';
import { AdaptiveImage } from '../components/Responsive/AdaptiveImage';
import { GestureHandler } from '../components/Responsive/GestureHandler';
import { PerformanceMonitor } from '../components/Responsive/PerformanceMonitor';
import { MetaTags } from '../components/SEO/MetaTags';

const demoCards = [
  {
    id: 1,
    title: 'Fluid Typography',
    description: 'Text that scales perfectly across all devices using clamp() and viewport units.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Container Queries',
    description: 'Components that adapt based on their container size, not just viewport.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Gesture Recognition',
    description: 'Touch gestures, haptic feedback, and intuitive mobile interactions.',
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 4,
    title: 'Performance Optimization',
    description: 'Automatic performance adjustments based on device capabilities.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'AI-Powered Images',
    description: 'Smart image optimization and delivery based on device and network.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 6,
    title: 'Adaptive Layouts',
    description: 'Layouts that intelligently reconfigure based on content and context.',
    image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-teal-500 to-green-500'
  }
];

export const ResponsiveDemo: React.FC = () => {
  const [showDebug, setShowDebug] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardSwipe = (cardId: number, direction: string) => {
    console.log(`Card ${cardId} swiped ${direction}`);
    // Handle swipe actions
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <MetaTags
        title="Responsive Design Demo - Ultra-Modern Web Experience"
        description="Experience cutting-edge responsive design with fluid layouts, gesture recognition, and AI-powered optimizations."
        keywords="responsive design, mobile-first, fluid typography, container queries, performance optimization"
        url="/responsive-demo"
      />

      <PerformanceMonitor 
        showDebugInfo={showDebug}
        onPerformanceChange={(metrics) => {
          // Auto-adjust based on performance
          if (metrics.fps < 30) {
            document.documentElement.classList.add('low-performance');
          }
        }}
      />

      {/* Hero Section */}
      <ResponsiveHero
        title="Ultra-Responsive Web Experience"
        subtitle="Witness the future of web design with fluid intelligence, zero-compromise performance, and context-aware layouts that adapt to any device."
        backgroundImage="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1920"
        ctaText="Explore Features"
        onCtaClick={() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="fluid-heading text-gray-900 dark:text-white mb-6">
              Adaptive Features
            </h2>
            <p className="fluid-text text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Every component intelligently adapts to device capabilities, network conditions, and user preferences.
            </p>
          </motion.div>

          <FluidGrid minItemWidth={320} maxItemWidth={400} gap={24} enableMasonry>
            {demoCards.map((card, index) => (
              <GestureHandler
                key={card.id}
                onSwipeLeft={() => handleCardSwipe(card.id, 'left')}
                onSwipeRight={() => handleCardSwipe(card.id, 'right')}
                enableHaptics
              >
                <motion.div
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div className="relative">
                      <AdaptiveImage
                        src={card.image}
                        alt={card.title}
                        className="w-full h-48"
                        aspectRatio={16/9}
                        enableAI
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {card.description}
                      </p>
                      
                      {selectedCard === card.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                        >
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            This feature demonstrates advanced responsive design principles with real-time adaptation.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </GestureHandler>
            ))}
          </FluidGrid>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="fluid-heading text-gray-900 dark:text-white mb-6">
              Performance Monitoring
            </h2>
            <p className="fluid-text text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Real-time performance monitoring with automatic optimizations based on device capabilities.
            </p>
            
            <motion.button
              onClick={() => setShowDebug(!showDebug)}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showDebug ? 'Hide' : 'Show'} Debug Info
            </motion.button>
          </motion.div>

          {/* Performance Metrics Display */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Adaptive Layouts', value: '100%', description: 'Components automatically adjust' },
              { label: 'Performance Score', value: '98/100', description: 'Optimized for all devices' },
              { label: 'Load Time', value: '<1s', description: 'Lightning-fast delivery' }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {metric.label}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};