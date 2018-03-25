	  var compression = require('compression'),
    	config = require('./config/config'),
    	mongoose = require('mongoose'),
    	express = require('express'),
    	bodyParser = require('body-parser'),
      apiRouter = require('./config/routes');
      jwt    = require('jsonwebtoken'),
    	app = express();
      const port = process.env.PORT || 5000;

    mongoose.connect('mongodb://samplefsd:ankit939@ds229438.mlab.com:29438/donate_hospital')
	
	  app.use(bodyParser.json());

	  app.use(bodyParser.urlencoded({extended : false}));
	  app.use(config.allowCrossDomain);
    app.set('superSecret', config.secret);
    app.use('/', apiRouter);
  	app.use(compression());

	app.use(express.static(__dirname + '/app'));
	app.set('views', __dirname + '/app');
  app.engine('html', require('ejs').renderFile);

	app.all('/*', function(req, res, next) {
    res.render('index.html', { root: __dirname });
  });

	app.listen(port, function(){
   		console.log(`Express Server is listening at Port : ${port}`);
	});


