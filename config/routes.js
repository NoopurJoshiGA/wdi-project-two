// Require Express
const express = require('express');

// Require Router
const router = express.Router();

//Require Controllers
const registrationController = require('../controllers/registrationController');
const sessionController = require('../controllers/sessionController');
const imageController = require('../controllers/imageController');
const commentController = require('../controllers/commentController');
const userController = require('../controllers/userController');

function secureRoute(req, res, next) {
  //if your middleware is always going to end then don't need next.
  //If the middleware aint going anywhere then you need next
  if(!req.session.userId) {
    // User is not logged in. Disallow!
    return req.session.regenerate(() => {
      req.flash('danger', 'Please log in to view this page');
      res.redirect('/sessions/new');
    });
  }
  return next();
}

// Becomes an Express Router
// Tells Express where to find the pages
router.get('/', (req, res) => res.render('pages/_home'));
router.get('/index', (req, res) => res.render('pages/_index'));
// router.get('/editProfile', (req, res) => res.render('images/editProfile'));

router.route('/registrations/new')
  .get(registrationController.new);

router.route('/registrations')
  .post(registrationController.create);

router.route('/sessions/new')
  .get(sessionController.new); //show the form

router.route('/sessions')
  .get(sessionController.index)
  .post(sessionController.create);

router.route('/sessions/delete')
  .get(sessionController.delete);

// Show User Profile
// Each User has their own User ID
router.route('/users/:id')
  .get(userController.show);

router.route('/users/:id/edit')
  .get(secureRoute, userController.edit);

router.route('/users/:id')
  .put(userController.update);

router.route('/images/new')
  .get(secureRoute, imageController.new);

router.route('/images')
  // .get(imageController.index)
  .post(imageController.create);

// router.route('/images')
//   .get(imageController.index)
//   .post(imageController.create);



// router.route('/images/:id')
//   // .get(imageController.show)
//   .put(imageController.update)
//   .delete((req, res, next) => {
//     if(req.session.userId) {
//       imageController.delete(req, res, next);
//     } else {
//       res.redirect('/sessions/new', { message: 'Please log in to delete this image'});
//     }
// //   });
//
// router.route('/images/:imageId/')
//   .post(commentController.create);
// //
// // router.route('/images/:imageId/comments/:commentId')
// //   .delete(secureRoute, commentController.delete);
// //
// router.route('/images/:id/edit')
//   .get(secureRoute, imageController.edit);
// //

// router.get('/profile', (req, res) => res.render('images/index'));

// router.get('/followers', (req, res) => res.render('pages/_followers'));
// router.get('/newComment', (req, res) => res.render('pages/_newComment'));


//Export Router
module.exports = router;
