var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require('path');


//Sets up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Requiring our models for syncing. This is for converting app to use sequlize in the optional hw.
//var db = require("./models");

//Static directory. Serves static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");



//Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

//Starting Express App
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});