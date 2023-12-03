const express = require('express');
const routes = express();

const userController = require('../controllers/userController');

routes.get('/',userController.loadIndex);

module.exports = express.Router;