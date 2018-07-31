const Image = require('../models/image');


// Upload a new image and render the form
function imagesNew(req, res) {
  res.render('images/new');
}

// Function to upload the picture and redirect you back to your profile
function imagesCreate(req, res) {
  console.log('this is req.body before we add res =>', req.body);
  console.log('res.locals.user._id =>', res.locals.user._id);
  req.body.createdBy = res.locals.user._id;
  console.log('this is req.body =>', req.body);
  Image
    .create(req.body)
    .then(image => {
      console.log('Uploading image...', image);
      // TODO: REDIRECT TO THE USERS PROFILE PAGE RATHER THAN HOME PAGE
      res.redirect('/index');
    })
    .catch(err => res.status(500).send(err));
}

// Function to display all images in your profile page
// function imagesIndex(req, res) {
//   Image
//     .find()
//     .populate('createdBy')
//     .then(images => {
//       console.log('images index');
//       res.render('users/', { images });
//     });
// }

function imagesShow(req, res) {
  const imageId = req.params.id;
  Image
    .findById(imageId)
    .then(image => res.render('images/show', { image }));
}

function imagesEdit(req, res) {
  Image
    .findById(req.params.id)
    .then(image => res.render('images/edit', { image }))
    .catch(err => res.status(404).send(err));
}

function imagesUpdate(req, res) {
  //you want to use Album because that's the Model and you need it whenever you wanna make changes to the db
  Image
    .findByIdAndUpdate(req.params.id, req.body)
    .then(image => res.redirect(`/images/${image.id}`))
    .catch(err => res.status(500).send(err));
}

function imagesDelete(req, res) {
  Image
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/index'))
    .catch(err => res.status(404).send(err));
}

module.exports = {
  new: imagesNew,
  create: imagesCreate,
  show: imagesShow,
  edit: imagesEdit,
  update: imagesUpdate,
  delete: imagesDelete
};
