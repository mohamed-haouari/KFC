const express = require('express');
const router = express.Router();
const {createProduct} = require('../controllers/productController');

router.route('/product/new').post(createProduct);
// router.route('/product/all').post(getAllProducts);
// router.route('/product/:id').post(getProductById);
// router.route('/product/update/:id').post(updateProduct);
// router.route('/product/delete/:id').post(deleteProduct);

module.exports = router