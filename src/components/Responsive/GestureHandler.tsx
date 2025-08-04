import React, { useRef, useEffect, useState } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';

interface GestureHandlerProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onPinch?: (scale: number) => void;
  enableHaptics?: boolean;
  className?: string;
}

export const GestureHandler: React.FC<GestureHandlerProps> = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onPinch,
  enableHaptics = true,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasTouch, setHasTouch] = useState(false);
  const [isGesturing, setIsGesturing] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  useEffect(() => {
    setHasTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const triggerHaptic = (intensity: 'light' | 'medium' | 'heavy' = 'light') => {
    if (!enableHaptics || !navigator.vibrate) return;
    
    const patterns = {
      light: 10,
      medium: 20,
      heavy: 50
    };
    
    navigator.vibrate(patterns[intensity]);
  };

  const handlePanStart = () => {
    setIsGesturing(true);
    triggerHaptic('light');
  };

  const handlePan = (event: any, info: PanInfo) => {
    x.set(info.offset.x);
    y.set(info.offset.y);
  };

  const handlePanEnd = (event: any, info: PanInfo) => {
    setIsGesturing(false);
    
    const threshold = 50;
    const velocity = 500;
    
    // Determine swipe direction
    if (Math.abs(info.offset.x) > Math.abs(info.offset.y)) {
      // Horizontal swipe
      if (info.offset.x > threshold || info.velocity.x > velocity) {
        onSwipeRight?.();
        triggerHaptic('medium');
      } else if (info.offset.x < -threshold || info.velocity.x < -velocity) {
        onSwipeLeft?.();
        triggerHaptic('medium');
      }
    } else {
      // Vertical swipe
      if (info.offset.y > threshold || info.velocity.y > velocity) {
        onSwipeDown?.();
        triggerHaptic('medium');
      } else if (info.offset.y < -threshold || info.velocity.y < -velocity) {
        onSwipeUp?.();
        triggerHaptic('medium');
      }
    }
    
    // Reset position
    x.set(0);
    y.set(0);
  };

  // Pinch gesture handling
  useEffect(() => {
    if (!hasTouch || !containerRef.current) return;

    let initialDistance = 0;
    let initialScale = 1;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        initialDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        initialScale = scale.get();
        triggerHaptic('light');
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        
        const scaleValue = (currentDistance / initialDistance) * initialScale;
        const clampedScale = Math.max(0.5, Math.min(3, scaleValue));
        
        scale.set(clampedScale);
        onPinch?.(clampedScale);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) {
        scale.set(1);
        triggerHaptic('light');
      }
    };

    const container = containerRef.current;
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [hasTouch, onPinch, scale, enableHaptics]);

  return (
    <motion.div
      ref={containerRef}
      className={`gesture-handler ${hasTouch ? 'touch-enabled' : ''} ${className}`}
      style={{
        x,
        y,
        scale,
        rotateX: hasTouch ? rotateX : 0,
        rotateY: hasTouch ? rotateY : 0,
        transformStyle: 'preserve-3d'
      }}
      drag={hasTouch}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
      onPanStart={handlePanStart}
      onPan={handlePan}
      onPanEnd={handlePanEnd}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 300
      }}
    >
      {children}
      
      {/* Visual feedback for gestures */}
      {isGesturing && hasTouch && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            mixBlendMode: 'overlay'
          }}
        />
      )}
    </motion.div>
  );
};