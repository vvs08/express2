import express from 'express'

var route = "<h1>click below to redirect that link </h1><br></br><a href='/'>home</a><br></br><a href ='/about'>about</a><br></br><a href='/login'>login</a><br></br><a href='/contact'>contact</a>"

const server = express();

server.get("/",(req,res)=>{
    res.send("<h1>welcome to home</h1>"+route)
})

server.get("/about",(req,res)=>{
    res.send("<h1>welcome to about</h1>"+route)
})

server.get("/contact",(req,res)=>{
    res.send("<h1>yoyo contact</h1>"+route)
})

server.get("/login",(req,res)=>{
    res.send("<h1>Login kar , GET method invoked</h1>"+route)
})

server.post("/login",(req,res)=>{
    res.send("<h1>Login kar , POST method invoked </h1>"+route)
})

server.patch("/login",(req,res)=>{
    res.send("<h1>Login kar , PATCH method invoked </h1>"+route)
})

server.delete("/login",(req,res)=>{
    res.send("<h1>Login kar , DELETE method invoked </h1>"+route)
})



server.all("*",(req,res)=>{
    res.send("<h1>anonymous</h1>"+route)
})

server.listen(3000)

console.log("3000 par chal raha hai ")