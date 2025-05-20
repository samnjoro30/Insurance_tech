// app/page.tsx
import React from 'react';
import '../components/styles.css/Home.css';

export default function Home() {
  return (
    <div className="home">
       <header>
       <div className="logo">Shield Insurance</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#login">Login</a>
          <a href="#register">Register</a>
        </nav>
       </header>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Protect What Matters Most</h1>
          <p>Your future, our priority. Reliable insurance for life, health, and property.</p>
          <button>Get a Quote</button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Trust Us</h2>
        <div className="feature-grid">
          <div className="card">
            <h3>Affordable Plans</h3>
            <p>Insurance tailored to every budget.</p>
          </div>
          <div className="card">
            <h3>24/7 Support</h3>
            <p>We’re here for you, always.</p>
          </div>
          <div className="card">
            <h3>Fast Claims</h3>
            <p>Submit and receive claims quickly.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start protecting your future today</h2>
        <button>Join Now</button>
      </section>

      {/* Footer */}
     {/* Footer */}
<footer className="footer">
  <div className="footer-content">
    <div className="footer-section about">
      <h3>Shield Insurance</h3>
      <p>Trusted coverage for your life, health, and property. We've got you covered.</p>
    </div>
    
    <div className="footer-section links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#register">Register</a></li>
      </ul>
    </div>

    <div className="footer-section contact">
      <h4>Contact Us</h4>
      <p>Email: support@shieldinsurance.com</p>
      <p>Phone: +123 456 7890</p>
      <div className="socials">
        <span>🔵</span> {/* Facebook */}
        <span>🐦</span> {/* Twitter */}
        <span>📸</span> {/* Instagram */}
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Shield Insurance Co. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
}
