import React from "react";
import "../assets/css/LegalPages.css";

const TermsConditions = () => {
  return (
    <div className="legal-wrapper">
      <div className="legal-container">
        <aside className="legal-sidebar">
          <h3>On this page</h3>
          <ul className="legal-nav">
            <li><a href="#agreement" className="active">Agreement</a></li>
            <li><a href="#accounts">User Accounts</a></li>
            <li><a href="#conduct">User Conduct</a></li>
            <li><a href="#payments">Payments & Refunds</a></li>
            <li><a href="#liability">Liability</a></li>
          </ul>
        </aside>

        <main className="legal-article">
          <header className="legal-header">
            <p className="last-updated">Effective Date: January 01, 2024</p>
            <h1>Terms of Service</h1>
          </header>

          <section id="agreement">
            <div className="summary-box">
              <strong>Quick Summary</strong>
              By using our platform, you agree to these rules. If you don't agree, please don't use our services.
            </div>
            <h2>1. Acceptance of Terms</h2>
            <p>
              Welcome to [Company Name]. By accessing or using our website and services, 
              you agree to comply with and be bound by these Terms and Conditions. 
              These terms apply to all visitors, users, and others who access the service.
            </p>
          </section>

          <section id="accounts">
            <h2>2. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is 
              accurate, complete, and current at all times. Failure to do so constitutes 
              a breach of the Terms, which may result in immediate termination of your 
              account.
            </p>
            <ul>
              <li>You are responsible for safeguarding your password.</li>
              <li>You must notify us immediately of any security breach.</li>
            </ul>
          </section>

          <section id="conduct">
            <div className="summary-box">
              <strong>Quick Summary</strong>
              Don't try to hack us, scrape our data, or use our platform for illegal activities.
            </div>
            <h2>3. Prohibited Conduct</h2>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <p>
              Copying, distributing, or disclosing any part of the Service in any medium; 
              using any automated system, including "robots," "spiders," or "offline readers," 
              to access the Service.
            </p>
          </section>

          <section id="payments">
            <h2>4. Payments & Refunds</h2>
            <p>
              Certain aspects of the Service may be provided for a fee. If you purchase 
              a subscription, you agree to the pricing and payment terms. 
              <strong> Refunds:</strong> We offer a [7-day] money-back guarantee for 
              first-time subscribers.
            </p>
          </section>

          <section id="liability">
            <h2>5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, [Company Name] shall not be liable 
              for any indirect, incidental, special, consequential, or punitive damages, 
              or any loss of profits or revenues.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TermsConditions;