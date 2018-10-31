
const Logger = require('./logger');
const logger = new Logger();
const path = require('path');
const os = require('os');
const fs = require('fs');

const EventEmitter = require('events');

logger.on('messagelog', (arg) => {
    //console.log('masuk gan')
    console.log(arg['id'])
})

logger.on('messagelog', (arg) => {
    console.log(arg['utl']);
})

function sayHello(name) {
    //console.log('hello '  + name)
    //console.log(logger)
    logger.log("hahahihi")
    //var p = path.parse(__filename);
    //console.log(p);
    //console.log(os.totalmem())
    //logger.log('hahahiho')
    //setTimeout(() => {
    //    console.log(fs.readdirSync('./'));
    //}, 3000);
    //fs.readdir('$', (err, files) => {
    //    if (err) console.log('Error', err);
    //    else {
    //        console.log('res', files);
    //   }
    //})
}


//while (true) {
    sayHello('Mosh')
//}