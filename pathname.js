import express from 'express'
import url from 'url'

var url_route="<h1>click below</h1><br></br><a href = '/'>home</a><br></br><a href='/about'>about</a><br></br><a href='/login'>login</a><br></br><a href='/contact'>contact</a>"

const server = express()

server.get("/",(req,res)=>{
    res.send("<h1>hello home</h1>"+url_route)
})

server.get("/about",(req,res)=>{
    res.send("<h1>about hai</h1>"+url_route)
})

server.get("/login",(req,res)=>{
    var info=url.parse(req.url,true).query
    console.log("login="+info.login)
    console.log("password="+info.password)
    res.send("<h1>login kar </h1>"+url_route)
})

server.get("/contact",(req,res)=>{
    res.send("<h1>contact ke liye </h1>"+url_route)
})

server.listen(3000);
console.log("3000 par chal raha hai ")