/*
*	FILE : carController.js
*	PROJECT : SENG3080 - Group Project
*	PROGRAMMER : Mark Jackson
*              Eric Emerson
*              Rick Bloemert
*	FIRST VERSION : 2021-04-24
*	DESCRIPTION :
*		The methods that connect to the database are written here
*/

'use strict';

const { ObjectId } = require('bson');

var mongoose = require('mongoose'),
  car = mongoose.model('vehicles');

/*get all cars*/
exports.list_all_cars = function(req, res) {
  car.find({}, function(err, car) {
    if (err)
      res.send(err);
    res.json(car);
  });
};

/*get all user car*/
exports.get_user_listing = function(req, res) {
  car.find({listingOwner: req.params.name}, function(err, car) {
    if (err)
      res.send(err);
    res.json(car);
  });
};

/*get all cars of specific make*/
exports.list_all_cars_of_make = function(req, res) {
  car.find({make: req.params.make}, function(err, car) {
    if (err)
      res.send(err);
    res.json(car);
  });
};

/*get all cars of specific make and model*/
exports.list_all_car_of_model = function(req, res) {
  car.find({make: req.params.make, model: req.params.model}, function(err, car) {
    if (err)
      res.send(err);
    res.json(car);
  });
};

/*get all cars of specific a specific option*/
exports.list_all_cars_with_option = function(req, res) {
  car.find({options: req.params.tag}, function(err, car) {
    if (err)
      res.send(err);
    res.json(car);
  });
};

/*create new car listing*/
exports.new_listing = function(req, res) {
  var new_car = new car(req.body);
  new_car._id = new ObjectId();
  new_car.save(function(err, car) {
    if (err)
      res.send(err);
    res.json(car);
  });
};

/*get single car*/
exports.get_listing = function(req, res) {
  car.findById(req.params.carId, function(err, car) {
    if (err)
      res.send(err);
    res.json(car);
  });
};

/*update a car*/
exports.update_listing = function(req, res) {
  car.findOneAndUpdate({_id: req.params.carId}, req.body, {new: true}, function(err, car) {
    if (err)
      res.send(err);
    res.json(car);
  });
};

/*delete a car*/
exports.delete_listing = function(req, res) {
  car.remove({
    _id: req.params.carId
  }, function(err, car) {
    if (err)
      res.send(err);
    res.json({ message: 'car successfully deleted' });
  });
};