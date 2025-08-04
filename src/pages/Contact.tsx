import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, CheckCircle } from 'lucide-react';
import { MetaTags } from '../components/SEO/MetaTags';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    value: '9899721172',
    description: 'Mon-Fri 9AM-6PM IST',
    color: 'from-green-500 to-blue-500'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'webstitchh@gmail.com',
    description: 'We reply within 24 hours',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Greater Noida, India',
    description: 'Visit our office',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    value: 'Available Now',
    description: 'Instant support',
    color: 'from-orange-500 to-red-500'
  }
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const SERVICE_ID = 'service_ejmgi0o';
  const TEMPLATE_ID = 'template_lr1ufw5';
  const PUBLIC_KEY = 'RAOER-HfNH1vVgZUN';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({
          name: '',
          email: '',
          company: '',
          project: '',
          budget: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Email sending error:', error);
        setIsSubmitted(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <MetaTags
        title="Contact Us - Get Your Free Consultation"
        description="Ready to transform your business? Contact WebStitch for web development, app development, and digital solutions. Located in Greater Noida, serving clients globally."
        keywords="contact web development company, Greater Noida web developers, free consultation, project quote, web development services"
        url="/contact"
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Let's discuss your project and explore how we can help you achieve your goals. 
              Get a free consultation and project quote today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {method.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {method.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Start Your Project
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Type
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="">Select project type</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-15k">₹5,000 - ₹15,000</option>
                      <option value="15k-50k">₹15,000 - ₹50,000</option>
                      <option value="50k-150k">₹50,000 - ₹1,50,000</option>
                      <option value="150k+">₹1,50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitted}
                    className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center ${
                      isSubmitted
                        ? 'bg-green-600 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                    }`}
                    whileHover={!isSubmitted ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitted ? { scale: 0.98 } : {}}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map and Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Our Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Greater Noida, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Help?</h3>
                <p className="mb-4 opacity-90">
                  For urgent matters, give us a call directly:
                </p>
                <a
                  href="tel:9899721172"
                  className="inline-flex items-center text-lg font-semibold hover:underline"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  9899721172
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};