//TODO: Add password hashing and validation

const User = require('../models/user');

function sessionsNew(req, res) {
  // Render the form
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      // ValidatePassword is defined in the user.js file
      if(!user) {
        res.status(401).render('sessions/new', { message: 'Try that again'});
      }
      //login was successful
      req.flash('primary', `Welcome back ${user.fullName}!`);
      req.session.userId = user.id;
      res.redirect('/index');
    });
}

// Function to display information in your profile page
function sessionsIndex(req, res) {
  User
    .find()
    .then(user => {
      res.render('images/index', { user });
    });
}

function sessionsDelete(req, res) {
  return req.session.regenerate(() => {
    req.flash('success', 'You have been logged out');
    res.redirect('/');
  });
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  index: sessionsIndex,
  delete: sessionsDelete
};
