// src/components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '15px',
      width: '180px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      backgroundColor: '#f9f9f9'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
    }}
    >
      <img src="https://via.placeholder.com/150" alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
      <h4 style={{ color: '#333', fontWeight: 'bold' }}>{product.name}</h4>
      <p style={{ color: '#ff6f61', fontWeight: 'bold', fontSize: '1.2em' }}>${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;

