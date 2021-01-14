const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const reflectionSchema =  new Schema ({
    exercise1: {
    type: String,
    required: false 
  },
  exercise2: {
    type: String,
    required: false 
  },  exercise3: {
    type: String,
    required: false 
  }, exercise4: {
    type: String,
    required: false 
  }, exercise5: {
    type: String,
    required: false 
  }, exercise6: {
    type: String,
    required: false 
  }, exercise7: {
    type: String,
    required: false 
  },

}); 

// this creates and database and also provide all the methods which we can use to add / extract data 
const ReflectionDb = mongoose.model('newDb', reflectionSchema); 

module.exports = ReflectionDb; 