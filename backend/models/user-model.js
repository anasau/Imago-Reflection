const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 }
    // users: [{ type: mongoose.Types.ObjectId, required: true, ref: 'users'}]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);


