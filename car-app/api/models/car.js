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
  title: {
    type: String,
    required: 'the title for the listing is required'
  },
  description: {
    type: String,
    required: false
  }, 
  condition: {
    type: String,
    required: false
  }, 
  price: {
    type: Number,
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
  colour: {
    type: String,
    required: false
  },
  notes: {
    type: String,
    required: false
  },
  contact: {
    type: String,
    required: 'the contact info is required'
  },
  year:{
    type: Number,
    required: 'the year is required'
  },
  km:{
    type: Number,
    required: 'the number of kilometres is required'
  },
  options: [{
      type: String,
      required: false
  }]
}, { versionKey: false });

module.exports = mongoose.model('vehicles', carSchema);
