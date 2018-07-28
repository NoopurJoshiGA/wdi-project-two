// Require Mongoose
const mongoose = require('mongoose');

// Create db schema for Instagram Users
const instagramUserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

// Export the Model
module.exports = mongoose.model('User', instagramUserSchema);
