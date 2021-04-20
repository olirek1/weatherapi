const express = require('express');
const route = express.Router();

const controller = require('../controller/controller');


route.post('/api/cities',controller.create);
route.get('/api/recent', controller.recent);
route.get('/api/mostsearch', controller.mostsearch);


module.exports = route;