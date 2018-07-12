const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const auth_controller = require('./controller/auth_controller.js');
const unsplash_controller = require('./controller/unsplash_contoller');

const checkForSession = require('./middlewares/checkForSession');

const app = express();

app.use(bodyParser.json());
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }));
app.use( checkForSession )
app.use('/', express.static(__dirname));

massive(process.env.CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
}).catch( err => console.log(err) );

// Auth - the login page -
app.post('/api/auth/signup', auth_controller.signup);
app.post('/api/auth/login', auth_controller.login);
app.get('/api/auth/logout', auth_controller.logout);


// Unsplash - the bacground of the Login page -
app.get('/api/getUnsplash', unsplash_controller.getUnsplash);


const port = process.env.PORT || 4000;
app.listen( port, () => { console.log(`Listening on port ${port}`); });