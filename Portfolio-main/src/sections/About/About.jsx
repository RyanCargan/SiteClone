import { motion } from 'framer-motion'
import './About.css'

export const About = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Header Section */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-heading">About Me</h2>
          <p className="about-subheading">Creating digital experiences that matter</p>
        </motion.div>
        
        {/* Content Section */}
        <motion.div 
          className="about-content"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="about-image-container"
            variants={itemVariants}
          >
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <img 
                  src={`${import.meta.env.BASE_URL}images/about.png`} 
                  alt="Profile" 
                  className="about-image"
                />
              </div>
              <div className="about-image-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-dot dot-1"></div>
                <div className="decoration-dot dot-2"></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text-container"
            variants={itemVariants}
          >
            <div className="about-text-content">
              <motion.p 
                className="highlight-text"
                whileHover={{ x: 5 }}
              >
                Building the Future with Code & Creativity.
              </motion.p>
              
              <div className="about-paragraphs">
                <motion.p
                  whileHover={{ x: 3 }}
                >
                  Software engineer with 3+ years of experience building scalable, enterprise-grade applications. Specialized in backend 
                  development using Java and Spring Boot, with strong hands-on expertise in microservices architecture, RESTful APIs, and real-time 
                  data streaming using Apache Kafka. Proficient in frontend development with React and Next.js, delivering responsive and user-
                  friendly interfaces. Oracle Certified Java Developer with a proven track record of delivering robust solutions in Agile teams. 
                  Experienced in optimizing system performance, collaborating across functions, and implementing best practices for code quality, 
                  security, and maintainability.
                </motion.p>
                
                <motion.p
                  whileHover={{ x: 3 }}
                >
                  I am a dedicated and passionate software engineer with a strong foundation in computer science and a commitment to continuous learning. My goal is to leverage my skills and experience to build innovative and impactful software solutions.
                </motion.p>
                
                <motion.p
                  whileHover={{ x: 3 }}
                >
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and spending time with my family. I believe in a healthy work-life balance to foster creativity and productivity.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
