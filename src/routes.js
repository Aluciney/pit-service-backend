const routes = require('express').Router();
const authMiddleware = require('./middlewares/auth');

const UserController = require('./controllers/UserController');
const AuthenticationController = require('./controllers/AuthenticationController');

// USER
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);

routes.use('/users', [ authMiddleware ]); // MIDDLEWARE
routes.put('/users', UserController.update);
routes.delete('/users', UserController.destroy);

// authentication
routes.post('/authentication/login', AuthenticationController.login);
routes.post('/authentication/login/google', AuthenticationController.login_google);

module.exports = routes;