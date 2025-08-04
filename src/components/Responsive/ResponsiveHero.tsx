import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { AdaptiveContainer } from './AdaptiveContainer';
import { AdaptiveImage } from './AdaptiveImage';
import { GestureHandler } from './GestureHandler';

interface ResponsiveHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const ResponsiveHero: React.FC<ResponsiveHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText = 'Get Started',
  onCtaClick
}) => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isLandscape, setIsLandscape] = useState(false);
  
  const { scrollY } = useScroll();
  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };
  
  const y = useSpring(useTransform(scrollY, [0, 500], [0, -150]), springConfig);
  const opacity = useSpring(useTransform(scrollY, [0, 300], [1, 0]), springConfig);
  const scale = useSpring(useTransform(scrollY, [0, 300], [1, 1.1]), springConfig);

  useEffect(() => {
    const updateViewport = () => {
      setViewportHeight(window.innerHeight);
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    window.addEventListener('orientationchange', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationchange', updateViewport);
    };
  }, []);

  const heroHeight = isLandscape && viewportHeight < 500 
    ? '70vh' 
    : viewportHeight < 600 
    ? '90vh' 
    : '100vh';

  const handleSwipeUp = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <AdaptiveContainer enableParallax enableGestures>
      <GestureHandler onSwipeUp={handleSwipeUp} enableHaptics>
        <section 
          className="relative overflow-hidden flex items-center justify-center"
          style={{ height: heroHeight, minHeight: '500px' }}
        >
          {/* Background */}
          {backgroundImage && (
            <motion.div 
              className="absolute inset-0 z-0"
              style={{ scale, y }}
            >
              <AdaptiveImage
                src={backgroundImage}
                alt="Hero background"
                className="w-full h-full"
                priority
                aspectRatio={16/9}
                enableAI
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
            </motion.div>
          )}

          {/* Content */}
          <motion.div 
            className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            style={{ opacity, y }}
          >
            <motion.h1 
              className="fluid-heading text-white mb-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: '1.1',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              {title}
            </motion.h1>

            <motion.p 
              className="fluid-text text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={onCtaClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">{ctaText}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.div
                className="text-white/70 text-sm flex items-center gap-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span>Swipe up to explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>
      </GestureHandler>
    </AdaptiveContainer>
  );
};