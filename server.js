//console.log('hello world');

// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT http://localhost:" + PORT);
});

// Requires and sets the HTML routes in this file
require('./app/routing/htmlRoutes.js')(app);

// Requires and sets the API routes in this file
require('./app/routing/apiRoutes.js')(app);
