import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Fuel Distribution System',
      description: 'Designed a web solution for online fuel ordering by Sri Lankan fuel stations. Built backend services with Spring Boot and Kafka for scalable communication. Integrated a responsive Angular frontend with MySQL for inventory and order management.',
      tags: ['Java', 'Spring Boot', 'Microservices', 'Angular', 'Kafka', 'MySQL'],
      image: `${import.meta.env.BASE_URL}images/fuel.png`,
      category: 'full-stack',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'Customer Management System',
      description: 'Constructed a full-stack platform for managing customer data, supporting bulk Excel uploads (1M+ records). Developed backend with Spring Boot and JPA/Hibernate for complex relationships and asynchronous batch processing. Created a React-based frontend with dynamic forms, paginated tables, and real-time upload status tracking.',
      tags: ['Java', 'Spring Boot', 'React JS', 'MariaDB', 'Axios', 'JUnit', 'Maven', 'Git'],
      image: `${import.meta.env.BASE_URL}images/customer.png`,
      category: 'full-stack',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'E-commerce Web Application',
      description: 'Built a scalable e-commerce platform with features like authentication, product management, shopping cart, order tracking, Wishlist, and notifications using Spring Boot and MongoDB. Developed microservice to retrieve product IDs based on image names, enabling similar product recommendations for improved user experience. Designed a modular microservices architecture with REST APIs and a React-based frontend for seamless performance and maintainability.',
      tags: ['Java', 'Spring Boot', 'Spring Security', 'MongoDB', 'ReactJS', 'REST API', 'Microservices', 'JUnit', 'Git'],
      image: `${import.meta.env.BASE_URL}images/ecommerce.png`,
      category: 'full-stack',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 4,
      title: 'Smart Employee Transport System',
      description: 'Built a cross-platform mobile and web solution to optimize employee transport logistics. Developed with React Native and Expo, enabling real-time location tracking and route planning. Implemented backend using PHP and MySQL, resulting in improved transport efficiency and reduced waiting times.',
      tags: ['React Native', 'Expo', 'Axios', 'API', 'PHP', 'MySQL', 'HTML', 'CSS'],
      image: `${import.meta.env.BASE_URL}images/transport.png`,
      category: 'mobile',
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <h2 className="projects-heading">Projects</h2>
          <p className="projects-subheading">Explore my recent work and creations</p>
        </motion.div>
        
        <motion.div 
          className="projects-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {['all',  'web','mobile', 'full-stack', 'DevOps',  'GUI','desktop','AI/ML' ].map((filter) => (
            <motion.button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              {...project}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
