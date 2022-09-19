const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Set up mongoose connection
mongoose.connect('mongodb://localhost/accounts/login', { useNewUrlParser: true });
const db = mongoose.connection; 
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// Accounts Router
const accountsRouter =  require('./routes/accountsRouter');
app.use('/accounts', accountsRouter);

// Orders Router
const ordersRouter =  require('./routes/ordersRouter');
router.use('/orders', ordersRouter);

app.listen(3000, () => console.log('Server has started.'))