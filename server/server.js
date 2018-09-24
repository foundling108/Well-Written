require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const axios = require('axios');


const auth_controller = require('./controller/auth_controller.js');
const card_controller = require('./controller/card_controller.js');
const unsplash_controller = require('./controller/unsplash_contoller.js');

const app = express();

let {
    SERVER_PORT,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    REACT_APP_DOMAIN,
    CONNECTION_STRING,
    SESSION_SECRET,
    ENVIRONMENT
  } = process.env;

app.use(bodyParser.json());

massive(CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
    console.log("db connected")
}).catch( err => console.log("Massive", err) );

app.use( session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));

  app.use((req, res, next) => {
    if (ENVIRONMENT === 'dev') {
      req.app.get('db').users.set_data().then(userData => {
        req.session.user = userData[0]
        next();
      })
    } else {
      next();
    }
  })

app.use( express.static( `${__dirname}/../build` ) );

app.get('/auth/callback', async (req, res) => {
    let payload = {
      client_id: REACT_APP_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
      grant_type: 'authorization_code',
      redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    let responseWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);

    let userData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${responseWithToken.data.access_token}`);

    const db = req.app.get('db');
    const { sub, picture, given_name, family_name } = userData.data;
    console.log('1111', userData.data)

    let userExists = await db.users.find_user([sub]);
    if (userExists[0]) {
      req.session.user = userExists[0];
    } else {
      let createdUser = await db.users.create_user([sub, picture, given_name, family_name]);
      req.session.user = createdUser[0]
    }
    res.redirect('http://localhost:3000/#/home')
  });


// Auth - the login page -
app.get('/api/getUser', auth_controller.getUser);
app.post('/auth/logout', auth_controller.logout);

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



app.listen( SERVER_PORT, () => { console.log(`Listening on port ${SERVER_PORT}`); });

// app.post('/api/auth/signup', (req, res) =>  auth_controller.signup(req, res, bcrypt));
// app.post('/api/auth/login', (req, res) => auth_controller.login(req, res, bcrypt));
// app.get('/api/auth/logout', auth_controller.logout);
// app.get('/api/auth/getUser', auth_controller.getUser);