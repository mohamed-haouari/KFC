const Product = require('../models/productSchema');

exports.createProduct = async (req, res, next) => {
    const body = req.body;
    try {
        await Product.create(body);
        res.json({
            status: true,
            message: "success",
          });
    } catch (error) {
        res.json({
            status: false,
            message: error,
          });
    }
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: "Success",
  });
};

exports.getProductById = (req, res, next) => {
  res.json({
    message: "Success",
  });
};

exports.updateProduct = (req, res, next) => {
  res.json({
    message: "Success",
  });
};

exports.deleteProduct = (req, res, next) => {
  res.json({
    message: "Success",
  });
};
