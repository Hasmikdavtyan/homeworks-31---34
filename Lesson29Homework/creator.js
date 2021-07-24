const mongoose = require('mongoose')
const {mongodb}=require('./config')
var url=mongodb.link
mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const {People}=require('./models/People.js')


  var myobj = [
               {name:'Anna', email:'Anna@gmail.com', tel:'9210053520'},
               {name:'Maria', email:'Maria@gmail.com', tel:'9810098100'},
               {name:'Lara', email:'Lara@gmail.com', tel:'9210053520'},
               {name:'Mery', email:'Mery@gmail.com', tel:'9810098100'},
               {name:'Greta', email:'Greta@gmail.com', tel:'9210053520'},
               {name:'Sirun', email:'Sirun@gmail.com', tel:'9810098100'}

       ]

People.insertMany(myobj,function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.length);
    
  })
