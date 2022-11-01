const http = require('http');
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(`
        {
            "name": "Chris",
            "college": "futo"
        }
    `);
});
server.listen(4000, '127.0.0.1');
console.log("Yes, I  have created a server");
