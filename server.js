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

//start routes
//root route to render the index.ejs view
app.get('/', function(req, res) {
	res.render("index");
})
//route for form input to save into db
app.post('/quotes', function(req, res) {
	//create object
	var quote = new Quote({name: req.body.name, quote: req.body.quote});
	//save object using mongoose method
	quote.save(function(err) {
		if(err){
			console.log("something went wrong");
		} else {
			res.redirect('/main');
		}
	})
})
//route to display data from ddb
app.get('/main', function (req, res) {
	Quote.find({}, function (err, quotes) {
		res.render('main', {quotes:quotes});
	});
})
//ends routes

//tell express to listen on port 
app.listen(9999, function() {
	console.log("listening on port 9999");
})
