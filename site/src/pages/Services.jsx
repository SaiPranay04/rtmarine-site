import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  // Example list of services
  const services = [
    {
      title: "Coastal Engineering & Protection",
      description: "Design of breakwaters, sea walls, beach nourishment, and shoreline protection projects.",
    },
    {
      title: "Port & Harbor Planning",
      description: "Master planning for ports, marinas, and harbors, including feasibility studies and logistics.",
    },
    {
      title: "Marine Structural Design",
      description: "Engineering design for piers, jetties, quay walls, offshore platforms, and related marine structures.",
    },
    {
      title: "Dredging & Reclamation",
      description: "Consultation on dredging operations, land reclamation, and environmental impact mitigation.",
    },
    {
      title: "Project Management",
      description: "End-to-end project management and technical advisory for marine construction projects.",
    },
  ];

  return (
    <main className="services-page container">
      <h1>Our Services</h1>
      {services.map((srv, index) => (
        <motion.div 
          className="service-item"
          key={index}
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h2>{srv.title}</h2>
          <p>{srv.description}</p>
        </motion.div>
      ))}
    </main>
  );
}

export default Services;
