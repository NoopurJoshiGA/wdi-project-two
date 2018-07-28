
//Require Express
const express = require('express');

//Tell Express to use express-ejs-layouts
const expressLayouts = require('express-ejs-layouts');

//Create the app by invoking the express module
const app = express();

//Configure Express to use ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

//Get Routes from the config/routes file
const router = require('./config/routes');
app.use(router);



//8000 is Localhost
const PORT = 8000;

//Tell Express to look for static files in the public folder
app.use(express.static(`${__dirname}/public`));

//Tell Express to look for template files in the views folder
app.set('views', `${__dirname}/views`); //this is the default

//Layouts











//Test app is running on port 8000
app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));
