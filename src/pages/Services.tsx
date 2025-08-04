import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, Users, Award, TrendingUp, Code, Palette, ShoppingCart, Smartphone, Cloud, TrendingUp as TrendingUpIcon, Play, Zap } from 'lucide-react';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { PricingCalculator } from '../components/Interactive/PricingCalculator';
import { ServiceDemo } from '../components/Interactive/ServiceDemo';
import { MetaTags } from '../components/SEO/MetaTags';
import { LazyImage } from '../components/Performance/LazyImage';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Code,
  Palette,
  ShoppingCart,
  Smartphone,
  Cloud,
  TrendingUp: TrendingUpIcon,
};

const stats = [
  { label: 'Projects Completed', value: '50+', icon: Award },
  { label: 'Happy Clients', value: '50+', icon: Users },
  { label: 'Success Rate', value: '98%', icon: TrendingUp },
  { label: 'Average Rating', value: '4.9/5', icon: Star }
];

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const featuredTestimonials = testimonials.filter(t => t.featured).slice(0, 3);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <MetaTags
        title="Our Services - Web Development, App Development & More"
        description="Comprehensive digital services including web development, mobile apps, UI/UX design, e-commerce solutions, and cloud integration. Transform your business with WebStitch."
        keywords="web development services, mobile app development, UI UX design, e-commerce solutions, cloud integration, digital marketing, Greater Noida"
        url="/services"
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business. From web development to cloud integration, 
              we deliver cutting-edge technology with exceptional design.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-900/10 dark:to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to transform your business and drive exceptional results
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group cursor-pointer ${
                    service.featured ? 'lg:col-span-2' : ''
                  }`}
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden relative">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-8 relative z-10">
                        <div className="flex items-center mb-6">
                          <motion.div 
                            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-lg"
                            whileHover={{ rotate: 5 }}
                          >
                            {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {service.title}
                            </h3>
                            {service.featured && (
                              <motion.span 
                                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full mt-1"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                Featured
                              </motion.span>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Benefits:</h4>
                          <ul className="space-y-2">
                            {service.benefits.slice(0, 3).map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-400 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex space-x-4">
                          <Link
                            to={`/contact?service=${service.id}`}
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                          >
                            <Zap className="mr-2 w-4 h-4" />
                            Get Started
                          </Link>
                          <button className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                            <Play className="mr-2 w-4 h-4" />
                            View Demo
                          </button>
                        </div>
                      </div>

                      <div className="relative">
                        <LazyImage
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full min-h-[300px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-gray-200 dark:border-gray-700 p-8"
                      >
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">All Benefits:</h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start">
                                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600 dark:text-gray-400 text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Pricing Calculator */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Get Your Custom Quote
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Use our interactive calculator to get an instant estimate for your project
            </p>
          </motion.div>
          
          <PricingCalculator />
        </div>
      </section>

      {/* Service Demos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              See Our Process in Action
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Interactive demonstrations of how we deliver exceptional results
            </p>
          </motion.div>
          
          <div className="space-y-12">
            <ServiceDemo service="ai" title="AI Solution Development" />
            <ServiceDemo service="web" title="Web Development Process" />
            <ServiceDemo service="mobile" title="Mobile App Development" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  </div>
                  <div className="text-4xl text-blue-200 dark:text-blue-800 opacity-50 group-hover:opacity-100 transition-opacity">
                    "
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <LazyImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-2xl"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white backdrop-blur-sm rounded-xl font-semibold hover:bg-white/10 transition-all"
                >
                  <Play className="mr-2 w-5 h-5" />
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};