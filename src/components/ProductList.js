// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  { id: 1, name: 'Collar para Perro', price: 15.99 },
  { id: 2, name: 'Juguete para Gato', price: 9.99 },
  { id: 3, name: 'Cama para Mascotas', price: 29.99 },
];

function ProductList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
      {sampleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

