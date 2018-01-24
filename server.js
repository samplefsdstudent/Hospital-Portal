	var reservationMiddleware = require('./middlewares/reservation'),
    orderMiddleware = require('./middlewares/order'),
    compression = require('compression'),
    config = require('./config/config'),
    mongoose = require('mongoose'),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

	mongoose.connect('mongodb://samplefsd:ankit939@ds213118.mlab.com:13118/restaurant')
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended : false}));
	app.use(config);
	app.use(express.static(__dirname + '/app'));
  	app.use(compression());

	app.post('/api/reservation', reservationMiddleware);
	app.post('/api/order', orderMiddleware);

	app.get('/:slag(^api)', function(req, res, next) {
    	res.render('index.html', { root: __dirname });
	});

	app.listen(3000, function(){
   		console.log('Express Server is listening at Port:3000');
	});


