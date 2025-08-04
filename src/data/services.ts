export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  technologies: string[];
  image: string;
  featured: boolean;
  aiPowered?: boolean;
  automationLevel?: 'Basic' | 'Advanced' | 'Enterprise';
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Machine Learning',
    description: 'Transform your business with intelligent AI systems that learn, adapt, and optimize operations automatically. From predictive analytics to natural language processing.',
    icon: 'Brain',
    benefits: [
      'Custom AI model development and training',
      'Intelligent automation and decision-making',
      'Predictive analytics and forecasting',
      'Natural language processing and chatbots',
      'Computer vision and image recognition',
      'Real-time data processing and insights'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'Hugging Face', 'Python', 'CUDA'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    aiPowered: true,
    automationLevel: 'Enterprise'
  },
  {
    id: 'intelligent-automation',
    title: 'Intelligent Process Automation',
    description: 'Streamline operations with AI-driven automation that handles complex workflows, reduces manual tasks, and scales with your business growth.',
    icon: 'Zap',
    benefits: [
      'Robotic Process Automation (RPA)',
      'Workflow orchestration and optimization',
      'Document processing and data extraction',
      'Intelligent task scheduling and routing',
      'API integration and system connectivity',
      'Performance monitoring and analytics'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Zapier', 'Microsoft Power Automate', 'Node.js', 'Python'],
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    aiPowered: true,
    automationLevel: 'Advanced'
  },
  {
    id: 'ai-powered-web-apps',
    title: 'AI-Powered Web Applications',
    description: 'Next-generation web applications with built-in AI capabilities, intelligent user interfaces, and automated content management systems.',
    icon: 'Globe',
    benefits: [
      'AI-enhanced user experiences and personalization',
      'Intelligent content management and curation',
      'Automated testing and quality assurance',
      'Smart analytics and user behavior insights',
      'Voice and conversational interfaces',
      'Progressive web app capabilities'
    ],
    technologies: ['React', 'Next.js', 'TensorFlow.js', 'WebRTC', 'GraphQL', 'WebAssembly'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    aiPowered: true,
    automationLevel: 'Advanced'
  },
  {
    id: 'smart-mobile-apps',
    title: 'Smart Mobile Applications',
    description: 'Intelligent mobile apps with AI features like image recognition, voice commands, predictive text, and automated user assistance.',
    icon: 'Smartphone',
    benefits: [
      'Cross-platform AI-enabled mobile development',
      'On-device machine learning capabilities',
      'Intelligent push notifications and engagement',
      'Voice recognition and natural language interfaces',
      'Augmented reality and computer vision features',
      'Offline AI functionality and edge computing'
    ],
    technologies: ['React Native', 'Flutter', 'TensorFlow Lite', 'Core ML', 'ARKit', 'MLKit'],
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    aiPowered: true,
    automationLevel: 'Advanced'
  },
  {
    id: 'ai-chatbots-assistants',
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Sophisticated conversational AI that understands context, learns from interactions, and provides intelligent customer support 24/7.',
    icon: 'MessageCircle',
    benefits: [
      'Natural language understanding and generation',
      'Multi-channel deployment (web, mobile, social)',
      'Integration with business systems and databases',
      'Sentiment analysis and emotion detection',
      'Multilingual support and translation',
      'Continuous learning and improvement'
    ],
    technologies: ['OpenAI GPT', 'Dialogflow', 'Rasa', 'Microsoft Bot Framework', 'Wit.ai', 'IBM Watson'],
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    aiPowered: true,
    automationLevel: 'Advanced'
  },
  {
    id: 'data-analytics-ai',
    title: 'AI-Driven Data Analytics',
    description: 'Transform raw data into actionable insights with machine learning algorithms, predictive modeling, and intelligent visualization dashboards.',
    icon: 'BarChart3',
    benefits: [
      'Predictive analytics and forecasting models',
      'Real-time data processing and visualization',
      'Anomaly detection and alert systems',
      'Customer behavior analysis and segmentation',
      'Business intelligence and reporting automation',
      'Data pipeline optimization and management'
    ],
    technologies: ['Python', 'R', 'Apache Spark', 'Tableau', 'Power BI', 'Elasticsearch'],
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    aiPowered: true,
    automationLevel: 'Enterprise'
  }
];