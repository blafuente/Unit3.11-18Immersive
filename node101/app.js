const http = require('http');
// fs = file system
const fs = require('fs')

// req = what the broswer is asking for 
// res = the thing we use to talk back to the browser 
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        console.log("Someone requested a page", req.url);
        // res.end('<h1>Hello</h1>');
        res.writeHead(400,{'content-type':'text/html'})
        const homePageHTML = fs.readFileSync('homepage.html');
        res.end(homePageHTML);
    }else if(req.url === '/main.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        const scriptFile = fs.readFileSync('main.js');
        res.end(scriptFile);
    }else{
        res.writeHead(404, {'content-type':'text/html'})
        res.end("Page not Found.")
    }
 });

server.listen(3030);