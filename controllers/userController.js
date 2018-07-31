const User = require('../models/user');


function userProfileEdit(req, res) {
  console.log('Into the user profile edit.........');
  User
    .findById(req.params.id)
    .then(user => res.render('users/edit', { user }))
    .catch(err => res.status(404).send(err));
}

function userProfileUpdate(req, res) {
  console.log('Into the user update .........');
  //you want to use Users because that's the Model and you need it whenever you wanna make changes to the db
  User
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/images/user.id'))
    .catch(err => res.status(500).send(err));
}

function userProfileDelete(req, res) {
  console.log('Into the user profile delete.........');
  Image
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/images'))
    .catch(err => res.status(404).send(err));
}

module.exports = {
  edit: userProfileEdit,
  update: userProfileUpdate,
  delete: userProfileDelete
};
