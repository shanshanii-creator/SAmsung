import React from 'react';
import './HomeEntertainment.css';

const entertainmentProducts = [
  {
    id: 1,
    name: 'Neo QLED 8K',
    description: 'Quantum Matrix Technology Pro | Neural Quantum Processor 8K',
    price: '$3,499.99',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800',
    tag: 'Flagship'
  },
  {
    id: 2,
    name: 'The Frame',
    description: 'Matte Display | Modern Frame Design | Art Mode',
    price: '$1,499.99',
    image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800',
    tag: 'Lifestyle'
  },
  {
    id: 3,
    name: 'Q-Series Soundbar',
    description: 'World\'s First Wireless Dolby Atmos | Q-Symphony',
    price: '$899.99',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800',
    tag: 'Best Seller'
  },
  {
    id: 4,
    name: 'Smart Monitor M8',
    description: 'Slim Fit Camera | Streaming TV | Workspace',
    price: '$649.99',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800',
    tag: 'Work & Play'
  }
];

const HomeEntertainment = () => {
  return (
    <section className="entertainment-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Home Entertainment</span>
          <h2>The Ultimate Viewing Experience</h2>
          <p>Bring the cinematic experience home with our most advanced screens and sound systems.</p>
        </div>

        <div className="entertainment-grid">
          {entertainmentProducts.map(product => (
            <div key={product.id} className="entertainment-card">
              <div className="ent-card-image">
                <span className="ent-tag">{product.tag}</span>
                <img src={product.image} alt={product.name} />
                <div className="ent-overlay">
                  <button className="ent-btn-secondary">Details</button>
                  <button className="ent-btn-primary">Shop Now</button>
                </div>
              </div>
              <div className="ent-card-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="ent-price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeEntertainment;
