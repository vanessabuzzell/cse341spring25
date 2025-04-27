const routes = require('express');
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.vanessaRoute);

routes.get('/joshua', lesson1Controller.joshuaRoute);

module.exports = routes;