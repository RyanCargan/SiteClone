import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiMapPin, FiPhone, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Initialize EmailJS with your Public Key
    emailjs.init('hEyG9zeFhwSlp9Dsb');

    // Send email to you (s.dilhan.dev@gmail.com)
    emailjs.send(
      'service_n2n6wb7',  // Replace with your EmailJS Service ID
      'template_t8pttao', // Replace with your EmailJS Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 's.dilhan.dev@gmail.com',
        message: formData.message
      }
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setSubmitMessage({
        type: 'success',
        text: 'Your message has been sent successfully!'
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Failed to send message. Please try again later.'
      });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    });
  };



  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </motion.p>
        </div>
        
        <div className="contact-grid">
          {/* Contact Information Card */}
          <motion.div 
            className="contact-info-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card-content">
              <h3 className="card-title">Contact Information</h3>
              <p className="card-description">Feel free to reach out through any of these channels:</p>
              
              <ul className="contact-methods">
                <li className="contact-method">
                  <div className="method-icon">
                    <FiMapPin />
                  </div>
                  <div className="method-details">
                    <h4 className="method-title">Location</h4>
                    <p className="method-info">Embilipitiya, Sri Lanka</p>
                  </div>
                </li>
                <li className="contact-method">
                  <div className="method-icon">
                    <FiPhone />
                  </div>
                  <div className="method-details">
                    <h4 className="method-title">Phone</h4>
                    <p className="method-info">+94 716625326</p>
                  </div>
                </li>
                <li className="contact-method">
                  <div className="method-icon">
                    <FiMail />
                  </div>
                  <div className="method-details">
                    <h4 className="method-title">Email</h4>
                    <p className="method-info">s.dilhan.dev@gmail.com</p>
                  </div>
                </li>
              </ul>
              
              


            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            className="contact-form-container"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="form-header">
              <h3 className="form-title">Send Me a Message</h3>
              <p className="form-instruction">Fill out the form below and I'll respond within 24 hours</p>
            </div>
            
            <div className="form-field">
              <label htmlFor="name" className="field-label">Your Name</label>
              <div className="input-container">
                <div className="input-icon">
                  <FiUser />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-field">
              <label htmlFor="email" className="field-label">Your Email</label>
              <div className="input-container">
                <div className="input-icon">
                  <FiMail />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-field">
              <label htmlFor="message" className="field-label">Your Message</label>
              <div className="input-container">
                <div className="input-icon">
                  <FiMessageSquare />
                </div>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows="5"
                  placeholder="Hello, I'd like to talk about..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            
            <div className="form-actions">
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="button-spinner"></span>
                ) : (
                  <>
                    <FiSend className="button-icon" /> Send Message
                  </>
                )}
              </button>

              {submitMessage && (
                <div className={`form-message ${submitMessage.type}`}>
                  {submitMessage.text}
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
