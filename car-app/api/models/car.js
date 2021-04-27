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
  colour: {
    type: String,
    required: false
  },
  notes: {
    type: String,
    required: false
  },
  year:{
    type: Number,
    required: 'the year is required'
  },
  kilometres:{
    type: Number,
    required: 'the number of kilometres is required'
  },
  make:{
    type: String,
    required: 'the make is required'
  },
  model: {
    type: String,
    required: 'the model is required'
  },
  options: [{
    type: String,
    required: false
  }],
  contact: {
    type: String,
    required: true
  }
}, { versionKey: false });

module.exports = mongoose.model('vehicles', carSchema);
