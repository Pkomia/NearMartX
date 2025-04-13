
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    products:[
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity:{
                type: Number,
                required: true,
            }
        }
    ],
    totalPrice:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        enum: ["pending", "packed", "shipped", "delivered"],
        default: "pending",
    }
})

module.exports = mongoose.model("Order", OrderSchema);