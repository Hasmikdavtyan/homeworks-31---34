const mongoose = require('mongoose')
const {mongodb}=require('./config')
var url=mongodb.link
mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


let  {People} = require('./models/People.js')


 myquery = { name:'Sirun' };
People.deleteOne(myquery).exec(function(err, result) {  
    if (err) throw err;  
    console.log(result);  
      
  })   