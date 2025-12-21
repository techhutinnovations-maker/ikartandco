import React from "react";
import "../assets/css/LegalPages.css";

const PrivacyPolicy = () => {
  return (
    <div className="legal-wrapper">
      <div className="legal-container">
        <aside className="legal-sidebar">
          <h3>Privacy Sections</h3>
          <ul className="legal-nav">
            <li><a href="#collection" className="active">Data Collection</a></li>
            <li><a href="#usage">Data Usage</a></li>
            <li><a href="#sharing">Sharing Data</a></li>
            <li><a href="#rights">Your Rights</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </aside>

        <main className="legal-article">
          <header className="legal-header">
            <p className="last-updated">Last Modified: October 24, 2023</p>
            <h1>Privacy Policy</h1>
          </header>

          <section id="collection">
            <div className="summary-box">
              <strong>Quick Summary</strong>
              We collect your name, email, and usage data to make the app work better for you.
            </div>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that identifies, relates to, describes, or could 
              reasonably be linked, directly or indirectly, with a particular consumer 
              or device. This includes:
            </p>
            <ul>
              <li><strong>Personal Identifiers:</strong> Name, email address, phone number.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, and time spent on pages.</li>
            </ul>
          </section>

          <section id="usage">
            <h2>2. How We Use Your Data</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain our Service.</li>
              <li>Notify you about changes to our Service.</li>
              <li>Provide customer support.</li>
              <li>Monitor the usage of our Service to detect technical issues.</li>
            </ul>
          </section>

          <section id="sharing">
            <div className="summary-box">
              <strong>Quick Summary</strong>
              We never sell your data. We only share it with trusted partners like payment processors.
            </div>
            <h2>3. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal data. We may share your information with 
              third-party vendors who perform services for us, such as payment 
              processing (Stripe), email delivery (Mailchimp), or analytics (Google Analytics).
            </p>
          </section>

          <section id="rights">
            <h2>4. Your Data Rights</h2>
            <p>Depending on your location (e.g., GDPR in Europe), you have the right to:</p>
            <ul>
              <li>Request access to your data.</li>
              <li>Request deletion of your personal information.</li>
              <li>Object to the processing of your data.</li>
            </ul>
          </section>

          <section id="contact">
            <h2>5. Contact Our Privacy Team</h2>
            <p>If you have questions about this policy, please reach out to us:</p>
            <div className="contact-grid">
              <div className="contact-item">
                <strong>Email</strong>
                <p>privacy@yourdomain.com</p>
              </div>
              <div className="contact-item">
                <strong>Office</strong>
                <p>123 Tech Avenue, Suite 100<br/>San Francisco, CA 94107</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;