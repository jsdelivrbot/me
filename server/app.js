const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const favicon = require('serve-favicon');
const firebase = require('firebase-admin');
const logger = require('morgan');
const path = require('path');

const index = require('./routes/index');
const projects = require('./routes/projects');
const apiProjects = require('./routes/api/v1/projects');
const apiProfiles = require('./routes/api/v1/profiles');

const app = express();

const serviceAccount = require('./firebase.key.json');
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://chrisvogt.firebaseio.com'
});

const database = firebase.database();

app.set('views', path.join(__dirname, '../build'));
app.set('view engine', 'ejs');

app.use(cors())

app.use(favicon(path.join(__dirname, '../build', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../build')));

app.use('/', index);
app.use('/projects', projects);
app.use('/api/v1/projects.json', apiProjects);
app.use('/api/v1/profiles.json', apiProfiles);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
