import React from 'react';
import { motion } from 'framer-motion';
import imga from '../assets/ChatGPT Image Jul 16, 2025, 11_32_58 PM.png'
import imgb from '../assets/ChatGPT Image Jul 16, 2025, 11_51_54 PM.png'
import imgc from '../assets/ChatGPT Image Jul 17, 2025, 12_04_48 AM.png'

function Projects() {
  const projects = [
    {
      name: "Coastal Marina Development",
      description: "Design and oversight of a 200-berth coastal marina, including breakwater and dock construction.",
      imageUrl: imga,
    },
    {
      name: "Cargo Port Expansion",
      description: "Expansion of an existing cargo port with new container terminals and improved logistics infrastructure.",
      imageUrl: imgb,
    },
    {
      name: "Seawater Desalination Plant",
      description: "Marine intake/outfall design and coastal impact study for a desalination facility.",
      imageUrl: imgc,
    },
  ];

  return (
    <main className="projects-page container">
      <h1>Our Projects</h1>
      <div className="projects-list">
        {projects.map((proj, index) => (
          <motion.div 
            className="project-item"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img src={proj.imageUrl} alt={proj.name} />
            <h2>{proj.name}</h2>
            <p>{proj.description}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export default Projects;
