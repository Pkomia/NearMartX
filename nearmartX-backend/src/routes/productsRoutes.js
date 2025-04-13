const express = require('express');
const router = express.Router();

// Example route to get all products
router.get('/', (req, res) => {
    res.send('Get all products');
});

// Example route to get a specific product by ID
router.get('/:id', (req, res) => {
    res.send(`Get product with ID: ${req.params.id}`);
});

// Example route to create a new product
router.post('/', (req, res) => {
    res.send('Create a new product');
});

// Example route to update a product
router.put('/:id', (req, res) => {
    res.send(`Update product with ID: ${req.params.id}`);
});

// Example route to delete a product
router.delete('/:id', (req, res) => {
    res.send(`Delete product with ID: ${req.params.id}`);
});

module.exports = router;