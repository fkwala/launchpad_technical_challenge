const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Set up mongoose connection
mongoose.connect();
const db = mongoose.connection; 

const ordersRouter =  require('./routes/ordersRouter');
app.use('/orders', ordersRouter);

app.listen(3000, () => console.log('Server has started.'))