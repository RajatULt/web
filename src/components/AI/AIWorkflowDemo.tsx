import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  MessageCircle, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  status: 'pending' | 'processing' | 'completed';
  duration: number;
  details: string[];
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 'data-input',
    title: 'Data Collection & Preprocessing',
    description: 'AI system intelligently collects and preprocesses data streams',
    icon: BarChart3,
    status: 'pending',
    duration: 2500,
    details: [
      'Real-time data ingestion from multiple sources',
      'Data cleaning and normalization',
      'Quality validation and error detection',
      'Structured data formatting for ML models'
    ]
  },
  {
    id: 'ai-analysis',
    title: 'Advanced Pattern Analysis',
    description: 'Machine learning algorithms identify complex patterns and insights',
    icon: Brain,
    status: 'pending',
    duration: 3500,
    details: [
      'Deep learning neural network processing',
      'Pattern recognition and anomaly detection',
      'Predictive modeling and forecasting',
      'Natural language processing for text data'
    ]
  },
  {
    id: 'automation',
    title: 'Intelligent Process Automation',
    description: 'Automated workflows trigger based on AI-driven insights',
    icon: Zap,
    status: 'pending',
    duration: 3000,
    details: [
      'Smart workflow orchestration',
      'Conditional logic and decision trees',
      'API integrations and system connections',
      'Real-time process optimization'
    ]
  },
  {
    id: 'response',
    title: 'Intelligent Response Generation',
    description: 'AI generates contextual responses and actionable recommendations',
    icon: MessageCircle,
    status: 'pending',
    duration: 2000,
    details: [
      'Contextual response generation',
      'Personalized recommendations',
      'Multi-channel communication',
      'Continuous learning and improvement'
    ]
  }
];

