// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, Search, ChevronDown } from 'lucide-react';
// import { ThemeToggle } from './ThemeToggle';

// const navItems = [
//   { path: '/', label: 'Home' },
//   { 
//     path: '/about', 
//     label: 'About',
//     submenu: [
//       { path: '/about', label: 'Our Story' },
//       { path: '/about/team', label: 'Team' },
//       { path: '/about/culture', label: 'Culture' }
//     ]
//   },
//   { 
//     path: '/services', 
//     label: 'Services',
//     submenu: [
//       { path: '/services/web-development', label: 'Web Development' },
//       { path: '/services/app-development', label: 'App Development' },
//       { path: '/services/ui-ux-design', label: 'UI/UX Design' },
//       { path: '/services/consulting', label: 'Tech Consulting' }
//     ]
//   },
//   { path: '/portfolio', label: 'Portfolio' },
//   { path: '/blog', label: 'Blog' },
//   { path: '/careers', label: 'Careers' },
//   { path: '/contact', label: 'Contact' }
// ];

// export const Navigation: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
//   const location = useLocation();

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <motion.div
//               className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"
//               whileHover={{ rotate: 180 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="w-full h-full flex items-center justify-center">
//                 <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
//               </div>
//             </motion.div>
//             <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               WebStitch
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <div
//                 key={item.path}
//                 className="relative"
//                 onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
//                 onMouseLeave={() => setActiveSubmenu(null)}
//               >
//                 <Link
//                   to={item.path}
//                   className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
//                     location.pathname === item.path
//                       ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
//                       : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
//                   }`}
//                 >
//                   <span>{item.label}</span>
//                   {item.submenu && (
//                     <ChevronDown className="w-4 h-4" />
//                   )}
//                 </Link>

//                 {/* Submenu */}
//                 <AnimatePresence>
//                   {item.submenu && activeSubmenu === item.label && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2"
//                     >
//                       {item.submenu.map((subItem) => (
//                         <Link
//                           key={subItem.path}
//                           to={subItem.path}
//                           className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//                         >
//                           {subItem.label}
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>

//           {/* Right Side Actions */}
//           <div className="flex items-center space-x-4">
//             <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//               <Search className="w-5 h-5" />
//             </button>
//             <ThemeToggle />
            
//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden p-2 text-gray-600 dark:text-gray-300"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
//           >
//             <div className="px-4 py-2 space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`block px-3 py-2 rounded-lg transition-colors ${
//                     location.pathname === item.path
//                       ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
//                       : 'text-gray-700 dark:text-gray-300'
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };




import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About'},
  { path: '/services', label: 'Services'},
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/blog', label: 'Blog' },
  { path: '/responsive-demo', label: 'Demo' },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact' }
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/webstitch-logo.png" 
              alt="WebStitch Logo" 
              className="h-8 w-auto sm:h-12 md:h-16"
              style={{ maxWidth: "120px" }} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden sm:block p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Search className="w-5 h-5" />
            </button>
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
