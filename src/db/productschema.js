const mongoose = require("mongoose");

const DetailsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minLength: 10,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
  },
  images: {
    type: [String],
    minLength: 2,
    required: true,
  },
});

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: Boolean,
  details: DetailsSchema,
  phoneNumber: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
