import React from 'react';
import './ExploreStore.css';

const storeProducts = [
  {
    id: 1,
    name: 'Galaxy S24 Ultra',
    category: 'Smartphone',
    price: 'From $1,299.99',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800',
    color: '#343434'
  },
  {
    id: 2,
    name: 'Galaxy Z Fold5',
    category: 'Smartphone',
    price: 'From $1,799.99',
    image: 'https://images.unsplash.com/photo-1556656793-062ff9878273?auto=format&fit=crop&q=80&w=800',
    color: '#034ea2'
  },
  {
    id: 3,
    name: 'Galaxy Z Flip5',
    category: 'Smartphone',
    price: 'From $999.99',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
    color: '#f7f7f7'
  },
  {
    id: 4,
    name: 'Galaxy A54 5G',
    category: 'Smartphone',
    price: 'From $449.99',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800',
    color: '#eeeeee'
  }
];

const ExploreStore = () => {
  return (
    <section className="explore-store">
      <div className="section-container">
        <div className="explore-header">
          <h2>Explore the Store</h2>
          <div className="filter-tags">
            <button className="filter-tag active">All</button>
            <button className="filter-tag">Mobile</button>
            <button className="filter-tag">TV</button>
            <button className="filter-tag">Appliances</button>
            <button className="filter-tag">Computing</button>
          </div>
        </div>

        <div className="explore-grid">
          {storeProducts.map(product => (
            <div key={product.id} className="explore-card">
              <div className="explore-card-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="explore-card-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <div className="color-swatches">
                  <span className="swatch" style={{ backgroundColor: '#000' }}></span>
                  <span className="swatch" style={{ backgroundColor: '#034ea2' }}></span>
                  <span className="swatch" style={{ backgroundColor: '#aaa' }}></span>
                </div>
                <button className="explore-buy-btn">Shop Now</button>
              </div>
            </div>
          ))}
        </div>

        <div className="explore-footer">
          <button className="view-all-btn">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default ExploreStore;
