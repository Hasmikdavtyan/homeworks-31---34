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

let {User, Blog}=require('./models/models.js')

http.createServer(function (req, res) {
  

if (req.url == '/blog') {
  let form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {

async function createAricle(title,body,user) {
  return new Blog({
    title:title,
    body:body,
    user:user
    
  }).save()
}/


(async () => {



    Article = await createAricle(fields.title,fields.content,fields.userId).then((result)=>{
       res.writeHead(200,{'Content-Type':"text/html"});
      console.log(result)
       res.end('created');
    }).catch((err)=>{
      
        console.log(err)
      
    })
 
  })()
})
} else {
      
    User.find().exec((err,result)=>{
      console.log(result)
      let options=""
      result.forEach((item)=>{
          options+=`<option value="${item._id}">${item.name}</option>`
      })
      console.log(options)
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(`<form action="/blog" method="post" enctype="multipart/form-data">
        Title<input type="text" name="title"><br><br>
        Content<textarea name="content">
          
        </textarea><br><br>
        
        User<select name="userId" >${options}</select><br><br>
        <input type="submit" name="">
      </form>`)
    
      res.end();
    })
 

  }
}).listen(3000);
 


// Console will print the message
console.log('Server running at http://127.0.0.1:3000/')
