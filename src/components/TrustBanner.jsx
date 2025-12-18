import React from 'react';
import '../assets/css/TrustBanner.css';

const TrustBanner = () => {
  return (
    <section className="trust-banner">
      <div className="trust-overlay"></div>
      <div className="trust-content">
        <h2 className="trust-heading">Authentic Materials. Unmatched Durability.</h2>
        <p className="trust-sub">
          "We don't just build furniture. We craft legacies that stand the test of time."
        </p>
      </div>
    </section>
  );
};

export default TrustBanner;