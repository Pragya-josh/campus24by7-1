import http from 'node:http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('IISNode is working correctly! Node version: ' + process.version + '\n');
});

const port = process.env.PORT || 3000;
server.listen(port);
console.log('Diagnostic server running on port:', port);
