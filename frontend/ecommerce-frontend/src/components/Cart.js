import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Importa FontAwesomeIcon
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';  // Importa el icono del carrito

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calcTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(calcTotal);
  }, [cartItems]);

  const handleCheckout = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/paypal/create-payment', {
        items: cartItems,
        total
      });
      window.location.href = res.data.redirectUrl;  // Redirige al usuario a la página de PayPal
    } catch (error) {
      console.error("Error en la transacción", error);
    }
  };

  return (
    <div>
      <h2>
        <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '24px', color: '#000000' }} />  {/* Añadir el icono del carrito */}
        Carrito de Compras
      </h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.make} {item.model} - ${item.price} 
            <button onClick={() => handleRemoveFromCart(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button onClick={handleCheckout}>Pagar con PayPal</button>
    </div>
  );
};

export default Cart;
