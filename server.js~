	  var nodemailer = require('nodemailer'),
    	compression = require('compression'),
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

  	let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
	    secure : false,
	    port : 587,
      auth:{
        user: 'samplefsdstudent@gmail.com',
        pass:'ankit939'
      },
	    tls:{
		    rejectUnauthorized : false
	     }
    });

    var mailOptions = {
        from: '"Hospital FSD Project" <samplefsdstudent@gmail.com>',
        to: 'ankitkumarsharma939@gmail.com',
        subject: 'Hospital FSD Server is Up',
        text: 'Hospital FSD Server is Up'
    };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }else{
        console.log(info);
      }
  });

	app.use(express.static(__dirname + '/app'));
	app.set('views', __dirname + '/app');
  app.engine('html', require('ejs').renderFile);

	app.all('/*', function(req, res, next) {
    res.render('index.html', { root: __dirname });
  });

	app.listen(port, function(){
   		console.log(`Express Server is listening at Port : ${port}`);
	});


