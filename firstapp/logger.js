//console.log(__filename);
//console.log(__dirname);
var url = 'http://mylogger.io/log';
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        //Send an http request
        console.log(message);
        this.emit('messagelog', {id: 1, utl: 'efewfw'});
    }   
}


//both not visible from outside

//exporting
module.exports = Logger;