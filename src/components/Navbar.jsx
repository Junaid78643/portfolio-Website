import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-dark-card/80 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Junaid<span className="text-slate-800 dark:text-white">Shahbaz</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium cursor-pointer transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <motion.button
            whileTap={{ scale: 0.8, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FiSun className="text-yellow-400 text-2xl" /> : <FiMoon className="text-slate-600 text-2xl" />}
          </motion.button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.8, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {darkMode ? <FiSun className="text-yellow-400 text-2xl" /> : <FiMoon className="text-slate-600 text-2xl" />}
          </motion.button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-800 dark:text-white text-2xl focus:outline-none"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-card shadow-lg transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}>
        <ul className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 dark:text-slate-200 text-lg font-medium cursor-pointer hover:text-blue-500 transition-colors block py-2"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
