require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const axios = require('axios');


const auth_controller = require('./controller/auth_controller.js');
const card_controller = require('./controller/card_controller.js');
const unsplash_controller = require('./controller/unsplash_contoller.js');
const checkForSession = require('./middlewares/checkForSession.js');

const app = express();

let {
    SERVER_PORT,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    REACT_APP_DOMAIN,
    CONNECTION_STRING,
    SESSION_SECRET,
    ENVIRONMENT,
    PROTOCOL
  } = process.env;
  
  app.use( session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false
    }));

app.use(bodyParser.json());
app.use(checkForSession);

massive(CONNECTION_STRING)
.then( db => {
    app.set('db', db)
    console.log("db connected")
}).catch( err => console.log("Massive", err) );


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
      redirect_uri: `${PROTOCOL}://${req.headers.host}/auth/callback`
    }
    let responseWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);

    let userData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${responseWithToken.data.access_token}`);

    let isPremium = false;

    const db = req.app.get('db');
    const { sub, picture, given_name, family_name } = userData.data;
   
    let userExists = await db.users.find_user([sub]);
    if (userExists[0]) {
      req.session.user = userExists[0];
    } else {
      let createdUser = await db.users.create_user([sub, picture, given_name, family_name, isPremium]);
      req.session.user = createdUser[0]
    }
    res.redirect('/#/home')
  });


// Auth - the login page -
app.get('/api/getUser', auth_controller.getUser);
app.post('/auth/logout', auth_controller.logout);

app.get('/api/displayUser', auth_controller.displayUser);

// Create a card controller that checks the users location (home, chapters, etc.) and app.whatevers the method depending on that. //
////// Cards - for each component -

// Chapter cards
app.get('/api/getChapters', card_controller.getChapters);
app.put('/api/saveChapters/:id', card_controller.saveChapters);
app.delete('/api/deleteChapters/:id', card_controller.deleteChapters);

// // Location cards
app.get('/api/getLocations', card_controller.getLocations);
app.put('/api/saveLocations/:id', card_controller.saveLocations);
app.delete('/api/deleteLocations/:id', card_controller.deleteLocations);

// // Character cards
app.get('/api/getCharacters', card_controller.getCharacters);
app.put('/api/saveCharacters/:id', card_controller.saveCharacters);
app.delete('/api/deleteCharacters/:id', card_controller.deleteCharacters);

// // Progress cards
app.get('/api/getProgress', card_controller.getProgress);
app.put('/api/saveProgress/:id', card_controller.saveProgress);
app.delete('/api/deleteProgress/:id', card_controller.deleteProgress);

////// Cards - for each component -

// Unsplash - the background of the Login page -
app.get('/api/getUnsplash', unsplash_controller.getUnsplash);



app.listen( SERVER_PORT, () => { console.log(`Listening on port ${SERVER_PORT}`); });