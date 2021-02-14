const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const reflectionSchema =  new Schema ({
    exercise1: {
    type: String,
    required:true
  },
    exercise2: {
    type: String,
    required:true  
  },
    exercise3: {
    type: String,
    required:true  
  }, 
    exercise4: {
    type: String,
    required:true  
  }, 
    exercise5: {
    type: String,
    required:true  
  }, 
    exercise6: {
    type: String,
    required:true  
  }, 
    exercise7: {
    type: String,
    required:true  
  },

}, {timestamps:true}); 

const ReflectionDb = mongoose.model('updatedDb', reflectionSchema); 

module.exports = ReflectionDb; 