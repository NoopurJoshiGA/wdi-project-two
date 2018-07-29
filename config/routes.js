// Require Express
const express = require('express');

// Require Router
const router = express.Router();

// Require Models
const User = require('../models/user');
const Image = require('../models/image');

//Require Controllers
const registrationController = require('../controllers/registrationController');
const sessionController = require('../controllers/sessionController');
const imageController = require('../controllers/imageController');

// Becomes an Express Router
// Tells Express where to find the pages
router.get('/', (req, res) => res.render('pages/_home'));
router.get('/index', (req, res) => res.render('pages/_index'));
router.get('/profile', (req, res) => res.render('pages/_profile'));

router.route('/registrations/new')
  .get(registrationController.new);

router.route('/registrations')
  .post(registrationController.create);

router.route('/sessions/new')
  .get(sessionController.new); //show the form

router.route('/sessions')
  .post(sessionController.create);

router.route('/images/new')
  .get(imageController.new);

router.route('/images')
  .post(imageController.create);

// router.get('/followers', (req, res) => res.render('pages/_followers'));
// router.get('/newComment', (req, res) => res.render('pages/_newComment'));


//Export Router
module.exports = router;
