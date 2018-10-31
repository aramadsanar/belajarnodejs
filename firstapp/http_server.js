const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('masuk pak eko');
        res.end();
    } else {
        res.statusCode = 404;
        res.write("error")
        res.end();
    }
});
// server.on('connection', (socket) => {
//     console.log('nyenggol');
// });
server.listen(3000);

console.log('on port 3000');