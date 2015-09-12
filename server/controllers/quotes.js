//MVC2a controllers
var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

//MVC2b export
module.exports =  {
	show: function(req, res) {
		Quote.find({}, function(err, quotes) {
			res.render('main', {quotes: quotes});
		})
	},
	create: function(req, res) {
		var quote = new Quote({name: req.body.name, quote: req.body.quote});
		quote.save(function(err) {
			if(err) {
				console.log("yo quotes.js create");
			} else {
				res.redirect('/main');
			}
		})
	}
}