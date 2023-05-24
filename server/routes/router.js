const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-Employee', services.add_Employee)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-Employee', services.update_Employee)


// API
route.post('/api/Employees', controller.create);
route.get('/api/Employees', controller.find);
route.put('/api/Employees/:id', controller.update);
route.delete('/api/Employees/:id', controller.delete);


module.exports = route