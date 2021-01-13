const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const postsSchema =  new Schema ({
    title: {
    type: String,
    required: true 
  },
  vote: {
    type: Number,
    default: 0
  }, 
  timestamp: { 
    type: Date, 
    default:Date.now()
  }
}  ); 

// this creates and database and also provide all the methods which we can use to add / extract data 
const PostsDb = mongoose.model('newDb', postsSchema); 

module.exports = PostsDb; 