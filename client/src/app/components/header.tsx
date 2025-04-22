import Link from 'next/link'
import '../styles/header.css';

export default function Header() {
    return (
        <header className="insurance-header">
      <div className="header-top-bar">
        <div className="container">
          <div className="contact-info">
            <span className="phone">
              <i className="icon-phone"></i> 1-800-HQ-INSUR
            </span>
            <span className="email">
              <i className="icon-email"></i> support@hqinsurance.com
            </span>
          </div>
          <div className="auth-links">
            <Link href="/login" className="auth-link">Client Login</Link>
            <Link href="/register" className="auth-link">Register</Link>
          </div>
        </div>
      </div>
      
      <div className="main-header container">
        <div className="logo-container">
          <Link href="/">
            <h1 className="logo">HQ Insurance</h1>
            <p className="tagline">Protecting What Matters Most</p>
          </Link>
        </div>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/insurance" className="nav-link">Insurance Products</Link>
              <div className="dropdown">
                <Link href="/auto-insurance">Auto Insurance</Link>
                <Link href="/home-insurance">Home Insurance</Link>
                <Link href="/life-insurance">Life Insurance</Link>
                <Link href="/business-insurance">Business Insurance</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/claims" className="nav-link">Claims</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item highlight">
              <Link href="/get-quote" className="nav-link quote-button">Get a Quote</Link>
            </li>
          </ul>
        </nav>
        
        <button className="mobile-menu-button" aria-label="Toggle navigation">
          <span className="menu-icon"></span>
        </button>
      </div>
    </header>
    )
}