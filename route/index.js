const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.vanessaRoute);
routes.get('/joshua', lesson1Controller.joshuaRoute);
routes.get('/harper', lesson1Controller.harperRoute);

module.exports = routes;