const http = require("http");
const fs=require('fs');

const server = http.createServer((req, res) => {

const data=fs.readFileSync(`${__dirname}/data.json`,'utf-8');


 if(req.url=='/'){
    res.end("I am the home page");
   console.log("saroj kumar");
   console.log(data);
 }else if(req.url=='/contact'){
    res.end("I am the contact page")
 }else if(req.url=='/about'){
    res.end("I am the about page")
 }else if(req.url=='/api'){
   res.end(data)
}else{
    res.writeHead(404,{"Content-type":"text/html"})
    res.end("<h1>I am the wrong page and also html tag</h1>")
 }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is started on 8000");
  
});
