const express = require ('express');
const env = require('dotenv');
const path = require('path');

env.config(); //Configuring hostname and port from env file
hostname = process.env.HOSTNAME || 'localhost' ;
port = process.env.PORT || 3000;

const app = express();

//Setting up Middleware and routes
app.use(express.static(path.join(__dirname, 'public')));

//Starting a server on port
app.listen(port, (req, res)=>{
    console.log(`server listening on http://${hostname}:${port}`);
});