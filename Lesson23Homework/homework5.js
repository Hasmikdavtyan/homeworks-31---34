var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
  
    res.writeHead(200,{'content-type':'image/jpeg'});

      var nameArr=files.filetoupload.name.split('.')
       var oldpath =files.filetoupload.path ;
            nameU=new Date().getTime()
      var newpath = __dirname+'\\upload\\'+ nameU+'.'+nameArr[1] ;
 
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;

        const data=fs.readFileSync('./upload/'+ nameU+'.'+nameArr[1]);
        res.end(data);
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/')