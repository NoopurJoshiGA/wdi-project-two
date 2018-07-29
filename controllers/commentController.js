const Image = require('../models/image');

function commentsCreate(req, res) {
  Image
    .findById(req.params.imageId)
    .then(image => {
      image.comments.push(req.body);
      return image.save();
    })
    .then(image => res.redirect(`/images/${image.id}`)); //Back to image page
}

module.exports = {
  create: commentsCreate
};
