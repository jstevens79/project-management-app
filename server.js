require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require('passport');
var session = require('express-session');
var Handlebars = require('handlebars');
var HandlebarsIntl = require('handlebars-intl');

HandlebarsIntl.registerWith(Handlebars);

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    helpers: require("./public/js/helpers.js").helpers 
  })
);
app.set("view engine", "handlebars");


require('./config/passport/passport')(passport, db.User);


// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app, passport);

// var syncOptions = { alter: true };

// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function() {

  db.TaskStatus.bulkCreate(
    [
      { id: 1, task_status: "Not Started" },
      { id: 2, task_status: "In Progress" },
      { id: 3, task_status: "Complete" }
    ],
    { ignoreDuplicates: true }
  );

  db.UserRole.bulkCreate(
    [
      { id: 1, "user_role": "admin" },
      { id: 2, "user_role": "user" },
    ],
    { ignoreDuplicates: true }
  );
  
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;