// Require Express
const express = require('express');

// Tell Express to use express-ejs-layouts
const expressLayouts = require('express-ejs-layouts');

// Create the app by invoking the express module
const app = express();

// Configure Express to use ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Require Mongoose DB
const mongoose = require('mongoose');

// Require Promise
// Mongoose will return a promise when we make a database request
const Promise = require('bluebird');
mongoose.Promise = Promise;

// Connect to the instagramUsers database
mongoose.connect('mongodb://localhost/instagramUsers');

// Require User Model
const User = require('./models/user');

// Require Flash
const flash = require('express-flash');
app.use(flash());

// Require Body Parser (this ensures our passwords don't appear in the URL)
const bodyParser = require('body-parser');

// body-parser MUST come before the router
app.use(bodyParser.urlencoded({ extended: true }));

// Require Method Override
const methodOverride = require('method-override');

// Get Routes from the config/routes file
const router = require('./config/routes');

//8000 is Localhost
const PORT = 8000;

//Tell Express to look for static files in the public folder
app.use(express.static(`${__dirname}/public`));

//Tell Express to look for template files in the views folder
app.set('views', `${__dirname}/views`); //this is the default

//Require Morgan
const morgan = require('morgan');

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true})); //adds req.body
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// Require Session
const session = require('express-session');

app.use(session({
  secret: 'fnsdkfjsndfksjnf',
  resave: false,
  saveUninitialize: false
}));

//Check the session cookie
app.use((req, res, next) => {
  if(!req.session.userId) return next();
  User
    .findById(req.session.userId)
  //once we've got the user from db
  //make it available on the res object
    .then(user => {
      res.locals.user = user; //res.locals is always passed to the view engine
      res.locals.isLoggedIn = true;
      next();
    });
});

app.use(router);

// Listen app is running on port 8000
app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));
