// src/components/Checkout.js
import React, { useState } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const handlePayment = async () => {
    if (paymentMethod === 'paypal') {
      // Lógica para PayPal
      const res = await axios.post('http://localhost:5000/api/paypal/create-payment');
      window.location.href = res.data.redirectUrl;
    } else if (paymentMethod === 'creditcard') {
      // Lógica para Stripe
      const res = await axios.post('http://localhost:5000/api/stripe/create-payment', { total: 100 }); // Total simulado
      const stripe = window.Stripe('TU_PUBLIC_KEY_STRIPE');  // Reemplaza por tu clave pública de Stripe
      stripe.redirectToCheckout({ sessionId: res.data.clientSecret });
    }
  };

  return (
    <div>
      <h2>Selecciona el Método de Pago</h2>
      <div>
        <label>
          <input 
            type="radio" 
            value="paypal" 
            checked={paymentMethod === 'paypal'} 
            onChange={() => setPaymentMethod('paypal')} 
          />
          PayPal
        </label>
        <label>
          <input 
            type="radio" 
            value="creditcard" 
            checked={paymentMethod === 'creditcard'} 
            onChange={() => setPaymentMethod('creditcard')} 
          />
          Tarjeta de Crédito/Débito
        </label>
      </div>
      <button onClick={handlePayment}>Proceder al Pago</button>
    </div>
  );
};

export default Checkout;
