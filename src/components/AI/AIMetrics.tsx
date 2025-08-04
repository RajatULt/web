import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity, Zap, Brain, Target } from 'lucide-react';

interface Metric {
  id: string;
  label: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  icon: React.ComponentType<any>;
  color: string;
}

const initialMetrics: Metric[] = [
  {
    id: 'automation-efficiency',
    label: 'Automation Efficiency',
    value: 0,
    target: 94.5,
    unit: '%',
    trend: 'up',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'ai-accuracy',
    label: 'AI Model Accuracy',
    value: 0,
    target: 97.8,
    unit: '%',
    trend: 'up',
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'processing-speed',
    label: 'Processing Speed',
    value: 0,
    target: 2.3,
    unit: 's',
    trend: 'down',
    icon: Activity,
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 'goal-achievement',
    label: 'Goal Achievement',
    value: 0,
    target: 89.2,
    unit: '%',
    trend: 'up',
    icon: Target,
    color: 'from-orange-500 to-red-500'
  }
];

export const AIMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<Metric[]>(initialMetrics);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateMetrics = () => {
    setIsAnimating(true);
    setMetrics(prev => prev.map(metric => ({ ...metric, value: 0 })));

    metrics.forEach((metric, index) => {
      setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = metric.target / steps;
        let currentValue = 0;

        const interval = setInterval(() => {
          currentValue += increment;
          if (currentValue >= metric.target) {
            currentValue = metric.target;
            clearInterval(interval);
            if (index === metrics.length - 1) {
              setIsAnimating(false);
            }
          }

          setMetrics(prev => prev.map(m => 
            m.id === metric.id ? { ...m, value: currentValue } : m
          ));
        }, duration / steps);
      }, index * 200);
    });
  };

  useEffect(() => {
    animateMetrics();
  }, []);

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-300">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            AI Performance Metrics
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Real-time monitoring of AI system performance and efficiency
          </p>
        </div>
        <motion.button
          onClick={animateMetrics}
          disabled={isAnimating}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            isAnimating 
              ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
          }`}
          whileHover={!isAnimating ? { scale: 1.05 } : {}}
          whileTap={!isAnimating ? { scale: 0.95 } : {}}
        >
          {isAnimating ? 'Updating...' : 'Refresh Metrics'}
        </motion.button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
          
          return (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center text-sm font-semibold ${
                    metric.trend === 'up' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    <TrendIcon className="w-4 h-4 mr-1" />
                    {metric.trend === 'up' ? '+' : '-'}
                    {Math.abs(Math.random() * 5 + 1).toFixed(1)}%
                  </div>
                </div>

                <div className="mb-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {metric.label}
                  </h4>
                  <div className="flex items-baseline">
                    <motion.span
                      className="text-3xl font-bold text-gray-900 dark:text-white"
                      key={metric.value}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {metric.value.toFixed(1)}
                    </motion.span>
                    <span className="text-lg text-gray-500 dark:text-gray-400 ml-1">
                      {metric.unit}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${metric.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(metric.value / metric.target) * 100}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Target: {metric.target}{metric.unit}
                </div>

                {/* Animated Background Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-5`}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.05, 0.1, 0.05]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {metrics.reduce((acc, m) => acc + m.value, 0).toFixed(0)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Performance Score
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
              {metrics.filter(m => m.value >= m.target * 0.9).length}/{metrics.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Metrics Above 90% Target
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
              {((metrics.reduce((acc, m) => acc + (m.value / m.target), 0) / metrics.length) * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Overall Efficiency
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};