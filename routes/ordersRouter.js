const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

// Create a pizza order from a set menu
router.post('/', (req, res) => {
    // NOTE: Order Schema available for reference
    // POST request body contains the current user, 
    // quantities for each pizza type (Cheese, Pepperoni, Margherita),
    // the payment method. 
    // We will first check if the current user is logged in/verified.
    // We will then check if the quantities given are positive.
    // If the numbers are negative, we send back an error saying that 
    // only positive numbers are accepted. 
    // Lastly, we will check if there is a payment method. 
    // If there is no payment method, it means that the user has not paid 
    // and we send back an error saying that payment is required. 
    // After verifications, we will create an orderID using the UUID library.
    // We will calculate the total bill amount by taking the 
    // item quantity * item price which we have as an enum on the backend.
    // We will not have any input for orderStatus and orderDate to keep them as default.
    // We will create an Order with the orderID, individual quantities, 
    // total bill amount, and payment method. 
    // We will save the Order under the user's account.
    // (Hence the orders, array of order, field in accountSchema).
    // Send back a message saying that Order has been successfully made. 
});

// Track the order status of the pizza
router.get('/:id', (req, res) => {
    // GET request parameter should contain an ID (String) 
    // which is the orderID in the Order Schema. 
    // If there is no ID in the parameter, send back an error that there is no ID.
    // Else, use the ID to find the corresponding Order with the matching orderID.
    // Retrieve the orderStatus of the Order.
    // Send back the orderStatus of the Order. 
});

// Get a receipt of an order for up to one year
// Assuming that a script will be run daily to remove any Order 
// that has been in the database for over one year.
router.get('/:date', (req, res) => {
    // GET request parameter (date) is a dateString (String).
    // If there is no dateString in the parameter, send back an error that there is no dateString.
    // Convert the dateString to a Date (Date type).
    // Check if the Date is more than one year past the date today.
    // If the Date is more than one year past the date today, send back an error 
    // that the orderDate requested is beyond one year. 
    // Use the Date to find the corresponding Order with the matching orderDate.
    // Retrieve the Order.
    // Send back the Order. 
});

module.exports = router;


