import React from 'react';
import './CategoryPage.css';

const categoryData = {
  mobile: [
    { id: 1, name: 'Galaxy S24 Ultra', price: '$1,299', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800' },
    { id: 2, name: 'Galaxy Z Fold5', price: '$1,799', image: 'https://images.unsplash.com/photo-1556656793-062ff9878273?auto=format&fit=crop&q=80&w=800' },
    { id: 3, name: 'Galaxy Z Flip5', price: '$999', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800' },
    { id: 4, name: 'Galaxy A54 5G', price: '$449', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800' },
  ],
  tv: [
    { id: 5, name: 'Neo QLED 8K', price: '$3,499', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800' },
    { id: 6, name: 'The Frame', price: '$1,499', image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800' },
    { id: 7, name: 'The Serif', price: '$1,299', image: 'https://images.unsplash.com/photo-1558888401-3cc1de77652d?auto=format&fit=crop&q=80&w=800' },
    { id: 8, name: 'OLED 4K TV', price: '$1,999', image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&q=80&w=800' },
  ],
  appliances: [
    { id: 9, name: 'Bespoke Refrigerator', price: '$2,899', image: 'https://images.unsplash.com/photo-1571175432230-01c24844c022?auto=format&fit=crop&q=80&w=800' },
    { id: 10, name: 'AI Laundry Combo', price: '$1,599', image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800' },
    { id: 11, name: 'Bespoke Jet AI', price: '$899', image: 'https://images.unsplash.com/photo-1558317374-067df5f75430?auto=format&fit=crop&q=80&w=800' },
    { id: 12, name: 'Smart Microwave', price: '$349', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=800' },
  ],
  computing: [
    { id: 13, name: 'Galaxy Book4 Ultra', price: '$2,399', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800' },
    { id: 14, name: 'Galaxy Book4 Pro', price: '$1,449', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800' },
    { id: 15, name: 'ViewFinity S9', price: '$1,599', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800' },
    { id: 16, name: 'Odyssey OLED G9', price: '$1,799', image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800' },
  ]
};

const CategoryPage = ({ category, onBack }) => {
  const products = categoryData[category] || [];
  const title = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' & ');

  return (
    <div className="category-page">
      <div className="category-container">
        <div className="category-header">
          <button className="back-btn" onClick={onBack}>← Back to Home</button>
          <h1>{title}</h1>
          <p>Explore the latest in {title} technology and innovation.</p>
        </div>

        <div className="category-grid">
          {products.map(product => (
            <div key={product.id} className="category-card">
              <div className="cat-card-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="cat-card-info">
                <h3>{product.name}</h3>
                <span className="cat-price">{product.price}</span>
                <button className="cat-buy-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
