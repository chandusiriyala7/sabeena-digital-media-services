import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    // Show the logo for 3 seconds
    setTimeout(() => {
      setIsLogoVisible(false);
    }, 3000);

    // Trigger the logo background color animation
    setAnimateLogo(true);
    const timer = setTimeout(() => {
      setAnimateLogo(false);
    }, 2000); // Duration of the animation
    return () => clearTimeout(timer); // Cleanup
  }, []);

  // Toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle menu bar
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      {/* Initial logo animation */}
      {isLogoVisible ? (
        <div className="logo-screen">
          {/* Circular Reveal Animation */}
          <motion.div
            className="logo-reveal"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            <motion.img
              src="logo.jpeg"
              alt="Company Logo"
              className="company-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.div>
        </div>
      ) : (
        <div className="landing-page">
          {/* Navbar */}
          <nav className="navbar">
            <div className="navbar-left">
              <span className={`company-name ${animateLogo ? 'animate' : ''}`}>
                SABEENA DIGITAL MEDIA SERVICES
              </span>
            </div>
            <div className="navbar-center">
              <button onClick={toggleDarkMode} className="toggle-mode">
                {darkMode ? <FaSun style={{ color: 'white' }} /> : <FaMoon style={{ color: 'black' }} />}
              </button>
            </div>
            <div className="navbar-right">
              <span className="menu-bar" onClick={toggleMenu}>
                <FaBars style={{ color: darkMode ? 'white' : 'black' }} />
              </span>
            </div>
          </nav>

          {/* Enhanced Animated menu dropdown */}
          {isMenuOpen && (
            <motion.div
              className="dropdown-menu"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.ul>
                <motion.li whileHover={{ scale: 1.1 }}>Services</motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>About</motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>Contact</motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>Testimonials</motion.li>
              </motion.ul>
            </motion.div>
          )}

          {/* Main content */}
          <main className="main-content">
            <motion.h1
              className="main-heading"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              ROAR IN THE <br /> DIGITAL WILDERNESS
            </motion.h1>
            <motion.p
              className="subheading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              WE ROAR WITH SUCCESS, DELIVERING THE TRIONN <br />
              THROUGH VERSATILE DESIGN, BRANDING, AND THE LATEST TECH DEVELOPMENT TO COMPANIES.
            </motion.p>

            {/* Buttons */}
            <div className="button-group">
              <motion.button
                className="button explore"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Work
              </motion.button>
              <motion.button
                className="button contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>
          </main>

          {/* Footer */}
          <footer className="footer">
            <div className="footer-left">© 2024 Trionn</div>
            <div className="footer-right">Privacy | Terms</div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
