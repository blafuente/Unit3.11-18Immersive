const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        console.log("Someone requested a page", req.url);
        res.writeHead(400, {'content-type':'text/html'})
        const homePageHTML = fs.readFileSync('index.html');
        res.end(homePageHTML);
    }else if(req.url === '/scripts.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        const scriptFile = fs.readFileSync('scripts.js');
        res.end(scriptFile);
    }else{
        res.writeHead(404, {'content-type':'text/html'})
        res.end("Page Not Found.")
    }
})

server.listen(3500);