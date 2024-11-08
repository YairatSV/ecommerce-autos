const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const paypalRoutes = require('./routes/paypal');
const stripeRoutes = require('./routes/stripe');  // Importa las rutas de Stripe
const app = express();

app.use(bodyParser.json());

// Rutas
app.use('/api/paypal', paypalRoutes);
app.use('/api/stripe', stripeRoutes);  // Añadir la ruta de Stripe

// Ruta básica para verificar si el servidor está funcionando
app.get('/', (req, res) => {
  res.send('API de e-commerce de autos funcionando');
});

// Conexión a MongoDB
mongoose.connect('mongodb://mongo:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Inicializar servidor
app.listen(5000, () => {
  console.log('Backend corriendo en el puerto 5000');
});
