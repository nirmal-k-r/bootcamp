const express = require('express');
const app = express();
const path = require('path');


const loggingMiddleware = (req, res, next) => {
    console.log(`Received request at ${new Date()}`);
    next(); // Continue to the next middleware or route handler
};

  
// Apply middleware to all routes
app.use(loggingMiddleware);


// Mount routers
const usersRouter=require('./routes/users');
const postsRouter=require('./routes/posts');

app.get('/', (req, res) => {
    postsRouter.test;
    res.send('Welcome to the homepage!');
});

app.use('/users',usersRouter);
app.use('/posts',postsRouter);


const port = 3000;
    app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});