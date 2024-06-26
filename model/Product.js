const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'input name of product'],
    minlength: [3, 'name of product should be at least 3 characters']
  },
  price: {
    type: String,
    required: [true, 'price is required'],
  },
  picture: {
    type: String,
    required: [true, 'no image input']
  }
})

module.exports = mongoose.model("Product", ProductSchema);