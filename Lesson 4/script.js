const http = require("http");

/* http.createServer((req, res)=>{
    res.end("Welcome to our first server !");
}).listen(3000); */

const myServer = http.createServer((req, res)=>{
    res.end("Welcome to our first server !");
});
myServer.listen(3000, ()=>{
    console.log("Server is working Successfully.");
})