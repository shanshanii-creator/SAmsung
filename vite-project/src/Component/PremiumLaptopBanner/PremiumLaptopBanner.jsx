import React from 'react';
import './PremiumLaptopBanner.css';

const PremiumLaptopBanner = () => {
  return (
    <section className="premium-laptop-banner">
      <div className="banner-bg">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
      </div>
      
      <div className="banner-container">
        <div className="banner-content">
          <div className="laptop-badge">Premium Performance</div>
          <h2 className="banner-title">Galaxy Book4 Ultra</h2>
          <p className="banner-subtitle">
            Experience the ultimate power of Intel® Core™ Ultra processors and NVIDIA® GeForce RTX™ 40 series graphics in our most advanced laptop yet.
          </p>
          <div className="banner-specs">
            <div className="spec-item">
              <span className="spec-value">16"</span>
              <span className="spec-label">3K AMOLED</span>
            </div>
            <div className="spec-item">
              <span className="spec-value">RTX 4070</span>
              <span className="spec-label">GPU</span>
            </div>
            <div className="spec-item">
              <span className="spec-value">AI</span>
              <span className="spec-label">Driven</span>
            </div>
          </div>
          <div className="banner-cta">
            <button className="btn-banner btn-primary">Buy Now</button>
            <button className="btn-banner btn-secondary">Learn More</button>
          </div>
        </div>
        
        <div className="banner-image">
          <div className="laptop-glow"></div>
          <img 
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1200" 
            alt="Galaxy Book4 Ultra" 
            className="floating-laptop"
          />
        </div>
      </div>
    </section>
  );
};

export default PremiumLaptopBanner;
