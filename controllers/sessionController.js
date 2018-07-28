const User = require('../models/user');

function sessionsNew(req, res) {
  // Render the form
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user) {
        res.status(401).render('sessions/new', { message: 'Try that again'});
      }
      //login was successful
      req.flash('primary', `Welcome back ${user.fullName}!`);
      req.session.userId = user.id;
      res.redirect('/index');
    });
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate
};
