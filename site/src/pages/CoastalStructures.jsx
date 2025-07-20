// src/pages/CoastalStructures.jsx
import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/coastal.png';
import breakImg from '../assets/break.png';

const projects = [
  {
    title: 'Breakwater Development',
    desc: 'Breakwaters are regarded as one of the principal components of open sea harbors due to their high investment costs, challenging construction techniques that require specialized equipment, and their crucial role in the operational efficiency of port activities. With our expert breakwater design team, we have carried out various heavy-duty breakwater projects in different seas around the globe. In most of these projects, we applied rubble mound designs in addition to designs with accropodes, core-locs, tetrapods, and x-blocs. In some cases, our expert team successfully developed piled, caisson-type, and floating breakwater designs.',
    image: breakImg
  },
  {
    title: 'Dredging and Reclamation',
    desc: 'We provide expert-level engineering and consulting services for property owners, developers, contractors, and dredging companies in challenging dredging and reclamation projects. In addition to various port-dredging works, we have contributed to numerous island reclamation projects with offshore sand supply in the Maldives, the MENA region, and the Mediterranean. Our services in such projects have included engineering works of dredged and reclaimed sections, preparation of construction methodology, downtime analysis, sediment plume modeling, and construction consulting.',
    image: 'https://source.unsplash.com/600x400/?jetty'
  },
  {
    title: 'Waterfront Developments',
    desc: 'Reinforced seawalls with long-term erosion resistance.',
    image: 'https://source.unsplash.com/600x400/?seawall'
  },
  {
    title: 'Shore Protection',
    desc: 'Advanced erosion control solutions for beach stabilization.',
    image: 'https://source.unsplash.com/600x400/?revetment'
  },
  {
    title: 'Beach Rehabilitation',
    desc: 'ARTI Proje is one of the most experienced design groups in beach development and nourishment projects. We design artificial beaches for the facilities whose coastline are not suitable for beach use or continuously eroding and degrading by time. We analyse the local environmental conditions in each project area by running computer simulations of wave, hydrodynamic and sand transport regime, and based on the collected data  through modelling we develop beach designs that will provide optimal size under the given physical conditions. We also provide site consulting during construction and post-construction monitoring periods.',
    image: ''
  }
];

const CoastalStructures = () => {
  return (
    <main className="pt-16 bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImg})` }}
      >
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Coastal Structures</h1>
          <p className="max-w-xl mx-auto text-lg opacity-90">
            Engineering excellence in shoreline protection, ports, and marine infrastructure.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
          <p className="text-gray-700 text-md">
            At RT Marine Consulting, we design resilient coastal structures tailored for durability,
            efficiency, and environmental sustainability. From concept to execution, our team delivers
            solutions that withstand time and tide.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white text-center py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Have a coastal project in mind?</h2>
          <p className="mb-6">Let's collaborate to build sustainable, resilient marine infrastructure.</p>
          <a
            href="/contact"
            className="bg-white text-blue-900 px-6 py-2 font-bold rounded shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default CoastalStructures;
