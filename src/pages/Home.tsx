import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Globe, Smartphone, TrendingUp, Users, Award, MessageCircle, BarChart3, Sparkles, Play, Star } from 'lucide-react';
import { HeroAnimation } from '../components/3D/HeroAnimation';
import { FloatingElements } from '../components/3D/FloatingElements';
import { AIWorkflowDemo } from '../components/AI/AIWorkflowDemo';
import { AIMetrics } from '../components/AI/AIMetrics';
import { InteractiveChatbot } from '../components/AI/InteractiveChatbot';
import { ServiceDemo } from '../components/Interactive/ServiceDemo';
import { ProjectShowcase } from '../components/Interactive/ProjectShowcase';
import { MetaTags } from '../components/SEO/MetaTags';
import { testimonials } from '../data/testimonials';
import { LazyImage } from '../components/Performance/LazyImage';

const stats = [
  { label: 'AI Solutions Deployed', value: '150+', icon: Brain },
  { label: 'Happy Clients', value: '50+', icon: Users },
  { label: 'Automation Efficiency', value: '94%', icon: Zap },
  { label: 'ROI Improvement', value: '340%', icon: TrendingUp }
];

const services = [
  {
    title: 'AI Solutions & ML',
    description: 'Custom AI models, machine learning algorithms, and intelligent automation systems',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Intelligent Automation',
    description: 'RPA, workflow optimization, and AI-driven process automation solutions',
    icon: Zap,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'AI-Powered Web Apps',
    description: 'Next-gen web applications with built-in AI capabilities and smart interfaces',
    icon: Globe,
    color: 'from-green-500 to-blue-500'
  },
  {
    title: 'Smart Mobile Apps',
    description: 'Intelligent mobile applications with AI features and automated assistance',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'AI Chatbots & Assistants',
    description: 'Conversational AI that understands context and provides intelligent responses',
    icon: MessageCircle,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'AI-Driven Analytics',
    description: 'Transform data into insights with predictive modeling and intelligent visualization',
    icon: BarChart3,
    color: 'from-teal-500 to-green-500'
  }
];

const featuredTestimonials = testimonials.filter(t => t.featured).slice(0, 3);

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <MetaTags
        title="WebStitch - AI & Automation Solutions Leader"
        description="Transform your business with cutting-edge AI solutions, intelligent automation, and smart digital experiences. Leading AI development company in Greater Noida."
        keywords="AI solutions, machine learning, automation, intelligent systems, AI development, Greater Noida, artificial intelligence, process automation"
        url="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-cyan-900/5 px-4">
        <HeroAnimation />
        <FloatingElements />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Transform. Innovate. Dominate.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed px-4">
              We craft premium digital experiences that captivate users and drive exponential business growth. 
              From AI-powered solutions to stunning mobile apps - we turn your vision into market-leading reality.
            </p>
            
            {/* AI Features Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4"
            >
              {[
                { icon: Brain, text: 'AI Solutions', color: 'from-blue-500 to-cyan-500' },
                { icon: Smartphone, text: 'Mobile Apps', color: 'from-purple-500 to-pink-500' },
                { icon: Globe, text: 'Web Development', color: 'from-green-500 to-blue-500' },
                { icon: BarChart3, text: 'Analytics', color: 'from-orange-500 to-red-500' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r ${feature.color} bg-opacity-10 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-white/20 dark:border-gray-700 hover:scale-105 transition-transform cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/responsive-demo"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all group transform hover:scale-105 text-sm sm:text-base"
                >
                  <Play className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Experience Demo
                  <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white backdrop-blur-sm rounded-xl font-semibold hover:bg-white/10 transition-all group transform hover:scale-105 text-sm sm:text-base"
                >
                  <Sparkles className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Start Your Project
                  <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-900/10 dark:to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent px-4">
              Proven Excellence
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Numbers that speak to our commitment to delivering exceptional results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg"
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </motion.div>
                <motion.div 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Service Demos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent px-4">
              Interactive Service Demos
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Experience our development process through interactive demonstrations
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-blue-100 dark:border-blue-800"
            >
              <ServiceDemo service="ai" title="AI Solution Development" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-purple-100 dark:border-purple-800"
            >
              <ServiceDemo service="web" title="Web Development Process" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-green-100 dark:border-green-800"
            >
              <ServiceDemo service="mobile" title="Mobile App Development" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent px-4">
              Portfolio Showcase
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Explore our most successful projects and see the impact we've made across industries
            </p>
          </motion.div>
          
          <ProjectShowcase />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent px-4">
              Premium Digital Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Comprehensive digital solutions that transform how businesses operate and grow
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden h-full">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors relative z-10"
                  >
                    Learn More
                    <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent px-4">
              Client Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              See how our solutions have transformed businesses and delivered exceptional results
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group h-full"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl text-blue-200 dark:text-blue-800 opacity-50 group-hover:opacity-100 transition-opacity">
                    "
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 italic leading-relaxed line-clamp-4">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <LazyImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                  />
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-white/5 rounded-full animate-bounce"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join the digital transformation. Let's discuss how our premium solutions can revolutionize your business operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-2xl group text-sm sm:text-base"
                >
                  <Sparkles className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Start Your Project
                  <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white backdrop-blur-sm rounded-xl font-semibold hover:bg-white/10 transition-all group text-sm sm:text-base"
                >
                  <Play className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  View Our Work
                  <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Chatbot */}
      <InteractiveChatbot />
    </div>
  );
};