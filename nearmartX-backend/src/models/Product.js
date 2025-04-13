
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:
    {
        type: Number,
        required: true,
    },
    description:
    {
        type: String,
        required: true,
    },
    image:
    {
        type: String,
        required: true,
    },
    category:
    {
        type: String,
        required: true,
    },
    countInStock:
    {
        type: Number,
        required: true,
        default: 0,
    },
    shopkeeper:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
})

module.exports = mongoose.model("Product", ProductSchema);