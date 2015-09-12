//MVC3b require
var mongoose = require('mongoose');

//MVC3c moved from server.js
//start model 
// mongoose.connect('mongodb://localhost/quotes');
var QuotesSchema = new mongoose.Schema({
	name: String,
	quote: String
})
var Quote = mongoose.model('Quote', QuotesSchema);
//ends model