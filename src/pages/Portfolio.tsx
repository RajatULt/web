import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { MetaTags } from '../components/SEO/MetaTags';
import { LazyImage } from '../components/Performance/LazyImage';

const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'E-commerce'];

const projects = [
  {
    id: 1,
    title: 'EcoCommerce Platform',
    category: 'E-commerce',
    description: 'Sustainable e-commerce platform with advanced inventory management and green shipping options',
    image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://ecomsite-luxe.netlify.app/',
    githubUrl: '#',
    featured: true
  },
{
  id: 2,
  title: 'Tyre Website',
  category: 'Web Development',
  description: 'A modern, responsive tyre service website featuring product listings, service booking, and location-based support for customers.',
  image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
  technologies: ['React Native', 'Python', 'TensorFlow', 'AWS'],
  liveUrl: 'https://bucolic-palmier-42a75e.netlify.app/', // 👈 Replace this with your actual hosted site URL
  githubUrl: '#',
  featured: true
},

  {
    id: 3,
    title: 'FinanceFlow Dashboard',
    category: 'Web Development',
    description: 'Real-time financial analytics dashboard with advanced data visualization and reporting',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    liveUrl: 'https://financial-dash-roan.vercel.app/',
    githubUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'EduLearn Platform',
    category: 'Web Development',
    description: 'Interactive online learning platform with video streaming and progress tracking',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'WebRTC'],
    liveUrl: 'https://edurika-web-portal.vercel.app/',
    githubUrl: '#',
    featured: true
  },
  {
    id: 5,
    title: 'Smart City IoT',
    category: 'Mobile Apps',
    description: 'IoT-based smart city management system with real-time monitoring and control',
    image: 'https://images.pexels.com/photos/3846207/pexels-photo-3846207.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Firebase', 'IoT', 'Machine Learning'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Software Development',
    category: 'UI/UX Design',
    description: 'Complete brand redesign and website overhaul for a leading creative agency',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Figma', 'Adobe Creative Suite', 'Prototyping'],
    liveUrl: 'https://www.figma.com/design/St1EnyoT4idZTyohd5uxMl/Inventory-Management-system--Community-?node-id=0-1&t=Lar78YyLEB9fphn5-1',
    githubUrl: '#',
    featured: false
  }
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <MetaTags
        title="Portfolio - Our Best Web Development Projects"
        description="Explore WebStitch's portfolio of successful web development, mobile app, and UI/UX design projects. See how we've helped businesses transform digitally."
        keywords="web development portfolio, mobile app portfolio, UI UX design projects, Greater Noida web development, case studies"
        url="/portfolio"
      />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Showcasing our finest work - innovative solutions that drive real business results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
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

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`group cursor-pointer ${
                    project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="relative overflow-hidden">
                      <LazyImage
                        src={project.image}
                        alt={project.title}
                        className={`w-full object-cover group-hover:scale-110 transition-transform duration-300 ${
                          project.featured ? 'h-64' : 'h-48'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 flex space-x-2">
                          <motion.a
                            href={project.liveUrl}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
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
                            +{project.technologies.length - 3} more
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
                <LazyImage
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
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {selectedProject.description}
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={selectedProject.liveUrl}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    {/* View Code */}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};