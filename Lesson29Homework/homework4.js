let mysql = require('mysql');
let http=require('http')
let formidable = require('formidable');
let fs = require('fs');
const mongoose = require('mongoose')
const {mongodb}=require('./config')
let url=mongodb.link
mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let {User}=require('./models/models.js')



http.createServer(function (req, res) {
  

if (req.url == '/user') {
  let form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {

async function createUser(username, email) {
  return new User({
    name:username,
    email:email
    
  }).save()
}


(async () => {
  
  const username = fields.name
console.log(username)
async function findUser(name) {
  return await User.findOne({ name })
}
user=await findUser(username)

  if (!user) {
 await createUser(fields.name,fields.email).then((result)=>{
       res.writeHead(200,{'Content-Type':"text/html"});
      console.log(result)
       res.end('created');
    }).catch((err)=>{
      
        console.log(err._message)
   
    })


  }else{

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="/user" method="post" enctype="multipart/form-data">');
      res.write('<input type="text" name="name"> Name Used'); 
      res.write('<input type="email" name="email"> '); 
      res.write('<input type="submit">'); 
      res.write('</form>');
      res.end();

  }

 
  })()

  
  

})



  

} else {
      

 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="/user" method="post" enctype="multipart/form-data">');
      res.write('<input type="text" name="name">'); 
      res.write('<input type="email" name="email">'); 
      res.write('<input type="submit">'); 
      res.write('</form>');
      res.end();
    



    
  }



}).listen(3000);
 


// Console will print the message
console.log('Server running at http://127.0.0.1:3000/')