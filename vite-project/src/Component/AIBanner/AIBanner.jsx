import React from 'react';
import './AIBanner.css';

const AIBanner = () => {
  return (
    <section className="ai-banner">
      <div className="ai-banner-container">
        {/* Animated Background Elements */}
        <div className="bg-glow"></div>
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>

        <div className="banner-grid">
          {/* Text Content */}
          <div className="banner-text">
            <div className="event-badge">SAMSUNG AI WEEK</div>
            <h1 className="glitch-text" data-text="AI WEEK">AI WEEK</h1>
            <h2>Your Companion to AI Living</h2>
            <p>Connect your world like never before. From your pocket to your living room, experience the power of seamless AI integration.</p>
            
            <div className="banner-actions">
              <button className="btn-ai btn-glow">Learn More</button>
              <button className="btn-ai btn-outline">Shop AI Deals</button>
            </div>
            
            <div className="ai-features">
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <span>Galaxy AI</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📺</span>
                <span>AI Vision</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🏠</span>
                <span>SmartThings</span>
              </div>
            </div>
          </div>

          {/* Animated Ecosystem Images */}
          <div className="banner-ecosystem">
            <div className="ecosystem-wrapper">
              
              {/* TV Image (Background) */}
              <div className="device tv-device">
                <div className="hologram-scan"></div>
                <img 
                  src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800" 
                  alt="Samsung AI TV" 
                />
              </div>

              {/* Phone Image (Foreground) */}
              <div className="device phone-device">
                <div className="hologram-scan"></div>
                <img 
                  src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800" 
                  alt="Galaxy Smartphone" 
                />
              </div>

              {/* Decorative Elements */}
              <div className="pulsating-orb ecosystem-orb"></div>
              <div className="floating-ui ui-1"></div>
              <div className="floating-ui ui-2"></div>
              <div className="data-line line-1"></div>
              <div className="data-line line-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBanner;
