import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AdaptiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: number;
  sizes?: string;
  quality?: number;
  enableAI?: boolean;
}

export const AdaptiveImage: React.FC<AdaptiveImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  aspectRatio,
  sizes = '100vw',
  quality = 85,
  enableAI = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [optimalSrc, setOptimalSrc] = useState(src);
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'fast' | 'unknown'>('unknown');
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect connection speed
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection.effectiveType === '4g' || connection.effectiveType === '5g') {
        setConnectionSpeed('fast');
      } else if (connection.effectiveType === '3g' || connection.effectiveType === '2g') {
        setConnectionSpeed('slow');
      }
    }
  }, []);

  useEffect(() => {
    // Intersection Observer for lazy loading
    if (!priority) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { 
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    } else {
      setIsInView(true);
    }
  }, [priority]);

  useEffect(() => {
    if (!isInView || !enableAI) return;

    // AI-driven image optimization
    const optimizeImage = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const devicePixelRatio = window.devicePixelRatio || 1;
      
      // Calculate optimal dimensions
      const displayWidth = Math.ceil(rect.width * devicePixelRatio);
      const displayHeight = aspectRatio 
        ? Math.ceil(displayWidth / aspectRatio)
        : Math.ceil(rect.height * devicePixelRatio);

      // Adjust quality based on connection speed
      let adjustedQuality = quality;
      if (connectionSpeed === 'slow') {
        adjustedQuality = Math.max(50, quality - 20);
      } else if (connectionSpeed === 'fast') {
        adjustedQuality = Math.min(95, quality + 10);
      }

      // Generate optimized URL (this would typically use a service like Cloudinary)
      const optimizedUrl = generateOptimizedUrl(src, {
        width: displayWidth,
        height: displayHeight,
        quality: adjustedQuality,
        format: 'auto',
        crop: 'smart'
      });

      setOptimalSrc(optimizedUrl);
    };

    // Use ResizeObserver to re-optimize on size changes
    const resizeObserver = new ResizeObserver(optimizeImage);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    optimizeImage();

    return () => resizeObserver.disconnect();
  }, [isInView, src, quality, aspectRatio, connectionSpeed, enableAI]);

  const generateOptimizedUrl = (originalSrc: string, options: any) => {
    // This is a simplified version - in production, you'd use a service like Cloudinary
    // For now, we'll just return the original src with some basic optimizations
    if (originalSrc.includes('pexels.com')) {
      const baseUrl = originalSrc.split('?')[0];
      return `${baseUrl}?auto=compress&cs=tinysrgb&w=${options.width}&h=${options.height}&fit=crop&crop=smart`;
    }
    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#f3f4f6',
    ...(aspectRatio && {
      aspectRatio: aspectRatio.toString()
    })
  };

  return (
    <div
      ref={containerRef}
      className={`adaptive-image-container ${className}`}
      style={containerStyle}
    >
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
      )}

      {/* Actual image */}
      {isInView && (
        <motion.img
          ref={imgRef}
          src={optimalSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
          onLoad={handleLoad}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.1
          }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        />
      )}

      {/* Progressive enhancement overlay */}
      {isLoaded && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          style={{
            background: 'linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.1) 50%, transparent 51%)',
            backgroundSize: '20px 20px',
            animation: connectionSpeed === 'fast' ? 'shimmer 2s infinite' : 'none'
          }}
        />
      )}
    </div>
  );
};