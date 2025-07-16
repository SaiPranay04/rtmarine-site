import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projectData = [
  {
    title: 'Harbor Expansion',
    description: 'A large-scale harbor development project.',
    image: 'https://source.unsplash.com/600x400/?harbor'
  },
  {
    title: 'Breakwater Design',
    description: 'Design of coastal breakwater structures.',
    image: 'https://source.unsplash.com/600x400/?breakwater'
  },
  {
    title: 'Dock Renovation',
    description: 'Renovating an old dock with modern materials.',
    image: 'https://source.unsplash.com/600x400/?dock'
  },
  {
    title: 'Coastline Protection',
    description: 'Project to protect and stabilize coastline.',
    image: 'https://source.unsplash.com/600x400/?coastline'
  },
];

const CoastalStructures = () => {
  return (
    <div className="pt-16 min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Coastal Structures</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-80">
            Engineering excellence in shoreline protection, ports, and marine infrastructure.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Our Work</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            At RT Marine, we specialize in designing durable, sustainable, and efficient coastal structures.
            From breakwaters to quay walls, our engineering expertise ensures long-term success for coastal infrastructure.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Have a coastal project in mind?</h2>
          <p className="mb-6">Let's collaborate to build sustainable, resilient marine infrastructure.</p>
          <a href="/contact" className="inline-block bg-white text-blue-800 font-bold py-2 px-6 rounded shadow hover:bg-gray-100 transition">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default CoastalStructures;