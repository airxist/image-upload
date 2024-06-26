const express = require('express');
const router = express.Router();
const {
  getProducts,
  createProduct
} = require('../controllers/products')
const uploadImage = require('../controllers/uploadController')

router.route('/').get(getProducts).post(createProduct)
router.post('/upload', uploadImage);

module.exports = router