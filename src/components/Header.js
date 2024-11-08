// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header style={{
      backgroundColor: '#ff6f61', // un color llamativo
      padding: '20px',
      color: '#fff',
      textAlign: 'center',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
    }}>
      <h1>Tienda de Fundación Esperanza Animal</h1>
      <nav>
        <a href="#home" style={{ margin: '0 10px', color: '#fff' }}>Inicio</a>
        <a href="#cart" style={{ margin: '0 10px', color: '#fff' }}>Carrito</a>
        <a href="#contact" style={{ margin: '0 10px', color: '#fff' }}>Contacto</a>
      </nav>
    </header>
  );
}

export default Header;