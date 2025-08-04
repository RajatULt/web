import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, MessageCircle, X, ArrowRight, HelpCircle, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  typing?: boolean;
}

interface QuickReply {
  id: string;
  text: string;
  action?: () => void;
}

const predefinedResponses = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'start'],
    responses: [
      "Hello! I'm your AI assistant powered by advanced machine learning. I can help you explore our AI solutions, automation services, and answer questions about how we can transform your business. What would you like to know?",
      "Hi there! I'm here to guide you through our comprehensive AI and automation services. Whether you're interested in machine learning, process automation, or intelligent chatbots, I'm here to help!",
      "Greetings! I'm an AI-powered assistant ready to discuss how WebStitch can revolutionize your business with cutting-edge technology. How can I assist you today?"
    ],
    quickReplies: [
      { id: 'services', text: 'Show me your services' },
      { id: 'ai', text: 'Tell me about AI solutions' },
      { id: 'pricing', text: 'What are your prices?' }
    ]
  },
  {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'neural', 'deep learning'],
    responses: [
      "Our AI solutions are comprehensive and cutting-edge! We offer custom machine learning models, natural language processing, computer vision, predictive analytics, and intelligent automation. Our AI systems achieve 99.7% accuracy and can reduce operational costs by up to 85%. Which AI application interests you most?",
      "We specialize in advanced AI technologies including deep learning neural networks, automated decision-making systems, and real-time data processing. Our AI solutions have helped clients achieve 340% ROI and 94% error reduction. Would you like to see a demo?",
      "Our AI expertise covers everything from intelligent chatbots and virtual assistants to complex predictive analytics and computer vision systems. We've successfully deployed AI solutions across finance, healthcare, manufacturing, and retail sectors."
    ],
    quickReplies: [
      { id: 'demo', text: 'Show me a demo' },
      { id: 'industries', text: 'Which industries?' },
      { id: 'contact', text: 'Schedule consultation' }
    ]
  },
  {
    keywords: ['automation', 'automate', 'workflow', 'process', 'rpa', 'robotic'],
    responses: [
      "Our intelligent process automation can transform your business operations! We offer RPA (Robotic Process Automation), workflow orchestration, document processing, and smart task routing. Our automation solutions typically save 85% of manual processing time and achieve 94% error reduction.",
      "We create intelligent automation systems that learn and adapt over time. From simple task automation to complex business process optimization, our solutions integrate seamlessly with your existing systems and can handle thousands of transactions per hour.",
      "Our automation services include workflow orchestration, API integrations, intelligent document processing, and performance monitoring. Most clients see ROI within 4-6 months and achieve 200-300% efficiency improvements."
    ],
    quickReplies: [
      { id: 'workflow', text: 'Show workflow demo' },
      { id: 'roi', text: 'Calculate ROI' },
      { id: 'integration', text: 'System integration' }
    ]
  },
  {
    keywords: ['price', 'cost', 'pricing', 'budget', 'quote', 'estimate'],
    responses: [
      "Our pricing is transparent and value-based. AI automation projects typically range from ₹50,000 for basic solutions to ₹5,00,000+ for enterprise systems. Most clients achieve ROI within 6-12 months through efficiency gains. Would you like a custom quote based on your specific needs?",
      "We offer flexible pricing packages: Basic automation starts at ₹25,000, Advanced AI solutions from ₹1,00,000, and Enterprise systems from ₹2,50,000+. All projects include implementation, training, and 6-month support. Shall I connect you with our team for a detailed quote?",
      "Investment in our AI and automation solutions typically pays for itself within 4-8 months. We provide transparent pricing with no hidden costs. Our interactive pricing calculator can give you an instant estimate, or I can schedule a consultation for a detailed proposal."
    ],
    quickReplies: [
      { id: 'calculator', text: 'Use pricing calculator' },
      { id: 'consultation', text: 'Schedule consultation' },
      { id: 'packages', text: 'View packages' }
    ]
  },
  {
    keywords: ['demo', 'example', 'showcase', 'see', 'show', 'demonstration'],
    responses: [
      "I'd love to show you our AI capabilities in action! We have interactive demos showcasing real-time automation workflows, AI decision-making, intelligent data processing, and chatbot conversations. Our demos show actual performance metrics and ROI calculations.",
      "Our live demonstrations include AI-powered analytics dashboards, automated workflow processing, intelligent document extraction, and predictive modeling in action. You can see how our systems process real data and generate insights in real-time.",
      "We offer personalized demos tailored to your industry and use case. Our demonstrations show actual performance improvements: 85% time savings, 94% error reduction, and 340% ROI. When would be a good time for a live demo session?"
    ],
    quickReplies: [
      { id: 'live-demo', text: 'Schedule live demo' },
      { id: 'industry-demo', text: 'Industry-specific demo' },
      { id: 'contact', text: 'Contact sales team' }
    ]
  },
  {
    keywords: ['contact', 'talk', 'speak', 'consultation', 'meeting', 'call', 'discuss'],
    responses: [
      "Perfect! I'll connect you with our expert team for a detailed consultation. Our specialists can provide personalized solutions, answer technical questions, and create a custom proposal for your needs. Redirecting you to our contact page now...",
      "Excellent choice! Our team of AI and automation experts is ready to discuss your specific requirements. We offer free consultations where we analyze your current processes and recommend optimal solutions. Taking you to our contact page...",
      "Great! Let's get you connected with our specialists who can provide detailed technical insights and custom solutions. Our team typically responds within 2 hours and can schedule demos or consultations at your convenience. Redirecting now..."
    ],
    quickReplies: []
  },
  {
    keywords: ['help', 'support', 'assistance', 'question'],
    responses: [
      "I'm here to help! I can answer questions about our AI solutions, automation services, pricing, implementation process, or technical capabilities. What specific information would you like to know?",
      "Absolutely! I can provide detailed information about our services, share case studies, explain our technology stack, or help you understand how our solutions can benefit your business. What would you like to explore?",
      "I'm happy to assist! Whether you need technical details, pricing information, implementation timelines, or want to see examples of our work, I'm here to help. What can I clarify for you?"
    ],
    quickReplies: [
      { id: 'services', text: 'Explain services' },
      { id: 'process', text: 'Implementation process' },
      { id: 'support', text: 'Ongoing support' }
    ]
  }
];

