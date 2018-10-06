// entry point for coding academic server

const express = require('express');
const app = express();

// use /public for static content delivery
app.use(express.static(__dirname + '/public'));

// imports for application funcationality
app.use(require('./middlewares/users'));
app.use(require('./controllers'));

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
