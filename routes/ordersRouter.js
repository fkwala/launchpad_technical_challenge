const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const Order = require('../models/orderModel');


// Get a receipt of all the orders up to 1 year
router.get('/', async (req, res) => {
    const allOrders = await Order.find();
});

// Create a pizza order from a set menu
router.post('/', (req, res) => {
    const newUUID = uuid();
    const newOrder = new Order({
        cheesePizzaQuantity: req.body.cheesePizzaQuantity,
        pepperoniPizzaQuantity: req.body.pepperoniPizzaQuantity,
        margheritaPizzaQuantity: req.body.margheritaPizzaQuantity,
        orderID: newUUID
    })
    newOrder.save();
});

// Track the order status of the pizza
router.get('/:id', (req, res) => {
    Order.findOne(orderID = req.body.orderID);
    res.send(req.params.id);
});

module.exports = router;


