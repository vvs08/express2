import express from 'express'

var server= express();

server.get("/",(req,res)=>{
    res.send("<h1>yo express</h1>")
    res.send("<h1>welcomeo express</h1>")
    res.send("<h1>welcome to expr</h1>")
    
    console.log("Bangya server")
}).listen(3000);

console.log("Chal raha hai 3000 me")

//express is subset of node so express will use res.write()(of node ) and res.send() which is of its own . 
//with res.write() you have to put res.end() just like in node but with res.send() no end is required