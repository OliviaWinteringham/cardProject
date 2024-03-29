const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require("cors");

var indexRouter = require("./routes/index");
const cardsRouter = require('./routes/cards');

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://appservice:appservice@cluster0-iba3x.mongodb.net/cardProject",
  { useNewUrlParser: true }
);


const app = express();


// This middleware is to solve the CORS issues
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


app.use("/", indexRouter);
app.use("/cards", cardsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("server, server, server")
});

module.exports = app;
