import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Mobile', id: 'mobile' },
    { title: 'TV & AV', id: 'tv' },
    { title: 'Home Appliances', id: 'appliances' },
    { title: 'Computing', id: 'computing' },
    { title: 'Displays', id: 'tv' } // Reusing tv for display demo
  ];

  const secondaryLinks = ['Support', 'For Business'];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Logo */}
        <div className="navbar-logo">
          <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg viewBox="0 0 460 76" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', color: 'black' }}>
              <path d="M68.5 75.3c-23.7 0-42.9-10.4-42.9-23.3 0-12.9 19.2-23.3 42.9-23.3s42.9 10.4 42.9 23.3c.1 12.9-19.1 23.3-42.9 23.3m353 0c-23.7 0-42.9-10.4-42.9-23.3 0-12.9 19.2-23.3 42.9-23.3s42.9 10.4 42.9 23.3c0 12.9-19.2 23.3-42.9 23.3M17.4 39c0-17.7 22.9-32 51.1-32s51.1 14.3 51.1 32-22.9 32-51.1 32-51.1-14.3-51.1-32m353 0c0-17.7 22.9-32 51.1-32s51.1 14.3 51.1 32-22.9 32-51.1 32-51.1-14.3-51.1-32m-216.7-7.3c0-3.3 2.7-5.1 7.2-5.1 4.5 0 10.1 1.7 13.5 3.8l2.9-5.7c-3.7-2.3-10.1-4.2-16.5-4.2-9 0-14.9 4.3-14.9 10.8 0 16.5 24.2 13.9 24.2 23.1 0 3.7-3.3 5.7-8.6 5.7-5.5 0-11.9-2.2-15.6-4.9l-2.9 5.8c4.2 3.1 11.5 5.2 18.5 5.2 11.1 0 16.6-4.8 16.6-11.8 0-17.1-24.4-14.5-24.4-22.7m-44.2 10.8L93.7 11.1h-7.6v45.1h7.4V25.2l15.3 31h6.6l15.3-31v31h7.4V11.1h-7.6l-15.8 31.4zm109.1-12.2l12.4 31.4h-24.9l12.5-31.4zm-19.3 49.3h7.2l3-7.4h18.2l3 7.4h7.2L297.4 11.1h-6.7l-15.2 45.1zm153.6-26.6c0-7.3-5.3-12-13.8-12h-17.7v38.6h7.4V36.2h10.2l10.4 20h8.1l-10.8-20.4c3.9-1.2 6.2-4.5 6.2-9.1m-24.1-5.9h10.2c4.4 0 6.6 2.1 6.6 5.9s-2.2 5.9-6.6 5.9h-10.2V17.2zm-73.5 20.3c0-9.6-6.1-15.6-15.2-15.6-9 0-15 6-15 15.6s6 15.6 15 15.6c9.1 0 15.2-6 15.2-15.6m-37.7 0c0-13.9 9.1-22.1 22.5-22.1s22.7 8.2 22.7 22.1c0 13.8-9.3 22.1-22.7 22.1-13.4 0-22.5-8.3-22.5-22.1" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* Main Nav Links */}
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list main-nav">
            {navLinks.map((link) => (
              <li key={link.title} className="nav-item">
                <button 
                  onClick={() => handleLinkClick(link.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem 0', fontWeight: 700, fontSize: '0.875rem' }}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>

          <ul className="nav-list secondary-nav">
            {secondaryLinks.map((link) => (
              <li key={link} className="nav-item">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Icons */}
        <div className="navbar-actions">
          <button className="action-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="action-btn" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
          <button className="action-btn" aria-label="User Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;