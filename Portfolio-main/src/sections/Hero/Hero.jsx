import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion, useAnimation } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiMail } from 'react-icons/fi'
import { FaMedium } from 'react-icons/fa';
import { useEffect } from 'react'
import './Hero.css'

export const Hero = () => {
  const [text] = useTypewriter({
    words: ['Software Engineer', 'Backend Developer', 'Frontend Developer', 'Problem Solver'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
  })

  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible")
      await controls.start({
        rotate: [0, 10, -10, 0],
        transition: { duration: 0.8 }
      })
    }
    sequence()
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 10
      }
    }
  }

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: "easeInOut"
      }
    }
  }

  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background"></div>
      
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="hero-greeting"
              whileHover={{ scale: 1.05 }}
            >
              Hello! 👋
            </motion.h4>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              whileHover={{ 
                textShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
              }}
            >
              I'm Suresh Dilhan
            </motion.h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="hero-subtitle"
              whileHover={{ scale: 1.02 }}
            >
              A <span className="typewriter">{text}</span>
              <Cursor cursorStyle="🖱️" cursorColor="var(--primary-color)" />
            </motion.h2>
          </motion.div>

          <motion.p 
            className="hero-description"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            Software engineer with 3+ years of experience building scalable, enterprise-grade applications. Specialized in backend 
            development using Java and Spring Boot, with strong hands-on expertise in microservices architecture, RESTful APIs, and real-time 
            data streaming using Apache Kafka. Proficient in frontend development with React and Next.js, delivering responsive and user-
            friendly interfaces.
          </motion.p>

          <motion.div 
            className="hero-actions"
            variants={itemVariants}
          >
            <motion.a 
              href="#projects" 
              className="btn btn-primary"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-secondary"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="icon" /> Resume
            </motion.a>
          </motion.div>

          <motion.div 
            className="social-links"
            variants={itemVariants}
          >
            {[
              { icon: <FiGithub />, url: "https://github.com/Dilhan9", label: "GitHub" },
              { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/suresh-dilhan/", label: "LinkedIn" },
              { icon: <FaMedium />, url: "https://medium.com/@dilhan9g", label: "Medium" },
              { icon: <FiMail />, url: "mailto:s.dilhan.dev@gmail.com", label: "Email" }
              
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.url}
                aria-label={social.label}
                whileHover={{ 
                  y: -8,
                  scale: 1.2,
                  color: "var(--primary-color)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <motion.div 
            className="image-wrapper"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
          >
            <div className="placeholder-image">
              <img src={`${import.meta.env.BASE_URL}images/my-profile.png`} alt="Suresh Dilhan" className="hero-profile-image" />

              <motion.div 
                className="glow-effect"
                variants={circleVariants}
              />
              
              {/* Decorative floating circles */}
              <motion.div 
                className="floating-circle circle-1"
                animate={{
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                  transition: {
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: "easeInOut"
                  }
                }}
              />
              <motion.div 
                className="floating-circle circle-2"
                animate={{
                  x: [0, -15, 0],
                  y: [0, 15, 0],
                  transition: {
                    duration: 7,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
              />
              <motion.div 
                className="floating-circle circle-3"
                animate={{
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
