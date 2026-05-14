import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import AIBanner from './Component/AIBanner/AIBanner'
import ProductSection from './Component/ProductSection/ProductSection'
import PremiumLaptopBanner from './Component/PremiumLaptopBanner/PremiumLaptopBanner'
import HomeEntertainment from './Component/HomeEntertainment/HomeEntertainment'
import ExploreStore from './Component/ExploreStore/ExploreStore'
import Footer from './Component/Footer/Footer'
import CategoryPage from './Component/CategoryPage/CategoryPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <Navbar onNavigate={handleNavigate} />
      
      <main className="main-content">
        {currentPage === 'home' ? (
          <>
            <AIBanner />
            <ProductSection />
            <PremiumLaptopBanner />
            <HomeEntertainment />
            <ExploreStore />
            
            {/* Brand Mission Section */}
            <section className="info-section" style={{ padding: '8rem 2rem', textAlign: 'center', backgroundColor: '#f7f7f7' }}>
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '700' }}>Tomorrow is already here.</h3>
                <p style={{ fontSize: '1.125rem', color: '#666', lineHeight: '1.8' }}>
                  Samsung AI is more than just technology. It's a partner that understands your needs, 
                  anticipates your actions, and makes your life simpler, safer, and more enjoyable.
                </p>
              </div>
            </section>
          </>
        ) : (
          <CategoryPage 
            category={currentPage} 
            onBack={() => handleNavigate('home')} 
          />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
