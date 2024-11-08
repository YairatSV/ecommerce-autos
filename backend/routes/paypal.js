const express = require('express');
const paypal = require('@paypal/checkout-server-sdk');
const router = express.Router();

// Configurar PayPal
let environment = new paypal.core.SandboxEnvironment('CLIENT_ID', 'CLIENT_SECRET');
let client = new paypal.core.PayPalHttpClient(environment);

router.post('/create-payment', async (req, res) => {
  const { total } = req.body;

  const request = new paypal.orders.OrdersCreateRequest();
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: total.toFixed(2)
      }
    }]
  });

  try {
    const order = await client.execute(request);
    res.json({ redirectUrl: order.result.links[1].href });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al procesar el pago');
  }
});

module.exports = router;
