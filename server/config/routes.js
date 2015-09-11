//MVC1a for routes
var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');


//start MVC1c export
module.exports = function(app) {

	//start routes1
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

}//ends MVC export




