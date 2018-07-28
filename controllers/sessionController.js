const User = require('../models/user');

function sessionsNew(req, res) {
  // Render the form
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        res.status(401).render('sessions/new', { message: 'Try that again'});
      }
      // if login is successful
      req.session.userId = user.id;
      res.redirect('/index');
    });
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate
};
