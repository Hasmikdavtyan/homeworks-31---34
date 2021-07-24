var events = require('events');
var myEmitter = new events.EventEmitter();
let m=0
var handler=()=>{
	console.log(++m);
	if(m==3){
	   myEmitter.removeListener('event3', handler);
    }
}
myEmitter.on('event3',handler );

myEmitter.emit('event3');
// Prints: 1
myEmitter.emit('event3');
// Prints: 2
myEmitter.emit('event3');

// Prints: 3
myEmitter.emit('event3');
// Prints: 4
myEmitter.emit('event3');
// Prints: 5
myEmitter.emit('event3');
// Prints: 6




