var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/crowdy.server.routes');

module.exports.init = function() {
//connect to database
//var db = mongoose.connect(config.db.uri);

//initialize app
var app = express();

//enable request logging for development debugging
app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.json());

app.use("/", express.static('client'));

//TODO
//app.use('/api/listings', listingsRouter);

app.get('/*', function (req, res, next) {
  res.redirect('./crowdy.html');
});

return app;

};
