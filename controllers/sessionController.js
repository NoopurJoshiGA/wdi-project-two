const User = require('../models/user');

function sessionsNew(req, res) {
  // Render the form
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      req.session.userId = user.id;
      res.redirect('/index');
      console.log('login successful');
    });
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate
};
