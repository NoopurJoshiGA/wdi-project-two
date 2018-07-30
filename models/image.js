// Require Mongoose
const mongoose = require('mongoose');

// Create db schema for Instagram Users
const imageSchema = new mongoose.Schema({
  image: { type: String, required: true },
  location: { type: String, required: false },
  description: { type: String, required: false },
  comments: [{ name: String, content: String }],
  likes: { type: Number },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

// Buffer, which allows us to store our image as data in the form of arrays.

// Export the Model
module.exports = mongoose.model('Image', imageSchema);
