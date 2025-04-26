const http = require('http');

const server = http.createServer((request,response)=>
{
    response.end("Hello world\n");
});

server.listen(9000,()=> 
{
    console.log("Server is running");
});