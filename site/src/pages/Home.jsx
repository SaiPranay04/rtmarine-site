import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from '../assets/IMG20211211093642.jpg';
import img2 from '../assets/IMG20210304113537.jpg';
import img3 from '../assets/IMG20211211070803.jpg';
function Home() {
  return (
    <main className="home">
      {/* Hero Section with background image and overlay text */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Empowering Marine Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Professional consulting for marine and logistics industries.
          </motion.p>
          {/* Call-to-action button linking to Contact page */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <Link to="/contact" className="btn">Contact Us</Link>
          </motion.div>
        </div>
      </section>

      {/* About snippet */}
      <section className="home-about">
        <div className="container">
          <h2>About Our Company</h2>
          <p>
            RT Marine Consulting is a trusted provider of innovative marine and coastal engineering solutions. 
            We pride ourselves on reliability, sustainability, and exceptional service quality.
          </p>
          <Link to="/about" className="link-more">Learn More &raquo;</Link>
        </div>
      </section>

      {/* Services snippet (highlight a few services) */}
      <section className="home-services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-list">
            {/* Example service card 1 */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Coastal Engineering</h3>
              <p>Coastal structure design, shore protection, and erosion control solutions.</p>
            </motion.div>
            {/* Example service card 2 */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Port & Marine Logistics</h3>
              <p>Master planning for ports, terminals, and marine transportation logistics.</p>
            </motion.div>
            {/* Example service card 3 */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>Structural Design</h3>
              <p>Design of jetties, quays, breakwaters, and offshore structures to international standards.</p>
            </motion.div>
          </div>
          <Link to="/services" className="link-more">All Services &raquo;</Link>
        </div>
      </section>

      {/* Projects snippet (highlight recent projects) */}
      <section className="home-projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <motion.div 
              className="project-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={img1} alt="Project 1" />
              <h3>Harbor Expansion</h3>
              <p>Design and consulting for a major harbor expansion project.</p>
            </motion.div>
            <motion.div 
              className="project-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={img2} alt="Project 2" />
              <h3>Modern Shipyard</h3>
              <p>Development of a state-of-the-art shipyard facility with sustainable practices.</p>
            </motion.div>
            <motion.div 
              className="project-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img src={img3} alt="Project 3" />
              <h3>Offshore Platform</h3>
              <p>Engineering consultancy for an offshore drilling platform installation.</p>
            </motion.div>
          </div>
          <Link to="/projects" className="link-more">View All Projects &raquo;</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
