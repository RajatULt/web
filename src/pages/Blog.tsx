import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowRight, Search } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { MetaTags } from '../components/SEO/MetaTags';
import { LazyImage } from '../components/Performance/LazyImage';

const categories = ['All', 'Web Development', 'SEO', 'DevOps', 'UI/UX Design', 'Mobile Development', 'AI & Automation', 'Blockchain', 'Cybersecurity', 'Cloud Computing'];

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <MetaTags
        title="Blog - Latest Tech Insights & Industry Trends"
        description="Stay updated with the latest web development trends, SEO best practices, DevOps insights, and technology news from WebStitch experts."
        keywords="web development blog, tech blog, SEO tips, DevOps, React tutorials, JavaScript, Greater Noida tech blog"
        url="/blog"
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
              Tech Insights & Trends
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on web development, digital marketing, 
              and emerging technologies from the WebStitch team.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-80 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All' && searchTerm === '' && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Featured Articles
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/blog/${post.id}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="relative">
                          <LazyImage
                            src={post.image}
                            alt={post.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              Featured
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="mr-4">{new Date(post.publishedAt).toLocaleDateString()}</span>
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="mr-4">{post.readTime} min read</span>
                            <Tag className="w-4 h-4 mr-1" />
                            <span>{post.category}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <LazyImage
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-8 h-8 rounded-full mr-3"
                              />
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                  {post.author.name}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  {post.author.role}
                                </div>
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 dark:text-gray-400 text-lg">
                  No articles found matching your criteria.
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/blog/${post.id}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden h-full">
                        <div className="relative">
                          <LazyImage
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col h-full">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="mr-4">{new Date(post.publishedAt).toLocaleDateString()}</span>
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.readTime} min read</span>
                          </div>
                          <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center">
                              <LazyImage
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-8 h-8 rounded-full mr-3"
                              />
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {post.author.name}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Tech Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest articles, tutorials, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};