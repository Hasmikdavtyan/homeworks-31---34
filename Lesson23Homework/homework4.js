var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var random=require('random')

http.createServer(function (req, res) {
  if (req.url == '/insert') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
   
      console.log(fields)
      var nameArr=files.filetoupload.name.split('.')
      console.log(nameArr)

    var nameU=random.int(1e5,1e6);
      var oldpath = files.filetoupload.path;
      var newpath = __dirname+'\\upload\\' + nameU+'.'+nameArr[1];
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="insert" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/')