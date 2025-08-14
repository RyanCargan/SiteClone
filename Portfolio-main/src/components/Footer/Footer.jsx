import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaMedium } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './Footer.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: 'https://github.com/Dilhan9',
      //name: 'GitHub',
      color: '#FFFFFFFF'
    },
    { 
      icon: <FaLinkedin />, 
      url: 'https://www.linkedin.com/in/suresh-dilhan/',
      //name: 'LinkedIn',
      color: '#F4F4F4FF'
    },
    { 
      icon: <FaMedium />, 
      url: 'https://medium.com/@dilhan9g',
      //name: 'Medium',
      color: '#F4F4F4FF'
    },
   
    { 
      icon: <FaEnvelope />, 
      url: 'mailto:s.dilhan.dev@gmail.com',
      //name: 'Email',
      color: '#F7F7F7FF'
    }
  ]

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 12
      }
    }
  }

  const socialHover = {
    scale: 1.05,
    y: -3,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={footerVariants}
    >
      <div className="footer-container">
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            variants={itemVariants}
          >
            <a href="#hero" className="footer-logo">
              <span className="logo-text">Portfolio</span>
              <span className="logo-dot"></span>
            </a>
            <p className="footer-tagline">
              Creating digital experiences that inspire and engage
            </p>
            <div className="footer-contact">
              <a href="mailto:s.dilhan.dev@gmail.com">
                <span className="contact-icon">✉️</span> s.dilhan.dev@gmail.com
              </a>
              <a href="tel:+94716625326">
                <span className="contact-icon">📞</span> +94 716625326
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="footer-links"
            variants={itemVariants}
          >
            <h3 className="links-heading">Quick Links</h3>
            <ul className="links-list">
              <li>
                <motion.a 
                  href="#about"
                  whileHover={{ x: 5 }}
                >
                  About Me
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#projects"
                  whileHover={{ x: 5 }}
                >
                  My Projects
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#skills"
                  whileHover={{ x: 5 }}
                >
                  Skills
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#contact"
                  whileHover={{ x: 5 }}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-social"
            variants={itemVariants}
          >
            <h3 className="social-heading">Let's Connect</h3>
            <div className="social-links">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={socialHover}
                aria-label={link.name}
                style={{ backgroundColor: `${link.color}20`, borderColor: link.color }}
              >
                <span className="social-icon" style={{ color: link.color }}>
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </div>

          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
        >
          <div className="copyright">
            &copy; {currentYear} <span>Suresh Dilhan</span>. All rights reserved.
          </div>
          <motion.div 
            className="footer-credits"
            whileHover={{ scale: 1.05 }}
          >
            Designed & Built with <FaHeart className="heart-icon" /> by Me
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
