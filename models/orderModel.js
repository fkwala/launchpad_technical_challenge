const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cheesePizzaQuantity:{
        type: Number
    },
    pepperoniPizzaQuantity:{
        type: Number
    },
    margheritaPizzaQuantity:{
        type: Number
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
    },
    orderID: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Order', orderSchema);