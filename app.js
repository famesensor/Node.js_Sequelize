const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')

const post = require('./router/post')

const app = express()

// set port number
port = process.env.PORT || 5000;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/post', post);

// set port, listen for requests
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});