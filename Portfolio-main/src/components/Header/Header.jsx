import { useState, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import './Header.css'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div className="container">
        <motion.a 
          href="#hero" 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">Portfolio</span>
          <span className="logo-dot"></span>
        </motion.a>
        
        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.name}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <motion.a 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ color: 'var(--primary-color)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  <span className="nav-underline"></span>
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <motion.button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </motion.button>
          
          {/* <motion.button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button> */}
        </div>
      </div>
    </motion.header>
  )
}