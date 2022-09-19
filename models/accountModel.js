const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    accountEmail: {
        type: String,
        required: true
    },
    accountPassword: {
        type: String,
        required: true
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
});

module.exports = mongoose.model('Account', accountSchema);