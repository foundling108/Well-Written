const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const bcrypt = require('bcrypt-nodejs');
require('dotenv').config();

const auth_controller = require('./controller/auth_controller.js');
const card_controller = require('./controller/card_controller');
const unsplash_controller = require('./controller/unsplash_contoller');
const checkForDevelopment = require('./middlewares/checkForDevelopment');

// const checkForSession = require('./middlewares/checkForSession');

const app = express();

app.use(bodyParser.json());
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }));
//app.use( checkForSession )
app.use('/', express.static(__dirname));

massive(process.env.CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
}).catch( err => console.log(err) );
// development middleware
app.use(checkForDevelopment)
// Auth - the login page -
app.post('/api/auth/signup', (req, res) =>  auth_controller.signup(req, res, bcrypt));
app.post('/api/auth/login', (req, res) => auth_controller.login(req, res, bcrypt));
app.get('/api/auth/logout', auth_controller.logout);
app.get('/api/auth/getUser', auth_controller.getUser);



// Create a card controller that checks the users location (home, chapters, etc.) and app.whatevers the method depending on that. //
////// Cards - for each component -

// Chapter cards
 app.post('/api/cards/createChap', card_controller.createChapter);
 app.get('/api/cards/getChap', card_controller.getChapter);
// app.get('/api/cards/getAllChaps', card_controller.getAllChapters);
 app.put('/api/cards/updateChap' ,card_controller.updateChapter);
 app.delete('/api/cards/deleteChap/:id', card_controller.deleteChapter);

// // Location cards
 app.post('/api/cards/createLoc', card_controller.createLocation);
 app.get('/api/cards/getLoc', card_controller.getLocation);
// app.get('/api/cards/getAllLocs', card_controller.getAllLocations);
 app.put('/api/cards/updateLoc' ,card_controller.updateLocation);
 app.delete('/api/cards/deleteLoc/:id', card_controller.deleteLocation);

// // Character cards
 app.post('/api/cards/createChar', card_controller.createCharacter);
 app.get('/api/cards/getChar', card_controller.getCharacter);
// app.get('/api/cards/getAllChars', card_controller.getAllCharacters);
 app.put('/api/cards/updateChar' ,card_controller.updateCharacter);
 app.delete('/api/cards/deleteChar/:id', card_controller.deleteCharacter);

// // Progress cards
 app.post('/api/cards/createProg', card_controller.createProgress);
 app.get('/api/cards/getProg', card_controller.getProgress);
// app.get('/api/cards/getAllProgs', card_controller.getAllProgress);
 app.put('/api/cards/updateProg' ,card_controller.updateProgress);
 app.delete('/api/cards/deleteProg/:id', card_controller.deleteProgress);

////// Cards - for each component -

// Unsplash - the background of the Login page -
app.get('/api/getUnsplash', unsplash_controller.getUnsplash);


const port = process.env.PORT || 4000;
app.listen( port, () => { console.log(`Listening on port ${port}`); });