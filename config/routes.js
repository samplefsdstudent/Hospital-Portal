var orderMiddleware = require('../middlewares/order'),
    equipmentMiddleware = require('../middlewares/equipment'),
    userMiddleware = require('../middlewares/user'),
    feedbackMiddleware = require('../middlewares/feedback'),
    newsletterMiddleware = require('../middlewares/newsletter'),
    loginMiddleware = require('../middlewares/login'),
    signupMiddleware = require('../middlewares/signup'),
    hospitalMiddleware = require('../middlewares/hospital'),
    express = require('express'),
	apiRouter = express.Router();

	  apiRouter.post('/api/login', loginMiddleware.login);
  	apiRouter.post('/api/signup', signupMiddleware);
    apiRouter.post('/api/feedback', feedbackMiddleware);
    apiRouter.post('/api/newsletter', newsletterMiddleware);

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

  apiRouter.post('/api/password/change', loginMiddleware.changePwd);
  apiRouter.post('/api/account/status', loginMiddleware.changeStatus);
  apiRouter.post('/api/order', orderMiddleware.post);
  apiRouter.post('/api/equipment', equipmentMiddleware.post);
  apiRouter.post('/api/order/status', orderMiddleware.update);
  apiRouter.get('/api/equipments', equipmentMiddleware.getAll);
  apiRouter.get('/api/equipments/:id', equipmentMiddleware.get);
  apiRouter.get('/api/order/:id', orderMiddleware.get);
  apiRouter.get('/api/order/:type/:id', orderMiddleware.getAllType);
  apiRouter.get('/api/orders', orderMiddleware.getAll);
  apiRouter.get('/api/hospitals', hospitalMiddleware.getAll);
  apiRouter.get('/api/hospital/:id', hospitalMiddleware.get);
  apiRouter.get('/api/profile/:email', userMiddleware.get);
  apiRouter.post('/api/profile/update/:email', userMiddleware.update);
  apiRouter.post('/api/hospitals', hospitalMiddleware.update);


   module.exports = apiRouter;
