import express from 'express';

const server= express()

server.get("/",(req,res)=>{
    res.send("<h1>home</h1>")
})

server.get("/about",(req,res)=>{
    res.send("<h1>about</h1>")
})

server.get("/contact",(req,res)=>{
    res.send("<h1>contact</h1>")
})

server.get("/login",(req,res)=>{
    res.send("<h1>login</h1>")
})




server.listen(3000)

console.log("success")