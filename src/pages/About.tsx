import React from 'react';
import { motion } from 'framer-motion';
import { MetaTags } from '../components/SEO/MetaTags';

export default function About() {
  return (
    <>
      <MetaTags 
        title="About Us"
        description="Learn more about our company, mission, and team."
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 pt-40 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              About Us
            </h1>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We are a forward-thinking company dedicated to delivering exceptional solutions 
                and services to our clients. Our team combines expertise, innovation, and 
                passion to create meaningful impact in everything we do.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded with the vision of transforming ideas into reality, we continue to 
                push boundaries and set new standards in our industry.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  To empower businesses and individuals through innovative solutions 
                  that drive growth and success.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the leading provider of cutting-edge solutions that shape 
                  the future of our industry.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}