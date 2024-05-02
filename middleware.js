import express from 'express'

const server= express();

server.use("/about",(req,res,next)=>{
    console.log("Middleware is working")

    if(req.method=="GET")
    res.send("<h1>get invoked</h1>")

    else if(req.method=="POST")
    res.send("<h1>post invoked</h1>")

    next();
})

server.get("/",(req,res)=>{
    res.send("<h1>home</h1>")
})

server.get("/about",(req,res)=>{
    res.send("<h1>about</h1>")
})

server.listen(3000)
console.log("Running in 3000")


// import express from "express";
// const app = express();

// //Application level middleware : for specific route inside app
// app.use("/about",(req,res,next)=>{
//  console.log("Application level middleware invoked");
//  next();
// });

// //Application level middleware : for all routes inside app

// /*app.use((req,res,next)=>{
//  console.log("Application level middleware invoked");
//  next();
// });*/

// /*app.use("/",(req,res,next)=>{
//  console.log("Application level middleware invoked");
//  next();
// });*/

// app.get("/",(req,res)=>{
//  res.send("<h1>/ or /home url invoked</h1>");
// });

// app.get("/about",(req,res)=>{
//  res.send("<h1>/about url invoked</h1>");
// });

// app.listen(3000);
// console.log("server invoked at link http://localhost:3000");

