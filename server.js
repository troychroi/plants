const 	express = require('express'),
		path = require('path'),
		bodyParser = require('body-parser'),
		cors = require('cors'),
		mongoose = require('mongoose'),
		config = require('./config/DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
	() => {console.log('Database is connected')},
	err => {console.log('Cannot connect to the database because ' + err)}
);

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

var server = app.listen(function(){
	console.log('listening on port ' +  port);
});