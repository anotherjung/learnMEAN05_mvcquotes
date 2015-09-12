//MVC3a always reuse this
var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost/Modular1');

var path = require('path');
var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('js') >= 0) {
		require(models_path + '/' + file);
	}
}); 
