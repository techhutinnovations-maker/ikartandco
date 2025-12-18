import React, { useEffect } from 'react';
import '../../src/assets/css/Startup.css';

const Startup = () => {

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const focusAreas = [
    {
      icon: "🚀",
      title: "Early-Stage Ideas",
      description: "Idea-stage or MVP-stage startups with a clear problem statement and long-term vision."
    },
    {
      icon: "💡",
      title: "Innovation-Driven Teams",
      description: "Founders building unique products, platforms, or services across any industry."
    },
    {
      icon: "🤝",
      title: "Collaboration Ready",
      description: "Startups open to strategic partnerships, mentorship, and shared growth."
    },
    {
      icon: "📈",
      title: "Scalable Businesses",
      description: "Ideas with the potential to grow sustainably and create real-world impact."
    }
  ];

  const offerings = [
    {
      icon: "💰",
      title: "Investment Opportunities",
      description: "We explore seed and early-stage investments aligned with long-term value creation."
    },
    {
      icon: "🧠",
      title: "Mentorship & Guidance",
      description: "Support in strategy, execution, market positioning, and decision-making."
    },
    {
      icon: "🌐",
      title: "Industry Network",
      description: "Access to our network of professionals, operators, and collaborators."
    },
    {
      icon: "🛠️",
      title: "Operational Support",
      description: "Guidance on business structure, processes, and early operational setup."
    }
  ];

  return (
    <div className="wood-fund-wrapper">
      <div className="wood-fund-container">

        {/* HERO */}
        <header className="wood-fund-hero">
          <span className="wood-fund-brand">Ikartandco</span>
          <h1 className="wood-fund-headline">
            Supporting <br />
            <span>Startup Founders & Ideas</span>
          </h1>
          <p className="wood-fund-subheadline">
            We work with ambitious founders seeking investment, collaboration,
            or strategic guidance to build scalable and sustainable businesses.
          </p>
        </header>

        {/* WHO THIS IS FOR */}
        <section className="wood-fund-section">
          <h2 className="wood-fund-section-title">Who This Is For</h2>
          <div className="wood-fund-grid-3">
            {focusAreas.map((item, index) => (
              <div key={index} className="wood-fund-thesis-card">
                <span className="wood-fund-icon">{item.icon}</span>
                <h3 className="wood-fund-card-title">{item.title}</h3>
                <p className="wood-fund-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="wood-fund-section">
          <h2 className="wood-fund-section-title">What We Offer</h2>
          <div className="wood-fund-grid-3">
            {offerings.map((offer, index) => (
              <div key={index} className="wood-fund-thesis-card">
                <span className="wood-fund-icon">{offer.icon}</span>
                <h3 className="wood-fund-card-title">{offer.title}</h3>
                <p className="wood-fund-card-desc">{offer.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="wood-fund-section">
          <h2 className="wood-fund-section-title">Our Approach</h2>
          <p className="wood-fund-subheadline" style={{ maxWidth: '800px', margin: '0 auto' }}>
            We believe in founder-first collaboration. Our approach is flexible and relationship-driven —
            starting with conversations, understanding the vision, and exploring ways to create value
            together rather than forcing rigid structures.
          </p>
        </section>

        {/* WHAT WE LOOK FOR */}
        <section className="wood-fund-section">
          <h2 className="wood-fund-section-title">What We Look For</h2>
          <ul style={{ maxWidth: '800px', margin: '0 auto', color: '#e5e7eb', lineHeight: '1.8' }}>
            <li>Clear problem understanding and vision</li>
            <li>Committed founders with execution mindset</li>
            <li>Willingness to collaborate and adapt</li>
            <li>Ethical, transparent, and long-term thinking</li>
            <li>Potential for scalable growth</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="wood-fund-section">
          <div className="wood-fund-cta-box">
            <h2 className="wood-fund-cta-title">
              Ready to discuss your startup idea?
            </h2>
            <p
              style={{
                color: '#d1fae5',
                marginBottom: '30px',
                maxWidth: '600px',
                margin: '0 auto 30px auto'
              }}
            >
              If you are building something meaningful and looking for investment,
              collaboration, or strategic guidance — let’s start a conversation.
            </p>
            <a href="/#contact">
              <button className="wood-fund-btn">
                Contact Us
              </button>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Startup;
