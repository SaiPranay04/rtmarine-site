import React, { useState } from 'react';

function Contact() {
  // Simple state to hold form fields (not actually used for submission in this demo)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just prevent default. In a real app, you'd handle form submission here.
    alert("Form submitted! (This is a static demo form.)");
  };

  return (
    <main className="contact-page container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us with any inquiries or project proposals. We’d love to hear from you!</p>
      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> Dubai World Trade Center, UAE</p>
          <p><strong>Phone:</strong> +971-4-000-0000</p>
          <p><strong>Email:</strong> info@rtmarineconsulting.com</p>
        </div>
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
