const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller.js');


const app = express();
app.use(bodyParser.json());
app.use('/', express.static(__dirname));

console.log(process.env.CONNECTION_STRING)
massive(process.env.CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
}).catch( err => console.log(err) );

app.post('/api/auth/signup', controller.create);
app.get('/api/auth/login', controller.getUser);


const port = process.env.PORT || 4000;
app.listen( port, () => { console.log(`Listening on port ${port}`); });