// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <section style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2>Bienvenidos a la tienda de la Fundacion Esperanza Animal</h2>
          <p>Encuentra los mejores accesorios para tu mascota.</p>
        </section>
        <section id="galeria">
          <h3>Galería de Productos</h3>
          <ProductList />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;