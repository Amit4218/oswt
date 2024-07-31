// using express server

// const express = require ("express");
// const path = require('path');
// const app = express();
// var port = 3000;

// app.use(express.static(path.join(__dirname + '/public')));

// app.use((req,res)=>{
//     res.status(404);
//     res.send('<h1>Error 404: Resources not found</h1>')
// });

// app.listen(port,()=>{
//     console.log(App is running on port ${port})
// })

// using http

// const http = require('http');

// var port= 3000;

// const server = http.createServer((req , res)=>{
//     //res.write("Hello i am here!!");
//     //res.statusCode=200;
//     res.writeHead(200, 'content-type','text/html');
//     res.end(`<h1>hello world is here</h1>`);
// });

// server.listen(port, ()=>{
//     console.log(`server is listening on port ${port}`);
// });