export const AIWorkflowDemo: React.FC = () => {
  const [steps, setSteps] = useState<WorkflowStep[]>(workflowSteps);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);

  const startWorkflow = () => {
    setIsRunning(true);
    setCurrentStep(0);
    setCompletedSteps(0);
    setProgress(0);
    setSteps(workflowSteps.map(step => ({ ...step, status: 'pending' })));
  };

  const pauseWorkflow = () => {
    setIsRunning(false);
  };

  const resetWorkflow = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setCompletedSteps(0);
    setProgress(0);
    setSteps(workflowSteps.map(step => ({ ...step, status: 'pending' })));
  };

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let stepTimer: NodeJS.Timeout;

    if (isRunning && currentStep < steps.length) {
      // Update current step to processing
      setSteps(prev => prev.map((step, index) => {
        if (index === currentStep) {
          return { ...step, status: 'processing' };
        }
        return step;
      }));

      const currentStepData = steps[currentStep];
      
      // Progress animation
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 100;
          }
          return prev + (100 / (currentStepData.duration / 50));
        });
      }, 50);

      // Step completion timer
      stepTimer = setTimeout(() => {
        setSteps(prev => prev.map((step, index) => {
          if (index === currentStep) {
            return { ...step, status: 'completed' };
          }
          return step;
        }));

        setCompletedSteps(prev => prev + 1);
        setProgress(0);

        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setIsRunning(false);
        }
      }, currentStepData.duration);
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(stepTimer);
    };
  }, [isRunning, currentStep, steps]);

  const getStepIcon = (step: WorkflowStep, index: number) => {
    if (step.status === 'completed') {
      return <CheckCircle className="w-8 h-8 text-white" />;
    }
    return <step.icon className="w-8 h-8 text-white" />;
  };

  const getStepColor = (step: WorkflowStep, index: number) => {
    if (step.status === 'completed') {
      return 'from-green-500 to-emerald-600';
    }
    if (step.status === 'processing') {
      return 'from-blue-500 to-purple-600';
    }
    return 'from-gray-400 to-gray-500';
  };

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-300">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            AI Workflow Demonstration
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Experience how our AI automation processes work in real-time with intelligent decision-making
          </p>
        </div>
        <div className="flex space-x-3">
          <motion.button
            onClick={startWorkflow}
            disabled={isRunning}
            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all ${
              isRunning 
                ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed text-gray-500' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
            }`}
            whileHover={!isRunning ? { scale: 1.05 } : {}}
            whileTap={!isRunning ? { scale: 0.95 } : {}}
          >
            <Play className="w-5 h-5 mr-2" />
            Start Demo
          </motion.button>
          <motion.button
            onClick={pauseWorkflow}
            disabled={!isRunning}
            className="flex items-center px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 hover:scale-105 transition-all disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed disabled:hover:scale-100"
            whileHover={isRunning ? { scale: 1.05 } : {}}
            whileTap={isRunning ? { scale: 0.95 } : {}}
          >
            <Pause className="w-5 h-5 mr-2" />
            Pause
          </motion.button>
          <motion.button
            onClick={resetWorkflow}
            className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-xl font-semibold hover:bg-gray-600 hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset
          </motion.button>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Workflow Progress
          </h4>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {completedSteps}/{steps.length} Steps Completed
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
          <motion.div
            className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            style={{ width: `${(completedSteps / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        {isRunning && currentStep < steps.length && (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Current: {steps[currentStep].title} ({Math.round(progress)}% complete)
          </div>
        )}
      </div>

      {/* Workflow Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
              step.status === 'processing'
                ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-lg'
                : step.status === 'completed'
                ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 shadow-md'
                : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            animate={step.status === 'processing' ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
            whileHover={{ scale: step.status === 'pending' ? 1.01 : 1 }}
          >
            <div className="flex items-start p-6">
              <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl mr-6 transition-all duration-300 bg-gradient-to-br ${getStepColor(step, index)} shadow-lg`}>
                {getStepIcon(step, index)}
                
                {step.status === 'processing' && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h5 className={`text-xl font-bold transition-colors ${
                    step.status === 'pending' 
                      ? 'text-gray-600 dark:text-gray-400' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {step.title}
                  </h5>
                  <div className="flex items-center space-x-2">
                    {step.status === 'processing' && (
                      <motion.div
                        className="flex space-x-1"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </motion.div>
                    )}
                    {step.status === 'completed' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center text-green-600 dark:text-green-400"
                      >
                        <CheckCircle className="w-5 h-5 mr-1" />
                        <span className="text-sm font-medium">Complete</span>
                      </motion.div>
                    )}
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {(step.duration / 1000).toFixed(1)}s
                    </div>
                  </div>
                </div>
                
                <p className={`text-base mb-4 transition-colors ${
                  step.status === 'pending' 
                    ? 'text-gray-500 dark:text-gray-500' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {step.description}
                </p>

                {/* Step Details */}
                <div className="grid md:grid-cols-2 gap-3">
                  {step.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      className={`flex items-start text-sm transition-colors ${
                        step.status === 'pending' 
                          ? 'text-gray-400 dark:text-gray-500' 
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: step.status !== 'pending' ? 1 : 0.6,
                        x: 0 
                      }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0 ${
                        step.status === 'completed' 
                          ? 'bg-green-500' 
                          : step.status === 'processing'
                          ? 'bg-blue-500'
                          : 'bg-gray-400'
                      }`} />
                      {detail}
                    </motion.div>
                  ))}
                </div>

                {/* Progress bar for current step */}
                {step.status === 'processing' && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {index < steps.length - 1 && (
                <div className="ml-6 flex items-center">
                  <ArrowRight className={`w-6 h-6 transition-colors ${
                    step.status === 'completed' 
                      ? 'text-green-500' 
                      : 'text-gray-300 dark:text-gray-600'
                  }`} />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Completion Message */}
      {completedSteps >= steps.length && !isRunning && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h4 className="text-xl font-bold text-green-800 dark:text-green-300 mb-1">
                  AI Workflow Completed Successfully!
                </h4>
                <p className="text-green-600 dark:text-green-400">
                  All processes executed flawlessly with intelligent automation and real-time optimization.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-green-700 dark:text-green-300">
              <div className="text-center">
                <TrendingUp className="w-6 h-6 mx-auto mb-1" />
                <div className="text-sm font-semibold">94% Efficiency</div>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-1" />
                <div className="text-sm font-semibold">100% Secure</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Performance Metrics */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Processing Speed', value: '2.3s', icon: Zap, color: 'from-blue-500 to-cyan-500' },
          { label: 'Accuracy Rate', value: '99.7%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
          { label: 'Cost Reduction', value: '40%', icon: BarChart3, color: 'from-purple-500 to-pink-500' },
          { label: 'Automation Level', value: '94%', icon: Brain, color: 'from-orange-500 to-red-500' }
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
          >
            <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${metric.color} rounded-lg mb-2`}>
              <metric.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {metric.value}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};