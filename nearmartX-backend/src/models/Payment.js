const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    order:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
    },
    paymentMode:{
        type: String,
        enum: ["cash", "card", "upi"],
        required: true,
    }
})