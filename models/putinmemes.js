var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var putinmemeSchema = new Schema({
  name: String,
});

//attach schema to model
var Putinmeme = mongoose.model('Putinmeme', putinmemeSchema);

// make this available to our users in our Node applications
module.exports = {model:Putinmeme,schema:putinmemeSchema};