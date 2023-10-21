const http = require("http");

const server = http.createServer((req, res) => {
 if(req.url=='/'){
    res.end("I am the home page");
 }else if(req.url=='/contact'){
    res.end("I am the contact page")
 }else if(req.url=='/about'){
    res.end("I am the about page")
 }else{
    res.writeHead(404,{"Content-type":"text/html"})
    res.end("<h1>I am the wrong page and also html tag</h1>")
 }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is started on 8000");
});
