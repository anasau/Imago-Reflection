
require('dotenv').config()
const express = require('express');
const app = express (); 
const mainRouter = require('./routers/router'); 
const usersRouter = require('./routers/users-router')
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const HttpError = require('./models/http-error');


// env doesnt work - need to raise a hr to sort it out 
const PORT =process.env.PORT  ;  
console.log(PORT)

app.use(cors()); 

app.use(bodyParser.json());

app.use('/reflection', mainRouter);
app.use('/auth/users', usersRouter);


app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  res.send(error);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

// connecting to the mongodb db with mongoose 
const mongoConnection= 'mongodb+srv://ana_codeworks:1q2w3e4r@cluster0.cqkmv.mongodb.net/test?retryWrites=true&w=majority';


mongoose.connect(mongoConnection, {useNewUrlParser:true, useUnifiedTopology:true,   useCreateIndex: true, useFindAndModify:false})
  .then((result)=> {
    console.log('connected to db');
    app.listen(PORT,  ()=> { 
      console.log('server running');
    });
  }).catch((e) => { 
    console.log(e); 
  }); 

