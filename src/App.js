// src/App.js
import React from 'react';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import HomePage from './pages/HomePage';

function App() {
  return (
    <CartProvider>
      <div>
        <h1>Tienda de Mascotas</h1>
        <HomePage />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;

