// We don't need to npm install http, because it's native!
const http = require('http');
// console.log(http);
// createServe takes one arguement 
// a function to run when someone makes 
// an HTTP connection to this program 
const server = http.createServer((req, res)=>{
    console.log('Someone hit our HTTP Server');
    res.end('<h1>Be Nice & Dream Big! </h1>');
})

server.listen(3000);
