const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      minLength: [4, 'At least 4 characters required'],
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, 'Price is required']
    },
    stock: {
      type: Number,
      required: [true, 'Stock is required']
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
