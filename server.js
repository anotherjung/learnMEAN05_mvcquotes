//require
var express = require("express");
var path = require("path");
//create app object for express
var app = express();
//require bodyParser to handle post data 
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

//start model 
mongoose.connect('mongodb://localhost/quotes');
var QuotesSchema = new mongoose.Schema({
	name: String,
	quote: String
})
var Quote = mongoose.model('Quote', QuotesSchema);
//ends model

app.use(bodyParser.urlencoded());
//static content
app.use(express.static(path.join(__dirname, "./static")));
//setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

	//start MVC1b require for routes
	var routes_setter = require('./server/config/routes.js');
	//invoke the function stored in routes_setter and pass it the "app" variable
	routes_setter(app);
	//ends MVC require

//tell express to listen on port 
app.listen(9999, function() {
	console.log("listening on port 9999");
})
