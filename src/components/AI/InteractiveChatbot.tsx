import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, MessageCircle, X } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  typing?: boolean;
}

const predefinedResponses = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    responses: [
      "Hello! I'm your AI assistant. How can I help you with automation and AI solutions today?",
      "Hi there! I'm here to help you explore our AI and automation services. What would you like to know?",
      "Greetings! I'm an AI-powered assistant ready to discuss how we can transform your business with intelligent automation."
    ]
  },
  {
    keywords: ['ai', 'artificial intelligence', 'machine learning'],
    responses: [
      "Our AI solutions include machine learning models, natural language processing, computer vision, and predictive analytics. We can develop custom AI systems tailored to your specific business needs.",
      "We specialize in cutting-edge AI technologies including deep learning, neural networks, and automated decision-making systems. Would you like to know more about a specific AI application?",
      "Our AI expertise covers everything from chatbots and virtual assistants to complex data analysis and pattern recognition systems."
    ]
  },
  {
    keywords: ['automation', 'automate', 'workflow'],
    responses: [
      "We offer intelligent process automation that can streamline your workflows, reduce manual tasks, and increase efficiency by up to 80%. Our solutions include RPA, workflow orchestration, and smart task routing.",
      "Our automation services can transform repetitive tasks into intelligent, self-managing processes. We integrate AI to make your automation smarter and more adaptive.",
      "From simple task automation to complex business process optimization, we create intelligent systems that learn and improve over time."
    ]
  },
  {
    keywords: ['price', 'cost', 'pricing', 'budget'],
    responses: [
      "Our pricing is customized based on your specific needs and project scope. We offer flexible packages starting from $5,000 for basic automation to enterprise solutions. Would you like to schedule a consultation for a detailed quote?",
      "We provide transparent, value-based pricing. Most AI automation projects range from $10,000 to $100,000+ depending on complexity. Let's discuss your requirements to provide an accurate estimate.",
      "Investment in AI and automation typically pays for itself within 6-12 months through efficiency gains. We'd be happy to provide a custom quote based on your specific use case."
    ]
  },
  {
    keywords: ['demo', 'example', 'showcase', 'see'],
    responses: [
      "I'd love to show you our AI capabilities in action! We can schedule a personalized demo where you'll see real-time automation workflows, AI decision-making, and intelligent data processing.",
      "Our interactive demos showcase everything from chatbot conversations to predictive analytics dashboards. Would you like to see a specific type of AI solution in action?",
      "We have live demonstrations of our AI systems processing real data, making predictions, and automating complex workflows. When would be a good time for a demo?"
    ]
  }
];

const quickActions = [
  "Tell me about AI solutions",
  "How does automation work?",
  "Show me pricing options",
  "Schedule a demo",
  "What industries do you serve?"
];

export const InteractiveChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant powered by advanced natural language processing. I can help you learn about our AI and automation solutions. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const responseSet of predefinedResponses) {
      if (responseSet.keywords.some(keyword => lowerMessage.includes(keyword))) {
        const randomIndex = Math.floor(Math.random() * responseSet.responses.length);
        return responseSet.responses[randomIndex];
      }
    }

    // Default responses for unmatched queries
    const defaultResponses = [
      "That's an interesting question! Our AI and automation solutions are highly customizable. Would you like to schedule a consultation to discuss your specific needs?",
      "I'd be happy to connect you with one of our AI specialists who can provide detailed information about that topic. Shall I arrange a call?",
      "Our team has extensive experience with various AI and automation challenges. Let me get you in touch with an expert who can address your specific requirements.",
      "That's a great question about AI and automation! I'd recommend speaking with our technical team for a comprehensive answer. Would you like me to schedule a consultation?"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async (text: string = inputText) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(text),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (isMinimized) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={() => setIsMinimized(false)}
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-8 h-8" />
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="fixed bottom-6 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <p className="text-xs opacity-90">Powered by WebStitch AI</p>
            </div>
          </div>
          <button
            onClick={() => setIsMinimized(true)}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${
                message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
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
                <div className={`px-4 py-2 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
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
              <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-2xl">
                <div className="flex space-x-1">
                  <motion.div
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-gray-400 rounded-full"
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

      {/* Quick Actions */}
      <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2 mb-2">
          {quickActions.slice(0, 2).map((action, index) => (
            <motion.button
              key={action}
              onClick={() => handleSendMessage(action)}
              className="text-xs px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {action}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about AI and automation..."
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          />
          <motion.button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim() || isTyping}
            className="px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};