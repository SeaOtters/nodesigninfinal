var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var cors = require('cors')


//create an instance of Express and allow 
//node to easily grab items send by 
//your view like "req.body.data"
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.json());
app.use(express.static('public'))


require('./routes/routes.js')(app);

mongoose.connect("mongodb+srv:CarrieAnnePhilbin:abstraction@cluster0-j7iad.mongodb.net/test?retryWrites=true&w=majority")


//ok, start the server and be ready!
app.listen(3000);
console.log("Gaming at localhost:3000")


