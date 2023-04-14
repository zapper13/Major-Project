/* This code defines a Mongoose schema for a product with properties such as name, description, price,
countInStock, and imageUrl. It then creates a Mongoose model for the schema and exports it for use
in other parts of the application. This code is likely part of a larger project that involves
creating, reading, updating, and deleting products in a database. */

const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;