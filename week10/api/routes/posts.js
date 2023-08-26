const express = require('express');
const router = express.Router(); //creates a router object

router.get('/getPost', (req, res) => {
  // Retrieve and return a list of users
});

router.post('/createPost', (req, res) => {
  // Create a new user based on request data
});

// ... More routes for users ...

module.exports = router;  //exports all routes to the router