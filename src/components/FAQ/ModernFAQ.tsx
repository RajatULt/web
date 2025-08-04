import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, Clock, Shield, Zap, Brain, Target, Award, ArrowRight } from 'lucide-react';
import { DollarSign, Smartphone, Settings } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How quickly can you implement AI automation in our business?',
    answer: 'Most AI automation projects can be implemented within 4-12 weeks, depending on complexity. We start with a comprehensive analysis of your current processes, then develop and deploy custom AI solutions. Simple automation can be live within 2-3 weeks, while complex enterprise solutions may take 8-16 weeks. Our agile methodology ensures you see results quickly with iterative deployments.',
    category: 'Implementation'
  },
  {
    id: '2',
    question: 'What kind of ROI can we expect from AI automation?',
    answer: 'Our clients typically see 300-500% ROI within the first year. This comes from 85% reduction in manual processing time, 94% error reduction, and significant cost savings. Enterprise clients often save ₹50 lakhs to ₹2 crores annually. We provide detailed ROI projections during our consultation and track performance metrics post-implementation.',
    category: 'ROI'
  },
  {
    id: '3',
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and dedicated support team. Our standard package includes 6 months of support, with extended options up to 3 years. We also provide training, documentation, and knowledge transfer to your team.',
    category: 'Support'
  },
  {
    id: '4',
    question: 'Can AI automation integrate with our existing systems?',
    answer: 'Absolutely. Our AI solutions are designed to seamlessly integrate with existing ERP, CRM, databases, and third-party applications. We use APIs, webhooks, and custom connectors to ensure smooth data flow and minimal disruption to your current operations. We support 200+ popular business applications and can create custom integrations.',
    category: 'Integration'
  },
  {
    id: '5',
    question: 'How secure are your AI solutions?',
    answer: 'Security is our top priority. We implement enterprise-grade encryption, secure data handling, compliance with GDPR/CCPA/SOC2, regular security audits, and follow industry best practices. All data processing can be done on-premises or in secure cloud environments. We maintain ISO 27001 certification and conduct quarterly security assessments.',
    category: 'Security'
  },
  {
    id: '6',
    question: 'What industries do you specialize in?',
    answer: 'We work across multiple industries including finance, healthcare, manufacturing, retail, logistics, education, and professional services. Our AI solutions are customized for each industry\'s specific requirements, compliance needs, and operational challenges. We have deep expertise in fintech, healthtech, edtech, and e-commerce sectors.',
    category: 'Industries'
  },
  {
    id: '7',
    question: 'How do you ensure AI accuracy and reliability?',
    answer: 'We achieve 99.7% accuracy through rigorous testing, continuous learning algorithms, human-in-the-loop validation, and comprehensive quality assurance. Our AI models are trained on high-quality data and continuously monitored for performance optimization. We use A/B testing, model versioning, and automated monitoring to maintain peak performance.',
    category: 'Quality'
  },
  {
    id: '8',
    question: 'What is your pricing structure for different services?',
    answer: 'Our pricing is transparent and value-based. AI solutions start from ₹1.5 lakhs, web development from ₹75,000, mobile apps from ₹2 lakhs, and automation projects from ₹1.2 lakhs. Enterprise solutions range from ₹5-50 lakhs depending on scope. We offer flexible payment terms and provide detailed cost breakdowns upfront.',
    category: 'Pricing'
  },
  {
    id: '9',
    question: 'Do you offer mobile app development for both iOS and Android?',
    answer: 'Yes, we develop native iOS and Android apps as well as cross-platform solutions using React Native and Flutter. Our mobile apps include AI features, real-time synchronization, push notifications, and seamless backend integration. We handle the entire process from design to app store deployment.',
    category: 'Mobile'
  },
  {
    id: '10',
    question: 'How do you handle project management and communication?',
    answer: 'We use agile methodology with weekly sprints and regular client updates. You\'ll have access to a dedicated project manager, real-time project dashboard, and scheduled review meetings. We use tools like Slack, Jira, and Figma for seamless collaboration and transparency throughout the development process.',
    category: 'Process'
  }
];

export const ModernFAQ: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const categoryIcons = {
    Implementation: Clock,
    ROI: Target,
    Support: MessageCircle,
    Integration: Zap,
    Security: Shield,
    Industries: Award,
    Quality: Brain,
    Pricing: DollarSign,
    Mobile: Smartphone,
    Process: Settings
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our AI solutions and implementation process
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const IconComponent = categoryIcons[faq.category as keyof typeof categoryIcons] || MessageCircle;
            
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                >
                  <div className="flex items-center flex-1">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeItem === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4"
                  >
                    {activeItem === faq.id ? (
                      <Minus className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeItem === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-16">
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our AI experts are here to help you understand how intelligent automation can transform your business operations.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};