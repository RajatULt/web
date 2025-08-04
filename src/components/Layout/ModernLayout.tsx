import React from 'react';
import { motion } from 'framer-motion';

interface ModernLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const ModernLayout: React.FC<ModernLayoutProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${className}`}
    >
      {children}
    </motion.div>
  );
};