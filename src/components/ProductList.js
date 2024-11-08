// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  { id: 1, name: 'Collar para Perro', price: 15.000 },
  { id: 2, name: 'Juguete para Gato', price: 9.000 },
  { id: 3, name: 'Cama para Mascotas', price: 29.000 },
];

function ProductList() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px', // espacio entre tarjetas
      padding: '20px 0'
    }}>
      {sampleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;