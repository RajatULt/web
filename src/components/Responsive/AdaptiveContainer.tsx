import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface AdaptiveContainerProps {
  children: React.ReactNode;
  className?: string;
  enableParallax?: boolean;
  enableGestures?: boolean;
}

interface DeviceCapabilities {
  hasTouch: boolean;
  hasHover: boolean;
  hasStylus: boolean;
  refreshRate: number;
  pixelRatio: number;
  connectionSpeed: 'slow' | 'fast' | 'unknown';
  reducedMotion: boolean;
  hasHaptics: boolean;
}

export const AdaptiveContainer: React.FC<AdaptiveContainerProps> = ({
  children,
  className = '',
  enableParallax = false,
  enableGestures = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    hasTouch: false,
    hasHover: false,
    hasStylus: false,
    refreshRate: 60,
    pixelRatio: 1,
    connectionSpeed: 'unknown',
    reducedMotion: false,
    hasHaptics: false
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect device capabilities
    const detectCapabilities = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const hasHover = window.matchMedia('(hover: hover)').matches;
      const hasStylus = window.matchMedia('(pointer: fine)').matches && hasTouch;
      const pixelRatio = window.devicePixelRatio || 1;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Detect refresh rate (approximation)
      let refreshRate = 60;
      if ('screen' in window && 'orientation' in window.screen) {
        // Modern browsers might support this
        refreshRate = (window.screen as any).refreshRate || 60;
      }

      // Detect connection speed
      let connectionSpeed: 'slow' | 'fast' | 'unknown' = 'unknown';
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection.effectiveType === '4g' || connection.effectiveType === '5g') {
          connectionSpeed = 'fast';
        } else if (connection.effectiveType === '3g' || connection.effectiveType === '2g') {
          connectionSpeed = 'slow';
        }
      }

      // Detect haptic feedback support
      const hasHaptics = 'vibrate' in navigator;

      setCapabilities({
        hasTouch,
        hasHover,
        hasStylus,
        refreshRate,
        pixelRatio,
        connectionSpeed,
        reducedMotion,
        hasHaptics
      });
    };

    detectCapabilities();

    // Listen for capability changes
    const mediaQueries = [
      window.matchMedia('(hover: hover)'),
      window.matchMedia('(prefers-reduced-motion: reduce)')
    ];

    mediaQueries.forEach(mq => {
      mq.addEventListener('change', detectCapabilities);
    });

    return () => {
      mediaQueries.forEach(mq => {
        mq.removeEventListener('change', detectCapabilities);
      });
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!enableParallax || capabilities.reducedMotion) return;
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((event.clientX - centerX) * 0.1);
    mouseY.set((event.clientY - centerY) * 0.1);
  };

  const handleTouchStart = () => {
    if (capabilities.hasHaptics && enableGestures) {
      // Subtle haptic feedback
      navigator.vibrate?.(10);
    }
  };

  const containerClasses = `
    adaptive-container
    ${capabilities.hasTouch ? 'touch-device' : 'no-touch'}
    ${capabilities.hasHover ? 'hover-device' : 'no-hover'}
    ${capabilities.hasStylus ? 'stylus-device' : 'no-stylus'}
    ${capabilities.connectionSpeed === 'slow' ? 'slow-connection' : ''}
    ${capabilities.reducedMotion ? 'reduced-motion' : ''}
    ${className}
  `.trim();

  return (
    <motion.div
      ref={containerRef}
      className={containerClasses}
      style={enableParallax && !capabilities.reducedMotion ? { x, y } : {}}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      data-refresh-rate={capabilities.refreshRate}
      data-pixel-ratio={capabilities.pixelRatio}
      data-connection={capabilities.connectionSpeed}
    >
      {children}
    </motion.div>
  );
};