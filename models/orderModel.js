const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderID: {
        type: String,
        required: true
    },
    cheesePizzaQuantity:{
        type: Number
    },
    pepperoniPizzaQuantity:{
        type: Number
    },
    margheritaPizzaQuantity:{
        type: Number
    },
    totalAmount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        required: true,
        default: 'Order Received'
    },
    orderDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Order', orderSchema);