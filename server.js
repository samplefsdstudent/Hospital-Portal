	  var orderMiddleware = require('./middlewares/order'),
      blogMiddleware = require('./middlewares/blogs'),
      galleryMiddleware = require('./middlewares/gallery'),
      equipmentMiddleware = require('./middlewares/equipment'),
      testimonialMiddleware = require('./middlewares/testimonials'),
      commentMiddleware = require('./middlewares/comment'),
      userMiddleware = require('./middlewares/user'),
      serviceMiddleware = require('./middlewares/services'),
      feedbackMiddleware = require('./middlewares/feedback'),
      newsletterMiddleware = require('./middlewares/newsletter'),
      loginMiddleware = require('./middlewares/login'),
      signupMiddleware = require('./middlewares/signup'),

      nodemailer = require('nodemailer'),
    	compression = require('compression'),
    	config = require('./config/config'),
    	mongoose = require('mongoose'),
    	express = require('express'),
    	bodyParser = require('body-parser'),
    	app = express();
      const port = process.env.PORT || 5000;

    mongoose.connect('mongodb://samplefsd:ankit939@ds229438.mlab.com:29438/donate_hospital')
	
	  app.use(bodyParser.json());
	  app.use(bodyParser.urlencoded({extended : false}));
	  app.use(config);
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

	app.post('/api/order', orderMiddleware.post);
  app.post('/api/comments/:blog_id', commentMiddleware.post, commentMiddleware.get);
  app.post('/api/feedback', feedbackMiddleware);
  app.post('/api/newsletter', newsletterMiddleware);
  app.post('/api/equipment', equipmentMiddleware.post);
  
  app.get('/api/equipments', equipmentMiddleware.get);
  app.get('/api/blogs', blogMiddleware);
  app.get('/api/order/:ref_id', orderMiddleware.get);
  app.get('/api/gallery', galleryMiddleware);
  app.get('/api/testimonials', testimonialMiddleware);
  app.get('/api/comments/:blog_id', commentMiddleware.get);
  app.get('/api/services', serviceMiddleware);

  app.post('/api/login', loginMiddleware);
  app.post('/api/signup', signupMiddleware);
  app.get('/api/profile/:email', userMiddleware.get);
  app.post('/api/profile/update:/:email', userMiddleware.update);

	app.use(express.static(__dirname + '/app'));
	app.set('views', __dirname + '/app');
  app.engine('html', require('ejs').renderFile);

	app.all('/*', function(req, res, next) {
    res.render('index.html', { root: __dirname });
  });

	app.listen(port, function(){
   		console.log(`Express Server is listening at Port : ${port}`);
	});


