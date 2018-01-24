	var reservationMiddleware = require('./middlewares/reservation'),
    orderMiddleware = require('./middlewares/order'),
    config = require('./config/config'),
    mongoose = require('mongoose'),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

	mongoose.connect('mongodb://samplefsd:ankit939@ds213118.mlab.com:13118/restaurant')
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended : false}));
	app.use(config);

	app.post('/reservation', reservationMiddleware);
	app.post('/order', orderMiddleware);

	app.get('/', function(req, res, next){
		res.send('Your Express Server is Up and running');
	});

	app.listen(3000, function(){
   		console.log('Express Server is listening at Port:3000');
	});


