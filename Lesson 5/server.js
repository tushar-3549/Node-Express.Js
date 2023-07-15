const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req,res)=>{
    res.writeHead(202, {'Content-Type':'text/html'});
    res.write("<h1>Tushar Ahmed</h1>");
    res.end();
});

myServer.listen(port, hostname, ()=>{
    console.log(`Server is working Successfully at http://${hostname}:${port}`);
});