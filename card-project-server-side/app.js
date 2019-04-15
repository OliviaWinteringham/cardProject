var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var authenticateRouter = require('./routes/authenticate');
var cardsRouter = require('./routes/cards');
var usersRouter = require('./routes/users');

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://appservice:appservice@cluster0-iba3x.mongodb.net/cards",
  { useNewUrlParser: true }
);

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//// insert authenticate req,res /// TODO: without copying coding.

app.use(express.static(path.join(__dirname, 'public')));

app.use("/authenticate",authenticateRouter);
app.use("/cards", cardsRouter);
app.use("users", usersRouter)

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
  res.render('uhhhh ?? server not werking!');
});

module.exports = app;
