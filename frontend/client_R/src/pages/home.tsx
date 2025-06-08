  import '../components/styles.css/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div className="home">
      <header>
        <div className="logo">Shield Insurance</div>
          <nav className="nav">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
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
      {/* Insurance Covers Section */}
      <section className="insurance-covers">
        <h2>Our Insurance Covers</h2>
        <div className="covers-grid">
          <div className="cover-card">
            <div className="cover-icon">🏠</div>
            <h3>Home Insurance</h3>
            <p>Comprehensive protection for your home and belongings against damage, theft, and natural disasters.</p>
            <ul>
              <li>Building and contents coverage</li>
              <li>Alternative accommodation</li>
              <li>Personal liability protection</li>
            </ul>
          </div>
          
          <div className="cover-card">
            <div className="cover-icon">🚗</div>
            <h3>Auto Insurance</h3>
            <p>Complete coverage for your vehicles with flexible plans to suit your needs.</p>
            <ul>
              <li>Collision and comprehensive</li>
              <li>Roadside assistance</li>
              <li>Rental car coverage</li>
            </ul>
          </div>
          
          <div className="cover-card">
            <div className="cover-icon">👨‍👩‍👧‍👦</div>
            <h3>Life Insurance</h3>
            <p>Financial security for your loved ones when they need it most.</p>
            <ul>
              <li>Term and whole life options</li>
              <li>Critical illness coverage</li>
              <li>Tax-free payouts</li>
            </ul>
          </div>
          
          <div className="cover-card">
            <div className="cover-icon">🏥</div>
            <h3>Health Insurance</h3>
            <p>Quality healthcare coverage for you and your family.</p>
            <ul>
              <li>Hospitalization coverage</li>
              <li>Preventive care</li>
              <li>Prescription drug benefits</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="features">
        <h2>Why Trust Shield Insurance</h2>
        <div className="feature-grid">
          <div className="card">
            <h3>Affordable Plans</h3>
            <p>We offer insurance tailored to every budget without compromising on coverage quality. Our tiered plans ensure you only pay for what you need, with options to upgrade as your circumstances change.</p>
            <ul>
              <li>Customizable coverage levels</li>
              <li>Discounts for bundling policies</li>
              <li>No hidden fees</li>
            </ul>
          </div>
          <div className="card">
            <h3>24/7 Support</h3>
            <p>Our dedicated team is available round the clock to assist you with any questions or claims. We understand emergencies don't keep business hours, and neither do we.</p>
            <ul>
              <li>Multilingual support team</li>
              <li>Online chat and phone support</li>
              <li>Emergency claim assistance</li>
            </ul>
          </div>
          <div className="card">
            <h3>Fast Claims</h3>
            <p>Our streamlined claims process gets you back on track quickly. We've invested in technology to make filing claims simple and processing them faster than industry standards.</p>
            <ul>
              <li>Mobile claim submission</li>
              <li>Average 48-hour processing</li>
              <li>Direct deposit payouts</li>
            </ul>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="cta">
        <div className="cta-container">
          <h2>Start protecting your future today</h2>
          <p>Join thousands of satisfied customers who trust Shield Insurance for their protection needs.</p>
          <div className="cta-buttons">
            <button className="primary-btn">Get a Free Quote</button>
            <button className="secondary-btn">Speak to an Agent</button>
          </div>
        </div>
      </section>

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
