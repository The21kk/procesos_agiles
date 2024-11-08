// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f8f8f8' }}>
      <h1>Tienda de Fundacion Esperanza Animal</h1>
      <nav>
        <a href="#inicio">Inicio</a> | <a href="#carrito">Carrito</a> | <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
