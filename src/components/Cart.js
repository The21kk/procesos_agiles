// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotal } = useCart();

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', padding: '10px', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 5px', color: '#555' }}>{item.name}</h4>
                <p style={{ margin: '0', color: '#888' }}>${item.price}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  style={{ width: '50px', marginRight: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#d9534f', cursor: 'pointer' }}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
          <h3 style={{ textAlign: "right", color: "#333", marginTop: '20px' }}>Total: ${getTotal()}</h3>
          <button onClick={() => alert('Procesando pago...')} style={{ display: 'block', width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', marginTop: '15px' }}>
            Proceder al pago
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
