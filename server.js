// Dependencies
var express = require("express");
var bodyparser = require("body-parser");
var methodOverride = require("method-override");


// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'));
app.set('view engine', 'handlebars');
var exphbs = require("express-handlebars");

var routes = require("./controllers/burgers_controller")
app.use('/', routes)

app.listen(PORT, function() {
    // console.log("Listening on port:%s", PORT);
    console.log("Server listening on: http://localhost:" + PORT);
  });