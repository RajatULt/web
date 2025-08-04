export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Rajesh Kumar',
    role: 'CTO',
    company: 'FinTech Innovations',
    content: 'WebStitch\'s AI automation reduced our manual processing time by 85% and improved accuracy to 99.7%. Their machine learning models have transformed how we handle customer data and risk assessment.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    featured: true
  },
  {
    id: 'testimonial-2',
    name: 'Priya Singh',
    role: 'Operations Director',
    company: 'Manufacturing Plus',
    content: 'The AI-powered predictive maintenance system WebStitch developed has prevented 12 major equipment failures and saved us over ₹2 crores in downtime costs. Their intelligent automation is game-changing.',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    featured: true
  },
  {
    id: 'testimonial-3',
    name: 'Amit Patel',
    role: 'CEO',
    company: 'Healthcare Analytics',
    content: 'WebStitch\'s AI chatbot handles 78% of our customer inquiries automatically with 96% satisfaction rate. The natural language processing is so advanced, customers often don\'t realize they\'re talking to AI.',
    avatar: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    featured: true
  },
  {
    id: 'testimonial-4',
    name: 'Sunita Sharma',
    role: 'Data Science Lead',
    company: 'Retail Intelligence',
    content: 'The AI-driven analytics platform provides insights we never thought possible. Sales forecasting accuracy improved by 40%, and the automated inventory optimization has reduced waste by 60%.',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    featured: false
  },
  {
    id: 'testimonial-5',
    name: 'Deepak Verma',
    role: 'Digital Transformation Head',
    company: 'Banking Solutions',
    content: 'The intelligent document processing system handles 10,000+ loan applications daily with 99.2% accuracy. What used to take 3 days now completes in 15 minutes. ROI was achieved in just 4 months.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    featured: false
  },
  {
    id: 'testimonial-6',
    name: 'Kavita Jain',
    role: 'Innovation Manager',
    company: 'Smart Logistics',
    content: 'The AI-powered route optimization reduced delivery times by 35% and fuel costs by 28%. The real-time tracking with predictive analytics has revolutionized our supply chain management.',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    featured: false
  }
];