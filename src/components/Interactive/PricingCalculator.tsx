import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Download, Check, Zap, Star, ArrowRight } from 'lucide-react';

interface PricingOption {
  id: string;
  name: string;
  basePrice: number;
  features: string[];
  multiplier: number;
}

interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

const services: PricingOption[] = [
  {
    id: 'ai-solution',
    name: 'AI Solution',
    basePrice: 50000,
    features: ['Custom AI Model', 'Data Processing', 'API Integration', '6 Months Support'],
    multiplier: 1.5
  },
  {
    id: 'mobile-app',
    name: 'Mobile App',
    basePrice: 80000,
    features: ['iOS & Android', 'Custom Design', 'Backend Integration', '1 Year Support'],
    multiplier: 1.2
  },
  {
    id: 'website',
    name: 'Website Development',
    basePrice: 25000,
    features: ['Responsive Design', 'CMS Integration', 'SEO Optimization', '6 Months Support'],
    multiplier: 1.0
  }
];

const addOns: AddOn[] = [
  { id: 'analytics', name: 'Advanced Analytics', price: 15000, description: 'Real-time data insights' },
  { id: 'maintenance', name: 'Extended Maintenance', price: 20000, description: '2 years additional support' },
  { id: 'training', name: 'Team Training', price: 10000, description: 'Comprehensive team onboarding' },
  { id: 'security', name: 'Security Audit', price: 12000, description: 'Complete security assessment' }
];

const complexityLevels = [
  { id: 'basic', name: 'Basic', multiplier: 1.0, description: 'Simple functionality' },
  { id: 'standard', name: 'Standard', multiplier: 1.5, description: 'Moderate complexity' },
  { id: 'advanced', name: 'Advanced', multiplier: 2.0, description: 'Complex features' },
  { id: 'enterprise', name: 'Enterprise', multiplier: 3.0, description: 'Full-scale solution' }
];

export const PricingCalculator: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [complexity, setComplexity] = useState<string>('standard');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<number>(3);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showProposal, setShowProposal] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    calculatePrice();
  }, [selectedService, complexity, selectedAddOns, timeline]);

  const calculatePrice = () => {
    if (!selectedService) {
      setTotalPrice(0);
      return;
    }

    const service = services.find(s => s.id === selectedService);
    if (!service) return;

    const complexityMultiplier = complexityLevels.find(c => c.id === complexity)?.multiplier || 1;
    const timelineMultiplier = timeline <= 2 ? 1.3 : timeline >= 6 ? 0.9 : 1.0;
    
    let basePrice = service.basePrice * complexityMultiplier * timelineMultiplier;
    
    const addOnPrice = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);

    setTotalPrice(basePrice + addOnPrice);
  };

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const generateProposal = async () => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    setShowProposal(true);
  };

  const downloadProposal = () => {
    // Create a simple PDF-like content
    const proposalContent = `
WebStitch Project Proposal

Service: ${services.find(s => s.id === selectedService)?.name}
Complexity: ${complexityLevels.find(c => c.id === complexity)?.name}
Timeline: ${timeline} months
Add-ons: ${selectedAddOns.map(id => addOns.find(a => a.id === id)?.name).join(', ')}

Total Investment: ₹${totalPrice.toLocaleString()}

This proposal is valid for 30 days.
Contact us at webstitchh@gmail.com for more details.
    `;

    const blob = new Blob([proposalContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'webstitch-proposal.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
      <div className="flex items-center mb-8">
        <Calculator className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
          Interactive Pricing Calculator
        </h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <div className="space-y-6">
          {/* Service Selection */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Select Service
            </label>
            <div className="grid gap-3">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedService === service.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-blue-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="font-semibold text-gray-900 dark:text-white mb-2">
                    {service.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Starting from ₹{service.basePrice.toLocaleString()}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Complexity Level */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Project Complexity
            </label>
            <div className="grid grid-cols-2 gap-3">
              {complexityLevels.map((level) => (
                <motion.button
                  key={level.id}
                  onClick={() => setComplexity(level.id)}
                  className={`p-3 rounded-lg border-2 transition-all text-center ${
                    complexity === level.id
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-purple-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {level.name}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {level.description}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Timeline: {timeline} months
            </label>
            <input
              type="range"
              min="1"
              max="12"
              value={timeline}
              onChange={(e) => setTimeline(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
              <span>1 month</span>
              <span>12 months</span>
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Add-ons
            </label>
            <div className="space-y-3">
              {addOns.map((addOn) => (
                <motion.div
                  key={addOn.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedAddOns.includes(addOn.id)
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-green-300'
                  }`}
                  onClick={() => toggleAddOn(addOn.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {addOn.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {addOn.description}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white mr-3">
                        ₹{addOn.price.toLocaleString()}
                      </span>
                      {selectedAddOns.includes(addOn.id) && (
                        <Check className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Panel */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Project Summary
          </h4>

          {selectedService ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                <span className="text-gray-600 dark:text-gray-400">Service:</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {services.find(s => s.id === selectedService)?.name}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                <span className="text-gray-600 dark:text-gray-400">Complexity:</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {complexityLevels.find(c => c.id === complexity)?.name}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-600">
                <span className="text-gray-600 dark:text-gray-400">Timeline:</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {timeline} months
                </span>
              </div>

              {selectedAddOns.length > 0 && (
                <div className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="text-gray-600 dark:text-gray-400 block mb-2">Add-ons:</span>
                  {selectedAddOns.map(addOnId => {
                    const addOn = addOns.find(a => a.id === addOnId);
                    return (
                      <div key={addOnId} className="flex justify-between items-center ml-4">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {addOn?.name}
                        </span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          ₹{addOn?.price.toLocaleString()}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              <motion.div
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Total Investment:</span>
                  <span className="text-3xl font-bold">
                    ₹{totalPrice.toLocaleString()}
                  </span>
                </div>
              </motion.div>

              <div className="space-y-3 mt-6">
                <motion.button
                  onClick={generateProposal}
                  disabled={isGenerating}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Generating Proposal...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Generate Proposal
                    </div>
                  )}
                </motion.button>

                {showProposal && (
                  <motion.button
                    onClick={downloadProposal}
                    className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download Proposal
                    </div>
                  </motion.button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                Select a service to see pricing details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};