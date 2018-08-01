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

// TODO: THIS FUNCTION WORKS IN DB BUT NEEDS FIXING FRONT-END
function usersUpdate(req, res) {
  console.log('Into the user update .........');
  //you want to use Users because that's the Model and you need it whenever you wanna make changes to the db
  User
    .findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.redirect(`/users/${user.id}`))
    .catch(err => res.status(500).send(err));
}

function usersDelete(req, res) {
  console.log(req.params.id);
  User
    .findByIdAndDelete(req.params.id)
    .then(req.session.regenerate(() => res.redirect('/')))
    .catch(err => res.status(404).send(err));
}

function usersIndex(req, res) {
  //THIS IS THE MODEL - goes to mongodb to retreive albums
  User
  //find the Users
    .find()
  //then do stuff...
    .then(users => {
      console.log('going into the index function....', users);
      //loads the index page and spits out albums data
      res.render('users/index', { users });
    });
}

module.exports = {
  show: usersShow,
  edit: usersEdit,
  update: usersUpdate,
  delete: usersDelete,
  index: usersIndex

};
