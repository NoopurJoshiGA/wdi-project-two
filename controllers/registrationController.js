const User = require('../models/user');

function registrationsNew(req, res) {
  // Render the registration form
  res.render('registrations/new');
}

function registrationsCreate(req, res) {
  User
    .create(req.body)
    .then(user => {
      console.log('We have created a user wooo', user);
      res.redirect('/index');
    })
    .catch(err => res.status(500).redirect('/registrations/new'));
}

module.exports = {
  new: registrationsNew,
  create: registrationsCreate
};
