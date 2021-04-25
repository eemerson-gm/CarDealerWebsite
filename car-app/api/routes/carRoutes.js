/*
*	FILE : carRoutes.js
*	PROJECT : SENG3080 - Group Project
*	PROGRAMMER : Mark Jackson
*              Eric Emerson
*              Rick Bloemert
*	FIRST VERSION : 2021-04-24
*	DESCRIPTION :
*		The routes that the api travels are defined here. 
*/

'use strict';
module.exports = function(app) {
  var carList = require('../controllers/carController');
  
  /*get all listings*/
  app.route('/cars')
    .get(carList.list_all_cars);

  /*get all cars of a specific make*/
  app.route('/cars/:make')
    .get(carList.list_all_cars_of_make);

  /*get all cars of a specific make and model*/
  app.route('/cars/:make/:model')
    .get(carList.list_all_car_of_model);

  /*get all cars with a specific option*/
  app.route('/cars/options/:tag')
    .get(carList.list_all_cars_with_option);

  /*get/update/delete a specific car listing*/
  app.route('/cars/listing/:id')
    .get(carList.get_listing)
    .put(carList.update_listing)
    .delete(carList.delete_listing);

  /*create a new listing cor a car*/
  app.route('/cars/listing/new')
    .post(carList.new_listing);

};
