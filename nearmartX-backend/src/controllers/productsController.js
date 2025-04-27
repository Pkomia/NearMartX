// const product = require('../models/productModel'); 


exports.getAllProducts = async (req, res) => {
    try {
        // const products = await product.find();
        // res.status(200).json(products);
    } catch (error) {
        // res.status(500).json({ message: error.message });
    }

    res.status(200).json({ message: "Get all products" });
}

exports.getProductById = async (req, res) => {
    // try {
    //     const productId = req.params.id;
    //     const productDetails = await product.findById(productId);
    //     if (!productDetails) {
    //         return res.status(404).json({ message: "Product not found" });
    //     }
    //     res.status(200).json(productDetails);
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }
}