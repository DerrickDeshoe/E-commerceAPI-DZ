const mongoose = require("mongoose");

const clothingSchema = new mongoose.Schema({
 clothing_id: String,
  image: String,
  name: String,
  rating: String,
  price: Number,
  old_price: Number,
  discount_percentage: Number,
  clothing_description: String,
  clothing_size: String, 
});

module.exports = mongoose.model('clothing', clothingSchema)