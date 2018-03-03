var orderMiddleware = require('../middlewares/order'),
    blogMiddleware = require('../middlewares/blogs'),
    galleryMiddleware = require('../middlewares/gallery'),
    equipmentMiddleware = require('../middlewares/equipment'),
    testimonialMiddleware = require('../middlewares/testimonials'),
    commentMiddleware = require('../middlewares/comment'),
    userMiddleware = require('../middlewares/user'),
    serviceMiddleware = require('../middlewares/services'),
    feedbackMiddleware = require('../middlewares/feedback'),
    newsletterMiddleware = require('../middlewares/newsletter'),
    loginMiddleware = require('../middlewares/login'),
    signupMiddleware = require('../middlewares/signup'),
    hospitalMiddleware = require('../middlewares/hospital'),
    express = require('express'),
	apiRouter = express.Router();

	apiRouter.post('/api/login', loginMiddleware);
  	apiRouter.post('/api/signup', signupMiddleware);

	apiRouter.use('/api', function(req, res, next) {
  		var access_token = req.body.access_token || req.query.access_token || req.headers['x-access-token'];
  		if (access_token) {
    		jwt.verify(access_token, req.app.get('superSecret'), function(err, decoded) {      
     	 		if (err) {
        			return res.json({ success: false, message: 'Failed to authenticate token.' });    
      			} else {
        			req.decoded = decoded;    
        			next();
      			}
    		});
  		} else {
    		return res.status(403).send({ 
       			success: false, 
        		message: 'Access Forbidden.' 
    		});
  		}
	});

  apiRouter.post('/api/order', orderMiddleware.post);
  apiRouter.post('/api/comments/:blog_id', commentMiddleware.post, commentMiddleware.get);
  apiRouter.post('/api/feedback', feedbackMiddleware);
  apiRouter.post('/api/newsletter', newsletterMiddleware);
  apiRouter.post('/api/equipment', equipmentMiddleware.post);
  apiRouter.post('/api/order/status', orderMiddleware.update);
  apiRouter.get('/api/equipments', equipmentMiddleware.get);
  apiRouter.get('/api/blogs', blogMiddleware);
  apiRouter.get('/api/order/:ref_id', orderMiddleware.get);
  apiRouter.get('/api/order/:type/:id', orderMiddleware.getAll);
  apiRouter.get('/api/gallery', galleryMiddleware);
  apiRouter.get('/api/testimonials', testimonialMiddleware);
  apiRouter.get('/api/comments/:blog_id', commentMiddleware.get);
  apiRouter.get('/api/services', serviceMiddleware);
  apiRouter.get('/api/hospitals', hospitalMiddleware.getAll);
  apiRouter.get('/api/hospital/:id', hospitalMiddleware.get);
  apiRouter.get('/api/profile/:email', userMiddleware.get);
  apiRouter.post('/api/profile/update/:email', userMiddleware.update);
  apiRouter.post('/api/hospitals', hospitalMiddleware.update);


   module.exports = apiRouter;
