/*
*	FILE : cars.js
*	PROJECT : SENG3080 - Group Project
*	PROGRAMMER : Mark Jackson
*              Eric Emerson
*              Rick Bloemert
*	FIRST VERSION : 2021-04-24
*	DESCRIPTION :
*		The schema for cars is defined here
*/

'use strict';
const { Int32 } = require('bson');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
  _id:{
    type: String,
    required: false
  },
  make: {
    type: String,
    required: 'the car make is required'
  },
  model: {
    type: String,
    required: 'the model type is required'
  },
  year:{
    type: Number,
    required: 'the year is required'
  },
  options: [{
      type: String,
      required: false
  }]
}, { versionKey: false });

module.exports = mongoose.model('vehicles', carSchema);