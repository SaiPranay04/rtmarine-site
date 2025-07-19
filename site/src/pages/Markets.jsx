// src/pages/Markets.jsx
import React from 'react';
import bg from '../assets/IMG20220518182633.jpg';
import img1 from '../assets/coastal.png';
import img2 from '../assets/cargo.png';
import img3 from '../assets/recreational.png';
import img4 from '../assets/intakes.png';

const categories = [
  {
    title: 'Coastal Structures',
    image: img1
  },
  {
    title: 'Maritime Cargo Facilities',
    image: img2
  },
  {
    title: 'Recreational Ports',
    image: img3
  },
  {
    title: 'Seawater Intakes & Outfalls',
    image: img4
  }
];

const Markets = () => {
  return (
    <main className="markets-page">
      {/* Hero Section */}
      <div className="markets-background">
        <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bg})`
        }}
      >
        <div className="hero-content">
          <h1>Our Market Categories</h1>
          <p>Explore the diverse marine infrastructure projects we deliver.</p>
        </div>
      </section>
      {/* Grid Section */}
      <section className="container py-12">
        <div className="market-grid">
          {categories.map((cat, index) => (
            <div key={index} className="market-card">
              <img
                src={cat.image}
                alt={cat.title}
                // className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="market-label">
                {cat.title}
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
};

export default Markets;
