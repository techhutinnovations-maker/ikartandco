import React, { useEffect, useState } from 'react';
import '../assets/css/Contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info('Sending message...', { autoClose: 2000 });

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
    .then((response) => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, (error) => {
      toast.error('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <section className="wc-contact-section" id="contact">
      <div className="wc-contact-container">
        
        {/* LEFT SIDE */}
        <div className="wc-contact-content">
          <h4 className="wc-sub-title">Get in Touch</h4>
          <h2 className="wc-main-title">We’d Love To Hear From You</h2>
          <p className="wc-contact-desc">
           Looking for a trusted partner for wood procurement, construction timber supply, or industrial raw material?
ikartandco is here to support farmers, industries, and contractors with reliable, honest, and professional service.
          </p>

          <h5 className="wc-sub-title">ikartandco – Efficient. Transparent. Trusted.</h5>

          <div className="wc-simple-details">
            <div className="wc-detail-item">
              <strong>Email:</strong> hello@woodcraftmasters.com
            </div>
            <div className="wc-detail-item">
              <strong>Phone:</strong> +91 XXXXXXXXXX
            </div>
            <div className="wc-detail-item">
              <strong>Address:</strong> Andhra Pradesh
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="wc-form-wrapper">
          <form onSubmit={handleSubmit} className="wc-form">
            
            <div className="wc-form-group">
              <label className="wc-label">Your Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="John Doe"
                required 
                onChange={handleChange}
                value={formData.name}
                className="wc-input"
              />
            </div>

            <div className="wc-form-group">
              <label className="wc-label">Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="john@example.com"
                required 
                onChange={handleChange}
                value={formData.email}
                className="wc-input"
              />
            </div>

            <div className="wc-form-group">
              <label className="wc-label">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="+1 234 567 890"
                onChange={handleChange}
                value={formData.phone}
                className="wc-input"
              />
            </div>

            <div className="wc-form-group">
              <label className="wc-label">Message</label>
              <textarea 
                name="message"
                rows="4"
                placeholder="How can we help you?"
                required 
                onChange={handleChange}
                value={formData.message}
                className="wc-textarea"
              ></textarea>
            </div>

            <button type="submit" className="wc-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />
    </section>
  );
};

export default Contact;
