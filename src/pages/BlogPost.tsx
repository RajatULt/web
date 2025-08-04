import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { MetaTags } from '../components/SEO/MetaTags';
import { BlogPostSchema } from '../components/SEO/StructuredData';
import { LazyImage } from '../components/Performance/LazyImage';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = `${window.location.origin}/blog/${post.id}`;
  const shareText = `Check out this article: ${post.title}`;

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  // Convert content paragraphs to JSX
  const renderContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        );
      } else if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        );
      } else if (paragraph.startsWith('```')) {
        const code = paragraph.replace(/```\w*\n?/g, '');
        return (
          <pre key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
            <code className="text-sm font-mono text-gray-800 dark:text-gray-200">{code}</code>
          </pre>
        );
      } else if (paragraph.match(/^\d+\./)) {
        const items = paragraph.split('\n').filter(item => item.trim());
        return (
          <ol key={index} className="list-decimal list-inside space-y-2 my-4 text-gray-600 dark:text-gray-400">
            {items.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{item.replace(/^\d+\.\s*/, '')}</li>
            ))}
          </ol>
        );
      } else if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(item => item.trim());
        return (
          <ul key={index} className="list-disc list-inside space-y-2 my-4 text-gray-600 dark:text-gray-400">
            {items.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{item.replace(/^-\s*/, '')}</li>
            ))}
          </ul>
        );
      } else {
        return (
          <p key={index} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            {paragraph}
          </p>
        );
      }
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <MetaTags
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        url={`/blog/${post.id}`}
        type="article"
        author={post.author.name}
        publishedTime={post.publishedAt}
        section={post.category}
        tags={post.tags}
        image={post.image}
      />

      <BlogPostSchema
        headline={post.title}
        description={post.excerpt}
        image={post.image}
        author={{
          name: post.author.name,
          url: `https://webstitch.in/author/${post.author.name.toLowerCase().replace(' ', '-')}`
        }}
        publisher={{
          name: 'WebStitch',
          logo: 'https://webstitch.in/logo.png'
        }}
        datePublished={post.publishedAt}
        url={shareUrl}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="mb-4">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime} min read</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author.name}</span>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg mb-8">
            <LazyImage
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {post.author.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {post.author.role}
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <LazyImage
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-medium leading-relaxed">
            {post.excerpt}
          </div>
          
          <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {renderContent(post.content)}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center mb-6">
            <Tag className="w-5 h-5 mr-2 text-gray-500" />
            <span className="text-gray-500 dark:text-gray-400 font-medium">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Share2 className="w-5 h-5 mr-2 text-gray-500" />
              <span className="text-gray-500 dark:text-gray-400 font-medium">Share:</span>
            </div>
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </article>

      {/* Related Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Related Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts
            .filter(p => p.id !== post.id && p.category === post.category)
            .slice(0, 3)
            .map((relatedPost) => (
              <motion.article
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <Link to={`/blog/${relatedPost.id}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <LazyImage
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
        </div>
      </section>
    </div>
  );
};