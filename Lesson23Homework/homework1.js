var events = require('events');
var fs=require("fs")
var myEmitter = new events.EventEmitter();

myEmitter.on('Homework', () => {
 console.log(fs.readFileSync("Homeworks.txt","UTF-8"));
});
myEmitter.emit('Homework');

