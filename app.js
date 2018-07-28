//Require Express
const express = require('express');

//Create the app by invoking the express module
const app = express();

//8000 is Localhost
const PORT = 8000;







//Test app is running on port 8000
app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));
