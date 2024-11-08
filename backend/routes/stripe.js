const express = require('express');
const stripe = require('stripe')('TU_CLAVE_SECRETA_STRIPE');
const router = express.Router();

router.post('/create-payment', async (req, res) => {
  const { total } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total * 100, // En centavos
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al procesar el pago');
  }
});

module.exports = router;