const quickActions = [
  { id: 'ai-solutions', text: "AI Solutions", action: null },
  { id: 'automation', text: "Process Automation", action: null },
  { id: 'pricing', text: "Pricing Calculator", action: null },
  { id: 'demo', text: "Schedule Demo", action: null },
  { id: 'contact', text: "Contact Team", action: null },
  { id: 'portfolio', text: "View Portfolio", action: null }
];

export const InteractiveChatbot: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant powered by advanced natural language processing. I can help you explore our AI solutions, automation services, and answer any questions about transforming your business with intelligent technology. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [currentQuickReplies, setCurrentQuickReplies] = useState<QuickReply[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout>();
  const initialTimeoutRef = useRef<NodeJS.Timeout>();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show chatbot after 15 seconds
  useEffect(() => {
    initialTimeoutRef.current = setTimeout(() => {
      if (!hasUserInteracted) {
        setIsVisible(true);
      }
    }, 15000);

    return () => {
      if (initialTimeoutRef.current) {
        clearTimeout(initialTimeoutRef.current);
      }
    };
  }, [hasUserInteracted]);

  // Auto-close after 5 seconds of inactivity
  useEffect(() => {
    if (isVisible && !hasUserInteracted) {
      inactivityTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        setIsMinimized(true);
      }, 5000);
    }

    return () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [isVisible, hasUserInteracted]);

  const handleUserInteraction = () => {
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
      if (initialTimeoutRef.current) {
        clearTimeout(initialTimeoutRef.current);
      }
    }
  };

  const generateResponse = (userMessage: string): { response: string; quickReplies: QuickReply[] } => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for contact/consultation keywords first
    if (lowerMessage.includes('contact') || lowerMessage.includes('consultation') || 
        lowerMessage.includes('talk') || lowerMessage.includes('speak') || 
        lowerMessage.includes('meeting') || lowerMessage.includes('call') ||
        lowerMessage.includes('schedule') || lowerMessage.includes('discuss')) {
      setTimeout(() => {
        navigate('/contact');
      }, 2000);
      return {
        response: "Excellent! I'll connect you with our expert team for a personalized consultation. Our specialists will analyze your specific needs and provide tailored solutions. Redirecting you to our contact page now...",
        quickReplies: []
      };
    }
    
    for (const responseSet of predefinedResponses) {
      if (responseSet.keywords.some(keyword => lowerMessage.includes(keyword))) {
        const randomIndex = Math.floor(Math.random() * responseSet.responses.length);
        return {
          response: responseSet.responses[randomIndex],
          quickReplies: responseSet.quickReplies || []
        };
      }
    }

    // Default response for unmatched queries - redirect to contact
    setTimeout(() => {
      navigate('/contact');
    }, 2500);
    
    return {
      response: "That's an excellent question! Let me connect you with one of our specialists who can provide detailed insights and custom solutions for your specific needs. I'm redirecting you to our contact page now!",
      quickReplies: [
        { id: 'urgent', text: 'Urgent inquiry', action: () => navigate('/contact') },
        { id: 'general', text: 'General question', action: () => navigate('/contact') }
      ]
    };
  };

  const handleSendMessage = async (text: string = inputText) => {
    if (!text.trim()) return;

    handleUserInteraction();

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setCurrentQuickReplies([]);

    // Simulate AI processing time with realistic delay
    const processingTime = 1200 + Math.random() * 1800;
    
    setTimeout(() => {
      const { response, quickReplies } = generateResponse(text);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setCurrentQuickReplies(quickReplies);
      setIsTyping(false);
    }, processingTime);
  };

  const handleQuickReply = (reply: QuickReply) => {
    if (reply.action) {
      reply.action();
    } else {
      handleSendMessage(reply.text);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleOpen = () => {
    setIsMinimized(false);
    setIsVisible(true);
    handleUserInteraction();
  };

  const handleClose = () => {
    setIsVisible(false);
    setIsMinimized(true);
  };

  if (isMinimized || !isVisible) {
    return (
      <AnimatePresence>
        {isMinimized && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              onClick={handleOpen}
              className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageCircle className="w-8 h-8" />
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xs text-white font-bold">!</span>
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col overflow-hidden"
        >
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <motion.div 
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Bot className="w-6 h-6" />
                  </motion.div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <div className="flex items-center text-xs opacity-90">
                    <Sparkles className="w-3 h-3 mr-1" />
                    <span>Powered by WebStitch AI</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[85%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>
                    <div className={`px-4 py-3 rounded-2xl shadow-sm ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white dark:bg-gray-800 px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-600">
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-purple-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {currentQuickReplies.length > 0 && (
            <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {currentQuickReplies.map((reply) => (
                  <motion.button
                    key={reply.id}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs px-3 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors border border-blue-200 dark:border-blue-800"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {reply.text}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2 mb-2">
              {quickActions.slice(0, 3).map((action) => (
                <motion.button
                  key={action.id}
                  onClick={() => {
                    handleUserInteraction();
                    handleSendMessage(action.text);
                  }}
                  className="text-xs px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 rounded-full hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40 transition-all border border-blue-200 dark:border-blue-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {action.text}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Enhanced Input */}
          <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                  handleUserInteraction();
                }}
                onKeyPress={handleKeyPress}
                onFocus={handleUserInteraction}
                placeholder="Ask about AI, automation, pricing..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                maxLength={500}
              />
              <motion.button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim() || isTyping}
                className="px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isTyping && inputText.trim() ? { scale: 1.05 } : {}}
                whileTap={!isTyping && inputText.trim() ? { scale: 0.95 } : {}}
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
              <span>Powered by AI • Instant responses</span>
              <span>{inputText.length}/500</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};