require('dotenv').config();
const externalUrl = `https://api.unsplash.com/photos/random?query=pattern/&client_id=${process.env.ACCESS_KEY}`
const axios = require('axios');


// let {ACCESS_KEY} = process.env;

module.exports = {
    getUnsplash: (req, res) => {
        
        axios.get(`${externalUrl}`).then(response => {
            res.send(response.data);
        });
    
    }
}