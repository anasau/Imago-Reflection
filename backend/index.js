const express = require('express');
const app = express (); 
const mainRouter = require('./routers/router'); 
const usersRouter = require('./routers/users-router')
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const HttpError = require('./models/http-error');

const PORT =3001;  


app.use(cors()); 

app.use(bodyParser.json());

// app.use('/auth/', placesRoutes);
app.use('/auth/users', () => {console.log ('we got to app use')}, usersRouter);


app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

// connecting to the mongodb db with mongoose 
const mongoConnection= 'mongodb+srv://ana_codeworks:1q2w3e4r@cluster0.cqkmv.mongodb.net/users?retryWrites=true&w=majority';


mongoose.connect(mongoConnection, {useNewUrlParser:true, useUnifiedTopology:true, })
  .then((result)=> {
    console.log('connected to db');
    app.listen(PORT,  ()=> { 
      console.log('server running');
    });
  }).catch((e) => { 
    console.log(e); 
  }); 

