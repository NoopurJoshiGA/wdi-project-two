// Require Mongoose
const mongoose = require('mongoose');

// Require Bcrypt
// const bcrypt = require('bcrypt');

// Create db schema for Instagram Users
const instagramUserSchema = new mongoose.Schema({
  imageUrl: String,
  description: String,
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

// Export the Model
module.exports = mongoose.model('User', instagramUserSchema);
