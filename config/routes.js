// Require Express
const express = require('express');

// Require Router
const router = express.Router();

// Require Models
const User = require('../models/user');

//Require Controllers
const registrationController = require('../controllers/registrationController');

// Becomes an Express Router
// Tells Express where to find the pages
router.get('/', (req, res) => res.render('pages/_home'));
router.get('/index', (req, res) => res.render('pages/_index'));
router.get('/login', (req, res) => res.render('pages/_login'));

router.route('/registrations/new')
  .get(registrationController.new);

router.route('/registrations')
  .post(registrationController.create);

// router.get('/followers', (req, res) => res.render('pages/_followers'));
// router.get('/newComment', (req, res) => res.render('pages/_newComment'));
// router.get('/newImage', (req, res) => res.render('pages/_newImage'));
// router.get('/profile', (req, res) => res.render('pages/_profile'));

//Export Router
module.exports = router;
