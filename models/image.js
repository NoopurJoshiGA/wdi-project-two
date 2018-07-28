// Require Mongoose
const mongoose = require('mongoose');

// Create db schema for Instagram Users
const imageSchema = new mongoose.Schema({
  location: { type: String },
  description: { type: String },
  image: { type: String, required: true },
  comments: [{ name: String, content: String}]
});

// Export the Model
module.exports = mongoose.model('Image', imageSchema);
