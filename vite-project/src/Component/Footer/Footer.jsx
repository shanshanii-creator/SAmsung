import React from 'react';
import './Footer.css';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Product & Service',
      links: ['Smartphones', 'Tablets', 'Audio', 'Watches', 'Smart Switch', 'Accessories', 'TVs', 'Soundbars', 'Refrigerators', 'Laundry', 'Cooking']
    },
    {
      title: 'Shop & Offers',
      links: ['Offers', 'Samsung Rewards', 'Referral Program', 'Education Program', 'Business Program', 'Samsung Experience Store', 'Store Locator']
    },
    {
      title: 'Support',
      links: ['Contact Us', 'Product Support', 'Order Support', 'Community', 'Premium Care', 'Service Center', 'Manuals & Downloads']
    },
    {
      title: 'Sustainability',
      links: ['Overview', 'Environment', 'Corporate Citizenship', 'Digital Responsibility', 'Labor & Human Rights', 'Diversity & Inclusion']
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section: Links */}
        <div className="footer-top">
          {footerLinks.map((column) => (
            <div key={column.title} className="footer-column">
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: Newsletter & Social */}
        <div className="footer-middle">
          <div className="newsletter">
            <h4>Stay in the loop</h4>
            <p>Get the latest news and special offers from Samsung.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">YouTube</a>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="footer-bottom">
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Legal</a>
            <a href="#">Accessibility</a>
          </div>
          <div className="copyright">
            <p>© 2026 Samsung Electronics Co., Ltd. All rights reserved.</p>
          </div>
          <div className="region-selector">
            <span className="region-icon">🌐</span>
            <span>United States / English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
