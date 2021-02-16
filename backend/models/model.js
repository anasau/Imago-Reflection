const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const reflectionSchema = new Schema({
  exercise1: {
    type: String,
    required: true
  },
  exercise2: {
    type: String,
    required: true
  },
  exercise3: {
    type: String,
    required: true
  },
  exercise4: {
    type: String,
    required: true
  },
  exercise5: {
    type: String,
    required: true
  },
  exercise6: {
    type: String,
    required: true
  },
  exercise7: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, required: true,
    ref: "User"
  }

}, { timestamps: true });

const Reflection = mongoose.model('Reflections', reflectionSchema);

module.exports = Reflection; 