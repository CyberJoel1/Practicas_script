var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var AlumnoRouter = require('./routes/alumnado/Alumno');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', AlumnoRouter);


var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };
  
  app.use(requestTime);
  
  app.get('/', function (req, res) {
    var responseText = 'Hello World!';
    responseText += 'Requested at: ' + req.requestTime + '';
    res.send(responseText);
  });
module.exports = app;
