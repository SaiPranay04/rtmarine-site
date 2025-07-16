import React from 'react';
import { motion } from 'framer-motion';
import imgabout from '../assets/image.png';

function About() {
  return (
    <main className="about-page">
      <section className="page-header">
        <h1>About Us</h1>
        <p>Get to know our company and our team.</p>
      </section>
      <section className="content container">
        <motion.img 
          src={imgabout} 
          alt="About us banner" 
          className="about-image"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <h2>Our Mission</h2>
        <p>
          RT Marine Consulting is dedicated to delivering reliable and sustainable engineering solutions for marine projects worldwide. 
          Our mission is to support clients with expert consultancy that combines technical excellence with practical experience.
        </p>
        <h2>Our Team</h2>
        <p>
          Our team consists of seasoned coastal engineers, marine structural experts, and project managers with decades of combined experience. 
          We collaborate closely with clients to ensure each project’s success, from concept through completion.
        </p>
      </section>
    </main>
  );
}

export default About;
