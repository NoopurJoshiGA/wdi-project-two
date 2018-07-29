const Image = require('../models/image');


// Upload a new image and render the form
function imagesNew(req, res) {
  res.render('images/new');
}

// Function to upload the picture and redirect you back to your profile
function imagesPost(req, res) {
  Image
    .create(req.body)
    .then(image => {
      console.log('Uploading image...', image);
      res.redirect('images/index');
    })
    .catch(err => res.status(500).send(err));
}

// Function to display all images in your profile page
function imagesIndex(req, res) {
  Image
    .find()
    .then(images => {
      res.render('images/index', { images });
    });
}

module.exports = {
  new: imagesNew,
  create: imagesPost,
  index: imagesIndex
};
