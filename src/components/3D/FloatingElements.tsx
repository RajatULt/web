import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  className?: string;
  delay?: number;
  duration?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  className = "w-4 h-4 bg-blue-500 rounded-full", 
  delay = 0, 
  duration = 4 
}) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ y: 0, opacity: 0.3 }}
      animate={{
        y: [-20, 20, -20],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <FloatingElement
        className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg top-20 left-10"
        delay={0}
        duration={5}
      />
      <FloatingElement
        className="w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full top-32 right-20"
        delay={1}
        duration={6}
      />
      <FloatingElement
        className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45 top-48 left-1/4"
        delay={2}
        duration={4}
      />
      <FloatingElement
        className="w-5 h-5 bg-gradient-to-br from-green-400 to-blue-500 rounded-full top-64 right-1/3"
        delay={0.5}
        duration={7}
      />
      <FloatingElement
        className="w-7 h-7 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg top-80 left-1/2"
        delay={3}
        duration={5}
      />
      
      {/* Code-like elements */}
      <motion.div
        className="absolute top-40 right-10 text-xs font-mono text-blue-400 opacity-30"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {"</>"}<br/>
        {"{ }"}<br/>
        {"[ ]"}
      </motion.div>
      
      <motion.div
        className="absolute top-72 left-16 text-xs font-mono text-purple-400 opacity-30"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        const<br/>
        function<br/>
        return
      </motion.div>
    </div>
  );
};