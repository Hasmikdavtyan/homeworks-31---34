const EventEmitter = require('events').EventEmitter;

class TicketManager extends EventEmitter {
    constructor(rest) {
        super();
        this.rest = rest;
    }

    buy(num) {
        this.rest-=num;
        
    }
}

const ticketManager = new TicketManager(10);

ticketManager.buy(2);


ticketManager.on("count", (args) => {
    console.log("Coint is "+args);
});

ticketManager.emit('count',ticketManager.rest )
