// Require Mongoose
const mongoose = require('mongoose');

// Require Bcrypt
const bcrypt = require('bcrypt');

// Create db schema for Instagram Users
const instagramUserSchema = new mongoose.Schema({
  imageUrl: String,
  description: String,
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

instagramUserSchema.methods.validatePassword = function(password) {
  //check the password from the form (plaintext)
  //against the hash in the db
  return bcrypt.compareSync(password, this.password);
};

instagramUserSchema.virtual('passwordConfirmation')
  //this is what the virtual will receive
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

instagramUserSchema.pre('validate', function(next) {
  //this is the model
  console.log('Pre-validate hook has happened');
  if(this._passwordConfirmation !== this.password) {
    console.log('Passwords did not match');
    this.invalidate('passwordConfirmation', 'Passwords do not match');
  }
  next(); //we've finished thanks. Mongoose can do the next thing in the lifecycle
});

instagramUserSchema.post('validate', function() {
  //this is the model
  console.log('Post-validate hook has happened');
});

instagramUserSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

// Export the Model
module.exports = mongoose.model('User', instagramUserSchema);
