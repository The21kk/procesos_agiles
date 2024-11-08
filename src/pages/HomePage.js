// src/pages/HomePage.js
import React from 'react';
import ProductItem from '../components/ProductItem';

const products = [
  { id: 1, name: 'Collar para Perro', price: 15.99 },
  { id: 2, name: 'Juguete para Gato', price: 9.99 },
  { id: 3, name: 'Cama para Mascotas', price: 29.99 },
];

const HomePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Bienvenidos a la tienda de accesorios para mascotas</h2>
      <div style={{ display: "flex", gap: "16px" }}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

