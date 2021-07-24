const http=require('http')
const url=require('url')
const mongoose = require('mongoose')
const {mongodb}=require('./config')
var url1=mongodb.link
mongoose.connect(url1, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


let  {People} = require('./models/People.js')


http.createServer(async (req,res)=>{
  res.writeHead(200,{"Content-type":"text/html"})
  let urlObj=url.parse(req.url,true)
  pageNumber=urlObj.query.page || 1
typeof(urlObj.query.page)
  page=pageNumber-1

  res.write(`<nav>
    <a href="/">Page1</a>
    <a href="/?page=2">Page2</a>
    <a href="/?page=3">Page3</a>
    <a href="/?page=4">Page4</a>
  </nav>`)

  let result=await People.find({}).limit(1).skip(page)
console.log(result)
    for(let item of result){
      res.write(item.name)
    }
    res.end()

}).listen(3000) 
