// src/components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '15px', 
      width: '180px', 
      textAlign: 'center', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img src="https://via.placeholder.com/150" alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
      <h4>{product.name}</h4>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;