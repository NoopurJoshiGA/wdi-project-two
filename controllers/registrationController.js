const User = require('../models/user');

function registrationsNew(req, res) {
  // Render the registration form
  res.render('registrations/new');
  console.log('New registration');
}

function registrationsCreate(req, res) {
  User
    .create(req.body)
    .then(user => {
      console.log('We have created a user wooo', user);
      res.redirect('/index');
    })
    .catch(err => res.redirect('/registrations/new'));
}

module.exports = {
  new: registrationsNew,
  create: registrationsCreate
};
