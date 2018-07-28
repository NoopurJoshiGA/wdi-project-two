//Require Express
const express = require('express');

//Require Router
const router = express.Router();

//Require Models

//Require Controllers


//Becomes an Express Router
//Tells Express where to find the pages
router.get('/', (req, res) => res.render('pages/_home'));
router.get('/index', (req, res) => res.render('pages/_index'));
router.get('/login', (req, res) => res.render('pages/_login'));
router.get('/register', (req, res) => res.render('pages/_register'));
router.get('/followers', (req, res) => res.render('pages/_followers'));
router.get('/newComment', (req, res) => res.render('pages/_newComment'));
router.get('/newImage', (req, res) => res.render('pages/_newImage'));
router.get('/profile', (req, res) => res.render('pages/_profile'));


//Export Router
module.exports = router;
