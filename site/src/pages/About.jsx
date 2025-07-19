import React from 'react';
import { motion } from 'framer-motion';
import imgabout from '../assets/image.png';

const sections = [
  {
    title: 'About Us',
    description:
      'RT Proje is an engineering and consultancy company offering services in coastal, marine and port engineering. Our Engineering Team has been committed to delivering solutions with its solid understanding of quality and trusted service across its project portfolio. Celebrating a milestone, our 30th anniversary in 2025 , we have profound experience and, accordingly, have developed a strong business culture, which allows us to predict and respond to investors’ needs and priorities in highly challenging engineering projects. We are not only committed to delivering quality results for clients’ needs, but also to taking this to the next level by challenging sector boundaries and setting new benchmarks by designing and developing unique engineering solutions. Thanks to this approach, RT Proje is recognized today as a reliable and sustainable technical solution provider with its high-quality standards, making our Company a preferred business partner in the industry.'
  },
  {
    title: 'Our Clients',
    description:
      'With our high-grade competency in the field of marine engineering, we provide our clients with solutions that don’t only offer coherence across the entire project lifespan, but also add value for investors and end-users. Private sector investments account for 90 percent of our projects, ranging from seawater intake and outfall pipeline projects, which are executed by international energy and water plant contractors, to developing marine terminals for multinational companies in the industrial sector. In terms of tourism, we are specialized in the development of marina and waterfront projects for private investors, in addition to beach and coastal restoration projects for prominent holiday resorts and venues, which enhance the attractiveness and value of the facility itself. RT Proje is among the most experienced marina planning and design groups in the world. We also contribute to large-scale public-sector projects, primarily through our collaboration with EPC contractors. We provide pre-bid and post-bid tender engineering, in addition to detailed design services for contractors, which usually extend to the construction stage through consulting or supervision. Our clientele also includes another niche group in the global sector: international consulting companies. We provide services for consulting offices, either as sub-consultant or project partner, by sharing our design and construction experience within our region of operation, which covers Turkey, Cyprus, Central and Easter Mediterranean, the Middle East, the Indian Ocean, the Arabian Sea, the Adriatic Sea, Eastern Europe, North and West Africa, the Black Sea coastline, and the Caspian Sea.'
  },
  {
    title: 'Our Team',
    description:
      'At RT Proje, we believe that the people behind our projects are among our most valuable assets. We offer our services with a team of skilled civil engineers who are specialized in the fields of coastal and port engineering. We approach each project individually. As the first step, one of our specialists works on project specifications, and then oversees the entire project, including both project management and customer relations. At RT, we attach great importance to internal knowledge-sharing to foster continuous development, which allows our engineering team to become well-acquainted with national and international codes and standards, design quality norms, and the latest developments in the sector. We adopt an integrated design approach and establish successful collaborations with experienced local and international consulting groups for projects that require high-level multidisciplinary solutions.'
  },
  {
    title: 'Our Services',
    description:
      'We provide engineering and consulting services in a wide range of fields in marine and coastal engineering: Master Planning and Feasibility Studies for marinas, cruise ports, cargo ports and terminals, island developments, artificial beaches, seawater intake and outfall systems. Marine Structural Design Services for all sorts of berthing structures, such as piled jetties and quays, anchored sheet pile and combi-wall berths, gravity quay walls and caisson-type structures, breakwaters, dredging and reclamation works, underwater pipelines, and a number of others. Coastal Engineering Studies such as wave, hydrodynamic, sediment plume and transport, dispersion modeling, shoreline change, and beach-nourishment studies.'
  }
];


const About = () => {
  return (
    <main className="about-page pt-16 text-gray-800">
      <section className="page-header bg-blue-900 text-white text-center py-12">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-lg">Get to know our company and our team.</p>
      </section>

      <section className="content container max-w-6xl mx-auto px-4 py-12">
        <motion.img
          src={imgabout}
          alt="About us banner"
          className="about-image rounded-md mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              <p className="text-gray-700 text-sm text-justify">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;

