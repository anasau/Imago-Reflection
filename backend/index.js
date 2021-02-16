
const express = require('express');
const app = express();
const mainRouter = require('./routers/router');
const usersRouter = require('./routers/users-router')
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const HttpError = require('./models/http-error');
require('dotenv').config()


const PORT = process.env.PORT;
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

app.use(cors());
app.use(bodyParser.json());

app.use('/reflection', mainRouter);

app.use('/auth/users', usersRouter)

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  res.send(error);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500).json({ message: error.message || 'An unknown error occurred!' });
});


const mongoConnection = `mongodb+srv://${username}:${password}@cluster0.cqkmv.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(mongoConnection, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then((result) => {
    console.log('connected to db');
    app.listen(PORT, () => {
      console.log('server running');
    });
  }).catch((e) => {
    console.log(e);
  });

