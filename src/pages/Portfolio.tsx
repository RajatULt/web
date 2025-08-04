import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Star, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MetaTags } from '../components/SEO/MetaTags';
import { OptimizedImage } from '../components/Performance/OptimizedImage';

const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'E-commerce', 'AI Solutions'];

const projects = [
  {
    id: 1,
    title: 'EcoCommerce Platform',
    category: 'E-commerce',
    description: 'Sustainable e-commerce platform with advanced inventory management, AI-powered recommendations, and green shipping options',
    image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AI/ML'],
    liveUrl: 'https://ecomsite-luxe.netlify.app/',
    githubUrl: '#',
    featured: true,
    metrics: [
      { label: 'Conversion Rate', value: '+45%' },
      { label: 'Load Time', value: '0.8s' },
      { label: 'User Rating', value: '4.8/5' }
    ]
  },
  {
    id: 2,
    title: 'Tyre Service Website',
    category: 'Web Development',
    description: 'Modern, responsive tyre service website featuring product listings, service booking, location-based support, and real-time inventory tracking',
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://bucolic-palmier-42a75e.netlify.app/',
    githubUrl: '#',
    featured: true,
    metrics: [
      { label: 'Performance', value: '96/100' },
      { label: 'Mobile Score', value: '98/100' },
      { label: 'SEO Score', value: '94/100' }
    ]
  },
  {
    id: 3,
    title: 'FinanceFlow Dashboard',
    category: 'Web Development',
    description: 'Real-time financial analytics dashboard with advanced data visualization, predictive analytics, and comprehensive reporting',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL', 'Chart.js'],
    liveUrl: 'https://financial-dash-roan.vercel.app/',
    githubUrl: '#',
    featured: false,
    metrics: [
      { label: 'Data Processing', value: '10TB/day' },
      { label: 'Response Time', value: '0.3s' },
      { label: 'Accuracy', value: '99.7%' }
    ]
  },
  {
    id: 4,
    title: 'EduLearn Platform',
    category: 'Web Development',
    description: 'Interactive online learning platform with video streaming, progress tracking, AI-powered personalization, and collaborative tools',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'WebRTC', 'AI/ML'],
    liveUrl: 'https://edurika-web-portal.vercel.app/',
    githubUrl: '#',
    featured: true,
    metrics: [
      { label: 'User Engagement', value: '+180%' },
      { label: 'Completion Rate', value: '87%' },
      { label: 'Student Satisfaction', value: '4.9/5' }
    ]
  },
  {
    id: 5,
    title: 'Smart City IoT Dashboard',
    category: 'Mobile Apps',
    description: 'IoT-based smart city management system with real-time monitoring, predictive maintenance, and citizen engagement features',
    image: 'https://images.pexels.com/photos/3846207/pexels-photo-3846207.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Firebase', 'IoT', 'Machine Learning', 'Python'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    metrics: [
      { label: 'Sensors Connected', value: '10,000+' },
      { label: 'Energy Savings', value: '35%' },
      { label: 'Response Time', value: '2.1s' }
    ]
  },
  {
    id: 6,
    title: 'Software Development UI/UX',
    category: 'UI/UX Design',
    description: 'Complete brand redesign and user experience overhaul for a leading software development agency with modern design system',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'Design Systems'],
    liveUrl: 'https://www.figma.com/design/St1EnyoT4idZTyohd5uxMl/Inventory-Management-system--Community-?node-id=0-1&t=Lar78YyLEB9fphn5-1',
    githubUrl: '#',
    featured: false,
    metrics: [
      { label: 'User Satisfaction', value: '+65%' },
      { label: 'Task Completion', value: '+40%' },
      { label: 'Design Rating', value: '4.7/5' }
    ]
  }
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <MetaTags
        title="Portfolio - Our Best Web Development Projects"
        description="Explore WebStitch's portfolio of successful web development, mobile app, and UI/UX design projects. See how we've helped businesses transform digitally."
        keywords="web development portfolio, mobile app portfolio, UI UX design projects, Greater Noida web development, case studies"
        url="/portfolio"
      />

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Showcasing our finest work - innovative solutions that drive real business results
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Projects Delivered', value: '150+', icon: Award },
              { label: 'Client Satisfaction', value: '98%', icon: Star },
              { label: 'Average Performance', value: '96/100', icon: TrendingUp },
              { label: 'Industries Served', value: '12+', icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all text-sm ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {activeCategory === 'All' && (
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="relative overflow-hidden">
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 flex space-x-2">
                          <motion.a
                            href={project.liveUrl}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 flex space-x-2">
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                          {project.category}
                        </span>
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {activeCategory === 'All' ? 'All Projects' : `${activeCategory} Projects`}
          </h2>
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                    <div className="relative overflow-hidden">
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3 flex space-x-2">
                          <motion.a
                            href={project.liveUrl}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 flex space-x-2">
                        <span className="text-xs font-medium text-white bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="text-xs font-medium text-white bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Compact Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {project.metrics.slice(0, 3).map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-500">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs text-gray-500 dark:text-gray-500">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
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
                <OptimizedImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm rounded-lg text-white hover:bg-black/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedProject.category}
                      </span>
                      {selectedProject.featured && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <motion.a
                    href={selectedProject.liveUrl}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </motion.a>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  {selectedProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Key Metrics
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <span className="text-gray-600 dark:text-gray-400">{metric.label}</span>
                          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us for a free consultation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};