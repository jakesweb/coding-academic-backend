// entry point for coding academic server
require("./env");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const app = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// public folder access
app.use(express.static("public"));

// setup cookies
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// configure cors
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// setup pug for templates
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// imports for application funcationality
// app.use(require('./controllers'));

// router
app.use("/", require("./router/index"));
app.use("/user", require("./router/user"));
app.use("/admin", require("./router/admin"));

app.listen(process.env.PORT || 3001, function() {
  console.log("Listening on port 3001");
});
