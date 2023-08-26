const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

config_db=require('./config.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);




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

app.get('/login', (req, res,next) => {   //calls ejs template and renders view
    //rendering the page for frontend
    const ctx={
        message:"",
    }
    res.render('login', ctx);
});

app.post('/login', (req, res,next) => {   //calls ejs template and renders view
    //rendering the page for frontend
    db=config_db.getDb();
    username_submitted=req.body.username;
    password_submitted=req.body.password;

    console.log(username_submitted,password_submitted);
    const ctx={
        message:"",
    }
   
    db.collection('users').find({username:username_submitted}).toArray((err, result) => {
        if (err) {
          console.error('Error reading documents:', err);
          return;
        }
        // console.log('Retrieved documents:', result);
        if (result[0].password==password_submitted){
            ctx.message="Login successful";
        }

        res.render('login', ctx);
        

      });
       
  
});




app.get('/register', (req, res,next) => {   //calls ejs template and renders view
    //rendering the page for frontend
    const ctx={
        message:"",
    }
    res.render('register', ctx);
});

app.post('/register', (req, res,next) => {   //calls ejs template and renders view
    //rendering the page for frontend
    newUser={
        username:req.body.username,
        password:req.body.password,
    }
    db=config_db.getDb();
    db.collection('users').insertOne(newUser, (err, result) => {
        if (err) {
          console.error('Error creating document:', err);
          return;
        }
        console.log('Document created:', result.insertedId);
     });

    const ctx={
        message:"User created successfully",
    }
    res.render('register', ctx);
});



const port = 3000;
    app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});