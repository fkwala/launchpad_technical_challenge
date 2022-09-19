const express = require('express');
const router = express.Router();
const Account = require('../models/accountModel');

// Login to the account
router.post('/login', (req, res) => {
    // POST request body contains the Email and Password from the frontend text fields
    // The account corresponding to the unique Email is retrieved from the database
    // The password received is used to match with the account's password.
    // If the password match is successful, router will redirect to the home page and 
    // send back a success message saying that login is successful.
    // If the password match is unsuccessful, send back a error saying that 
    // the Email does not exist in the system/the Password is wrong. 
    // NOTE: can be improved with Firebase Auth/Passport.js
});

// Sign up for an account
router.post('/signup', (req, res) => {
    // POST body contains the Email, Password. 
    // Use the Email given to check if there are any duplicates in the system.
    // If signup is successful, a new account is created and added to the database, 
    // and the router redirects back to the account login page
    // NOTE: can be improved with OTP
});

module.exports = router;


