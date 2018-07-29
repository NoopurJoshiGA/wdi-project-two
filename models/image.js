// Require Mongoose
const mongoose = require('mongoose');

// Create db schema for Instagram Users
const imageSchema = new mongoose.Schema({
  location: { type: String, required: false },
  description: { type: String, required: false },
  image: { data: Buffer, contentType: String },
  comments: [{ name: String, content: String }]
});

// Buffer, which allows us to store our image as data in the form of arrays.

// Export the Model
module.exports = mongoose.model('Image', imageSchema);
