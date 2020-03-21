'use-strict'

var express = require('express')

var app = express()
var port = process.env.PORT || 3000

app.listen(port)
var mongoose = require('mongoose'),
api_model = require('./api/models/model'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/db', { useNewUrlParser: true, useUnifiedTopology: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

process.on('exit', () => {
    server.close()
    mongoose.connection.close();
})

process.on('uncaughtException', () => {
    app.listen(port).close()
    mongoose.connection.close();

})

process.on('unhandledRejection', () => {
    app.listen(port).close()
    mongoose.connection.close();

})

process.on('SIGTERM', () => {
    app.listen(port).close()
    mongoose.connection.close();

})

process.on('SIGINT', () => {
    app.listen(port).close()
    mongoose.connection.close();

})

console.log("my api start on: " + port)