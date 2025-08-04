import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Filter, Star, Award, TrendingUp } from 'lucide-react';
import { LazyImage } from '../Performance/LazyImage';

interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  longDescription: string;
  image: string;
  video?: string;
  technologies: string[];
  features: string[];
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  rating: number;
  testimonial?: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
}

const projects: Project[] = [
  {
    id: 'ai-fintech',
    title: 'AI-Powered FinTech Platform',
    category: 'AI Solutions',
    industry: 'Finance',
    description: 'Intelligent financial analytics with real-time fraud detection',
    longDescription: 'A comprehensive AI-powered financial platform that processes millions of transactions daily, providing real-time fraud detection, risk assessment, and personalized investment recommendations. The system uses advanced machine learning algorithms to analyze patterns and predict market trends.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    features: [
      'Real-time fraud detection',
      'Predictive analytics',
      'Risk assessment algorithms',
      'Automated compliance reporting',
      'Personalized recommendations'
    ],
    results: [
      { metric: 'Fraud Detection', value: '99.7%', improvement: '+15%' },
      { metric: 'Processing Speed', value: '2.3s', improvement: '-60%' },
      { metric: 'Cost Reduction', value: '40%', improvement: '+40%' }
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    rating: 5,
    testimonial: {
      text: 'The AI system has revolutionized our fraud detection capabilities and saved us millions.',
      author: 'Sarah Johnson',
      role: 'CTO',
      company: 'FinanceFlow Inc.'
    }
  },
  {
    id: 'healthcare-mobile',
    title: 'Smart Healthcare Mobile App',
    category: 'Mobile Apps',
    industry: 'Healthcare',
    description: 'AI-powered health monitoring with telemedicine integration',
    longDescription: 'A revolutionary mobile health application that combines AI-powered symptom analysis, real-time health monitoring, and seamless telemedicine integration. The app helps users track their health metrics and connects them with healthcare professionals.',
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase', 'WebRTC'],
    features: [
      'AI symptom analysis',
      'Real-time health monitoring',
      'Telemedicine integration',
      'Medication reminders',
      'Health data analytics'
    ],
    results: [
      { metric: 'User Engagement', value: '85%', improvement: '+25%' },
      { metric: 'Consultation Time', value: '12min', improvement: '-40%' },
      { metric: 'Patient Satisfaction', value: '4.8/5', improvement: '+20%' }
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    rating: 5,
    testimonial: {
      text: 'This app has transformed how we deliver healthcare services to our patients.',
      author: 'Dr. Michael Chen',
      role: 'Chief Medical Officer',
      company: 'HealthTech Solutions'
    }
  },
  {
    id: 'ecommerce-platform',
    title: 'AI-Enhanced E-commerce Platform',
    category: 'Web Development',
    industry: 'Retail',
    description: 'Smart e-commerce with personalized recommendations and inventory optimization',
    longDescription: 'An advanced e-commerce platform powered by AI that provides personalized shopping experiences, intelligent inventory management, and predictive analytics for better business decisions.',
    image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'Stripe', 'MongoDB'],
    features: [
      'AI-powered recommendations',
      'Smart inventory management',
      'Dynamic pricing',
      'Customer behavior analytics',
      'Automated marketing campaigns'
    ],
    results: [
      { metric: 'Conversion Rate', value: '12.5%', improvement: '+45%' },
      { metric: 'Average Order Value', value: '₹2,850', improvement: '+30%' },
      { metric: 'Customer Retention', value: '78%', improvement: '+35%' }
    ],
    liveUrl: 'https://ecomsite-luxe.netlify.app/',
    githubUrl: '#',
    featured: false,
    rating: 4
  }
];

const categories = ['All', 'AI Solutions', 'Mobile Apps', 'Web Development'];
const industries = ['All', 'Finance', 'Healthcare', 'Retail', 'Education'];

export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const industryMatch = selectedIndustry === 'All' || project.industry === selectedIndustry;
    return categoryMatch && industryMatch;
  });

  return (
    <div className="space-y-8">
      {/* Header with Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore our portfolio of successful AI and development projects
          </p>
        </div>
        
        <motion.button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </motion.button>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Industry
                </label>
                <div className="flex flex-wrap gap-2">
                  {industries.map(industry => (
                    <motion.button
                      key={industry}
                      onClick={() => setSelectedIndustry(industry)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                        selectedIndustry === industry
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {industry}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`group cursor-pointer ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="relative">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      project.featured ? 'h-64' : 'h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <motion.a
                            href={project.liveUrl}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                          <motion.button
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Play className="w-4 h-4" />
                          </motion.button>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(project.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {project.industry}
                    </span>
                    {project.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Key Results */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {project.results.slice(0, 3).map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {result.metric}
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400">
                          {result.improvement}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Testimonial Preview */}
                  {project.testimonial && (
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
                        "{project.testimonial.text.substring(0, 80)}..."
                      </p>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        — {project.testimonial.author}, {project.testimonial.company}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <LazyImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm rounded-lg text-white hover:bg-black/30 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center space-x-4">
                      <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedProject.category}
                      </span>
                      <span className="bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedProject.industry}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(selectedProject.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <motion.a
                      href={selectedProject.liveUrl}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </motion.a>
                  </div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  {selectedProject.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Award className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Results & Impact
                    </h3>
                    <div className="space-y-4">
                      {selectedProject.results.map((result, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <span className="text-gray-600 dark:text-gray-400">{result.metric}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">
                              {result.value}
                            </span>
                            <span className="text-sm text-green-600 dark:text-green-400 flex items-center">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              {result.improvement}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {selectedProject.testimonial && (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Client Testimonial
                    </h3>
                    <blockquote className="text-lg text-gray-600 dark:text-gray-400 italic mb-4">
                      "{selectedProject.testimonial.text}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {selectedProject.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {selectedProject.testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {selectedProject.testimonial.role}, {selectedProject.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};