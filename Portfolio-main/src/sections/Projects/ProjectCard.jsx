import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, image, githubLink, liveLink }) => {
  const isValidLink = (link) => link && link !== '#';

  return (
    <motion.div 
      className="project-card"
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        
        <div className="project-overlay">
          <div className="project-links">
            {isValidLink(githubLink) && (
              <motion.a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                whileHover={{ scale: 1.1 }}
              >
                {/* GitHub Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 
                    0 0-.94-2.61c3.14-.35 6.44-1.54 
                    6.44-7A5.44 5.44 0 0 0 20 
                    4.77 5.07 5.07 0 0 0 19.91 
                    1S18.73.65 16 2.48a13.38 13.38 
                    0 0 0-7 0C6.27.65 5.09 1 
                    5.09 1A5.07 5.07 0 0 0 5 
                    4.77a5.44 5.44 0 0 0-1.5 
                    3.78c0 5.42 3.3 6.61 6.44 
                    7A3.37 3.37 0 0 0 9 18.13V22">
                  </path>
                </svg>
              </motion.a>
            )}

            {isValidLink(liveLink) && (
              <motion.a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                whileHover={{ scale: 1.1 }}
              >
                {/* Live Link Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 
                    0 0 1-2-2V8a2 2 0 0 1 
                    2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
