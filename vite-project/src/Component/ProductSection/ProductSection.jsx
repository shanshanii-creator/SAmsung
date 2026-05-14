import React from 'react';
import './ProductSection.css';

const products = [
  {
    id: 1,
    name: 'Galaxy Book4 Ultra',
    description: 'Intel Core Ultra 9 | RTX 4070 | AI Powered',
    price: '$2,399.99',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
    tag: 'Limited'
  },
  {
    id: 2,
    name: 'Galaxy Book4 Pro',
    description: 'Intel Core Ultra 7 | 16" Dynamic AMOLED 2X',
    price: '$1,449.99',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
    tag: 'Popular'
  },
  {
    id: 3,
    name: 'Galaxy Buds2 Pro',
    description: 'Graphite | 24-bit Hi-Fi | Intelligent ANC',
    price: '$229.99',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
    tag: 'Top Rated'
  },
  {
    id: 4,
    name: 'Galaxy Tab S9 Ultra',
    description: 'Dynamic AMOLED 2X | S Pen Included',
    price: '$1,199.99',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    tag: 'New'
  },
  {
    id: 5,
    name: 'Neo QLED 8K TV',
    description: 'AI Upscaling | Infinity Screen',
    price: '$3,499.99',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800',
    tag: 'Premium'
  }
];

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="section-container">
        <div className="section-header">
          <h2>Featured AI-Powered Devices</h2>
          <p>Bring the future home with our latest innovations.</p>
        </div>

        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="card-image-wrapper">
                {product.tag && <span className="product-tag">{product.tag}</span>}
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="card-overlay">
                  <button className="quick-view-btn">Quick View</button>
                </div>
              </div>
              <div className="card-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="card-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
