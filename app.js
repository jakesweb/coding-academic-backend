// entry point for coding academic server
require('./env');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const app = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup cookies
app.use(cookieParser());
app.use(session({ 
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false 
}));

// setup pug for templates
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// imports for application funcationality
app.use(require('./middlewares/users'));
// app.use(require('./controllers'));

// router
app.use('/', require('./router/index'));
app.use('/user', require('./router/user'));

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
