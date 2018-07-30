const Image = require('../models/image');


// Upload a new image and render the form
function imagesNew(req, res) {
  res.render('images/new');
}

// Function to upload the picture and redirect you back to your profile
function imagesCreate(req, res) {
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
    .populate('createdBy')
    .then(images => {
      console.log('images index');
      res.render('images/index', { images });
    });
}

function imagesShow(req, res) {
  const imageId = req.params.id;
  Image
    .findById(imageId)
    .then(image => res.render('images/show', { image }));
}

module.exports = {
  new: imagesNew,
  create: imagesCreate,
  index: imagesIndex,
  show: imagesShow
};
