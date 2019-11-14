var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Putinmeme = require('./putinmemes')

// create a schema
var userSchema = new Schema({
  name: String,
  userName: String,
  password: String,
  age: Number,
  putinmeme: Putinmeme.schema,
  putinmemes: Array
});

//attach schema to model
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;