const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const loggingMiddleware = (req, res, next) => {
    console.log(`Received request at ${new Date()}`);
    next(); // Continue to the next middleware or route handler
};

  
// Apply middleware to all routes
app.use(loggingMiddleware);

// Set up sessions
app.use(session({
    secret: 'hgdjekjwlqdwbhv@j&9030exjHJJhd$jw',
    resave: false,
    saveUninitialized: true
  }));

// Define routes

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

app.get('/info', (req, res,next) => {   //calls ejs template and renders view
    
    //rendering the page for frontend
    const ctx={
        name: 'Intro',
        description: 'This is the intro page',
        display:true,
        version: 5
    }

    res.render('info', ctx);

});


app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

app.get('/contact', (req, res) => {
    res.send('Get in touch with us at contact@example.com');
});

app.get('/old', (req, res) => {
    res.redirect('/');
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
}); 

const port = 3000;
    app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});