import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="w-5 h-5 text-yellow-500" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : -180,
          scale: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        <Moon className="w-5 h-5 text-blue-400" />
      </motion.div>
    </motion.button>
  );
};