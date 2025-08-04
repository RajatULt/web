import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ArrowLeft, ArrowRight, Play, Pause, Award, TrendingUp, Users } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { OptimizedImage } from '../Performance/OptimizedImage';

export const ModernTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover how we've helped businesses achieve remarkable growth through AI-powered solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Testimonial */}
          <div className="lg:col-span-8">
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              {/* Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
              
              <div className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Quote Icon */}
                    <Quote className="w-16 h-16 text-blue-500 mb-6" />
                    
                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                      <span className="ml-3 text-gray-600 dark:text-gray-400 font-medium">
                        {currentTestimonial.rating}/5 Rating
                      </span>
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-medium">
                      "{currentTestimonial.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center">
                      <div className="relative">
                        <OptimizedImage
                          src={currentTestimonial.avatar}
                          alt={currentTestimonial.name}
                          className="w-16 h-16 rounded-full mr-6"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900 dark:text-white">
                          {currentTestimonial.name}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 mb-1">
                          {currentTestimonial.role}, {currentTestimonial.company}
                        </div>
                        <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          <span>Verified Client Success</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={prevTestimonial}
                  className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600" />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600" />
                </motion.button>
                <motion.button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isAutoPlaying ? (
                    <Pause className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600" />
                  ) : (
                    <Play className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600" />
                  )}
                </motion.button>
              </div>

              {/* Pagination Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-blue-500 w-8'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Grid */}
          <div className="lg:col-span-4 space-y-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer group ${
                  currentIndex === testimonials.indexOf(testimonial)
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md'
                }`}
                onClick={() => setCurrentIndex(testimonials.indexOf(testimonial))}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <OptimizedImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.company}
                    </div>
                  </div>
                  <div className="text-xs bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                    Verified
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 leading-relaxed">
                  {testimonial.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Join Our Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-blue-100 flex items-center justify-center">
                  <Users className="w-4 h-4 mr-2" />
                  Client Satisfaction Rate
                </div>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <div className="text-5xl font-bold mb-2">4.9/5</div>
                <div className="text-blue-100 flex items-center justify-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Average Rating
                </div>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-blue-100 flex items-center justify-center">
                  <Award className="w-4 h-4 mr-2" />
                  Project Success Rate
                </div>
              </motion.div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl"
              >
                <TrendingUp className="w-6 h-6 mr-3" />
                Start Your Success Story
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};