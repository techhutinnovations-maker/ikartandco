import React from 'react';
import '../assets/css/WoodProcurement.css';

const WoodProcurement = () => {
  
  const woodTypes = [
    "Eucalyptus",
    "Subabul (Subabulu)",
    "Casuarina",
    "Mango Trees",
    "Neem Trees",
    "All Types of Firewood"
  ];

  const sources = [
    "Farmers & Agricultural Plantation Owners",
    "Private Plantation Companies",
    "Government Forest Auctions",
    "Private Company Auctions",
    "Estate, Land, and Field Clearance Projects"
  ];

  const processSteps = [
    { num: "01", title: "Plantation Inspection", desc: "We visit the farm to check tree age, wood quality, measurement, and estimated volume." },
    { num: "02", title: "Fair & Competitive Pricing", desc: "Prices offered based on species, girth, length, and demand — with zero middlemen." },
    { num: "03", title: "Quick Confirmation", desc: "Once the farmer agrees to the terms, the deal is finalized immediately on the spot." },
    { num: "04", title: "Cutting & Labour Support", desc: "We provide full support for cutting, loading, labour, and on-ground handling." },
    { num: "05", title: "Transportation", desc: "We hire suitable trucks depending on volume and destination via our logistics network." },
    { num: "06", title: "Fast Payment", desc: "Clear billing, quick settlement, and no delays — guaranteed transparency." }
  ];

  const trustPoints = [
    "Direct purchases with no commission agents",
    "Fast payments and honest measurements",
    "Hassle-free process from inspection to loading",
    "High capacity to buy large volumes",
    "Multi-state procurement teams",
    "Year-round purchasing ability"
  ];

  return (
    <div className="procurement-page">
      
      {/* Page Header */}
      <header className="wp-header">
        <div className="wp-header-content">
          <span className="wp-subtitle">For Farmers & Auctions</span>
          <h1 className="wp-title">Wood Procurement Services</h1>
          <p className="wp-desc">
            We procure high-quality plantation wood and firewood directly from the source. 
            Transparent dealings, fair pricing, and immediate payments.
          </p>
        </div>
      </header>

      <div className="wp-container">
        
        {/* SECTION 1: What We Buy & Who We Buy From */}
        <section className="wp-sourcing-grid">
          
          {/* Left: What We Buy */}
          <div className="wp-card light-card">
            <h2 className="wp-section-title">What We Buy</h2>
            <p className="wp-section-sub">High-quality plantation wood & firewood</p>
            <div className="wood-tags">
              {woodTypes.map((wood, index) => (
                <div key={index} className="wood-tag">
                  <span className="tree-icon">🌲</span> {wood}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Who We Buy From */}
          <div className="wp-card dark-card">
            <h2 className="wp-section-title text-white">Who We Buy From</h2>
            <ul className="source-list">
              {sources.map((source, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span> {source}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 2: Process */}
        <section className="wp-process-section">
          <div className="section-intro">
            <h2 className="wp-heading-lg">Our Procurement Process</h2>
            <p>A simple, transparent, farmer-friendly system.</p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="step-num">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Trust */}
        <section className="wp-trust-section">
          <h2 className="wp-heading-lg">Why Farmers Trust ikartandco</h2>
          <div className="trust-grid">
            {trustPoints.map((point, index) => (
              <div key={index} className="trust-item">
                <div className="trust-icon">🤝</div>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Auction Expertise */}
        <section className="wp-auction-section">
          <div className="auction-overlay"></div>
          <div className="auction-content">
            <div className="auction-header">
              <span className="auction-badge">Industrial Sourcing</span>
              <h2>Auction Procurement Expertise</h2>
            </div>

            <div className="auction-split">
              <div className="auction-col">
                <h3>Where We Participate</h3>
                <ul>
                  <li>🏛 Government Auctions</li>
                  <li>🌲 Forest Department Sales</li>
                  <li>🏭 Private Industry Auctions</li>
                </ul>
              </div>
              
              <div className="auction-divider"></div>

              <div className="auction-col">
                <h3>Our Strengths</h3>
                <ul>
                  <li>✓ Deep knowledge of documentation</li>
                  <li>✓ Handling large-volume lots</li>
                  <li>✓ Professional logistics support</li>
                  <li>✓ Timely removal & safe transport</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default WoodProcurement;