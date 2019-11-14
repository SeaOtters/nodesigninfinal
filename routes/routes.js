//data for now - so we don't have to have a model (database) y
module.exports = function(app) {
    //routes go in here!
    var currentUser;
    var User = require("../models/user.js")
    var Putinmeme =  require('../models/putinmemes').model
    //a get at the root.  this is run when you go to localhost:3000
app.get('/',function(req, res) {
  User.find({}, function(err,users) {
    console.log(users)
    res.render('login.ejs',{results:users})
  })
});

//a post, this handles anything sent TO the url at localhost:3000/post
app.post('/login', function(req, res) {

  User.findOne({ userName:req.body.username }, function(err,user){
    if(user){
      console.log("Found a user")
      currentUser = user
      res.render("home.ejs", {userObject:user})
    }else{
      var u = new User({userName:req.body.username,password:req.body.password})
      u.save(function(err,user){
        console.log("Made a user:" + user)
        currentUser = user
        res.render("home.ejs",{userObject:user})
      })
    }
  })
});
  
app.post("/addAttributes", function(req,res) {

  User.findOne({userName:currentUser.userName}, function(err,user) {
    console.log(user)
    user.name = req.body.name
    user.age = req.body.age
    user.Putinmeme = new Putinmeme({name: "RitzPutin"})
    user.putinmemes.push(new Putinmeme({name: "RitzPutin"}))
    user.save(function(err,newUser){
      res.render('home.ejs',{userObject:user})
    })
  })
})

app.get('/displayList', function(req, res) {
  User.find({}, function(err,users) {
    console.log(users)
    res.render('displayList.ejs',{results:users})
  })
})

app.get('/spooky', function(req, res) {
    res.render('spooky.ejs')
  });

}

