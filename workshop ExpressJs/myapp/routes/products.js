const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load products data
const loadProducts = () => {
  const data = fs.readFileSync(path.join(__dirname, '../products.json'));
  return JSON.parse(data);
};

// Route to get all products
router.get('/', (req, res) => {
  const products = loadProducts();
  res.json(products);
});

// Route to get product by ID
router.get('/:id', (req, res) => {
  const products = loadProducts();
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Route to get total price for quantity of product
router.get('/:id/:qt', (req, res) => {
  const products = loadProducts();
  const product = products.find(p => p.id === req.params.id);
  const quantity = parseInt(req.params.qt, 10);
  if (product && quantity > 0) {
    const totalPrice = product.price * quantity;
    res.json({ totalPrice });
  } else if (!product) {
    res.status(404).send('Product not found');
  } else {
    res.status(400).send('Invalid quantity');
  }
});

// Route to get products with stock greater than or equal to a specified quantity
router.get('/instock/:qt', (req, res) => {
  const products = loadProducts();
  const quantity = parseInt(req.params.qt, 10);
  if (quantity >= 0) {
    const filteredProducts = products.filter(p => p.stock >= quantity);
    res.json(filteredProducts);
  } else {
    res.status(400).send('Invalid quantity');
  }
});

module.exports = router;
