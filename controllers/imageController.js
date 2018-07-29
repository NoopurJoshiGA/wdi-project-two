const Image = require('../models/image');

function newImage(req, res) {
  // Render the registration form
  res.render('images/new');
}

function postImage(req, res) {
  Image
    .create(req.body)
    .then(image => {
      console.log('Uploading image...', image);
      res.redirect('/profile');
    })
    .catch(err => res.status(500).redirect('/images/new'));
}

module.exports = {
  new: newImage,
  create: postImage
};
