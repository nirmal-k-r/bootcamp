const express = require('express');
const router = express.Router(); //creates a router object

router.get('/getUser', (req, res) => {
  // Retrieve and return a list of users
});

router.post('/createUser', (req, res) => {
  // Create a new user based on request data
});

router.post('/login', (req, res) => {
//do some stuff
});

router.post('/login', (req, res) => {
    //do some stuff
}

// ... More routes for users ...

module.exports = router;  //exports all routes to the router