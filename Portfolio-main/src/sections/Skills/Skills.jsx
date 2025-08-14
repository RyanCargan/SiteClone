import { motion } from 'framer-motion';
import './Skills.css';

const baseSkills = [
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "Spring Boot",
  "Hibernate",
  "Angular",
  "React",
  "React Native",
  "Expo",
  "Axios",
  "Microservices",
  "OOP",
  "REST API",
  "API Gateway",
  "MySQL",
  "Oracle SQL",
  "PostgreSQL",
  "MongoDB",
  "Apache Kafka",
  "JWT",
  "Spring Security",
  "Docker",
  "Git",
  "GitHub",
  "GitLab",
  "Bitbucket",
  "Jira",
  "ClickUp",
  "Maven",
  "Gradle",
  "Postman",
  "Swagger",
  "CI/CD",
  "PuTTY",
  "JUnit",
  "Mockito",
  "Agile",
  "Scrum",
];

// Explicit skill to icon mapping
const skillIconMap = {
  "Java": "/images/skills/java.png",
  "JavaScript": "/images/skills/javascript.png",
  "HTML": "/images/skills/html.png",
  "CSS": "/images/skills/css.png",
  "Spring Boot": "/images/skills/spring-boot.png",
  "Hibernate": "/images/skills/Hibernate.png",
  "Angular": "/images/skills/angular.png",
  "React": "/images/skills/react.png",
  "React Native": "/images/skills/react-native.png",
  "Expo": "/images/skills/expo.png",
  "Axios": "/images/skills/Azios.png",
  "Microservices": "/images/skills/Microservices.png",
  "OOP": "/images/skills/oop.png",
  "REST API": "/images/skills/rest-api.png",
  "API Gateway": "/images/skills/api-gateway.png",
  "MySQL": "/images/skills/mysql.png",
  "Oracle SQL": "/images/skills/oracle-sql.png",
  "PostgreSQL": "/images/skills/postgresql.png",
  "MongoDB": "/images/skills/mongodb.png",
  "Apache Kafka": "/images/skills/kafka.png",
  "JWT": "/images/skills/jwt.png",
  "Spring Security": "/images/skills/spring-security.png",
  "Docker": "/images/skills/docker.png",
  "Git": "/images/skills/git.png",
  "GitHub": "/images/skills/github.png",
  "GitLab": "/images/skills/gitlab.png",
  "Bitbucket": "/images/skills/bitbucket.png",
  "Jira": "/images/skills/Jira.png",
  "ClickUp": "/images/skills/clickup.png",
  "Maven": "/images/skills/maven.png",
  "Gradle": "/images/skills/gradle.png",
  "Postman": "/images/skills/postman.png",
  "Swagger": "/images/skills/Swagger.png",
  "CI/CD": "/images/skills/CICD.png",
  "PuTTY": "/images/skills/putty.png",
  "JUnit": "/images/skills/Junit.png",
  "Mockito": "/images/skills/mokito.png",
  "Agile": "/images/skills/agile.png",
  "Scrum": "/images/skills/Scrum.png",
};

const defaultColor = '#4CAF50';

const getIcon = (skill) => {
  const icon = skillIconMap[skill] || '⭐';
  if (icon.startsWith('/')) {
    return <img src={`${import.meta.env.BASE_URL}${icon.substring(1)}`} alt={skill} className="skill-icon-image" />;
  }
  return icon;
};

// Sort skills alphabetically
const sortedSkills = [...baseSkills].sort((a, b) => a.localeCompare(b));

const skillsData = sortedSkills.map(skill => ({
  name: skill,
  icon: getIcon(skill),
  color: defaultColor
}));

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
    hover: {
      y: -6,
      boxShadow: '0 15px 30px -10px rgba(0,0,0,0.15)'
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="skills-heading">Technical Expertise</h2>
          <p className="skills-subheading">Technologies I've mastered and continuously refine</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="skill-card-header">
                <motion.span
                  className="skill-icon"
                  style={{
                    backgroundColor: `${skill.color}20`,
                    color: skill.color
                  }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {getIcon(skill.name)}
                </motion.span>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
