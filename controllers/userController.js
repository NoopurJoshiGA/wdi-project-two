const User = require('../models/user');


function usersShow(req, res) {
  const userId = req.params.id;
  let _user;
  console.log('tryna show user', userId);
  User
    .findById(userId)
    .then(user => {
      _user = user;
      return user.getPhotos();
    })
    .then(photos => {
      console.log('Photos in the usersShow function', photos);
      res.render('users/show', { user: _user, photos });
    });
}

function usersEdit(req, res) {
  console.log('Into the user profile edit.........');
  User
    .findById(req.params.id)
    .then(user => res.render('users/edit', { user }))
    .catch(err => res.status(404).send(err));
}

// TODO: THIS FUNCTION WORKS BUT NEEDS FIXING
function usersUpdate(req, res) {
  console.log('Into the user update .........');
  //you want to use Users because that's the Model and you need it whenever you wanna make changes to the db
  User
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/users/show'))
    .catch(err => res.status(500).send(err));
}

// function userProfileDelete(req, res) {
//   console.log('Into the user profile delete.........');
//   Image
//     .findByIdAndDelete(req.params.id)
//     .then(() => res.redirect('/images'))
//     .catch(err => res.status(404).send(err));
// }

module.exports = {
  show: usersShow,
  edit: usersEdit,
  update: usersUpdate
  // delete: userProfileDelete
};
