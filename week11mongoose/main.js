const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

const db=require('./config');
const User=require('./models/user');

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
    username_submitted=req.body.username;
    password_submitted=req.body.password;

    //console.log(username_submitted,password_submitted);
    const ctx={
        message:"",
    }
    User.findOne({username:username_submitted}).then((user) => {
        if (user.password==password_submitted){
            ctx.message="Login successful";
        }else{
            ctx.message="Login failed";
        }
        res.render('login', ctx);
    });      
});


app.get('/dashboard', (req, res,next) => { 
    
    users=User.find({}).then((users) => {
        // console.log(users);
        ctx={
            users: users
        }
    
        res.render('dashboard', ctx);
    });

});



app.get('/update', (req, res,next) => {   //calls ejs template and renders view
    //rendering the page for frontend
    const ctx={
        message:"",
    }
    res.render('update', ctx);
});

app.post('/update', (req, res,next) => {   //calls ejs template and renders view
    //rendering the page for frontend
    username_submitted=req.body.username;
    new_username_submitted=req.body.newUsername;

    //console.log(username_submitted,password_submitted);
    const ctx={
        message:"",
    }
    User.findOneAndUpdate({username:username_submitted},{username: new_username_submitted}).then((user) => {

        ctx.message="User updated successfully";
        res.render('login', ctx);
    });      
});


app.get('/delete/:id', (req, res,next) => {   //calls ejs template and renders view
   
    id=req.params.id;
    User.findByIdAndDelete({_id:id}).then((user) => {
        // console.log(user);
        ctx={
            message: "User delete successfully",
        }
        users=User.find({}).then((users) => {
            // console.log(users);
            ctx={
                users: users
            }
        
            res.render('dashboard', ctx);
        });
        
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
    newUser=new User(newUser);
    newUser.save();

    const ctx={
        message:"User created successfully",
    }
    res.render('register', ctx);
});



const port = 3000;
    app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});