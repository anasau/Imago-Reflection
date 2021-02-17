
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
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
const DB_NAME =process.env.DB_NAME

app.use(cors());
app.use(bodyParser.json());

app.use('/reflection', mainRouter);

app.use('/auth/users', usersRouter)


const mongoConnection = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.cqkmv.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(mongoConnection, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then((result) => {
    console.log('connected to db');
    app.listen(PORT, () => {
      console.log('server running');
    });
  }).catch((e) => {
    console.log(e);
  });

