const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const  logger = require('morgan');
const socketio = require('socket.io');
const http = require('http');


const  indexRouter = require('./routes/index');
const  usersRouter = require('./routes/users');

const  app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('  new user  is connected');
  
  socket.emit('textMsg', 'hello')
  
  socket.on('msg', message=>{
    io.emit('textMsg', message)
  })

  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});
 
  

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = {
  app: app,
  server:server

}
