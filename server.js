const express = require ('express')
const server = express ()
const nunjucks = require ('nunjucks')
const videos = require("./data/data")

server.use (express.static('public'))
server.set ("view engine","njk")

nunjucks.configure("views",{
    express:server
})

server.listen(5000,function(){
    console.log("hello world, serve is runing save automatic")

    server.get("/in",function(req,res){
        const about={
            avatar_url:"https://avatars.githubusercontent.com/u/150456318?v=4",
            nome:"Pedro Henrique",
            role:" massancode",
            description: "Desenvolvedor",
            link:"http://www.github.com/dashboard",
        }

       return res.render("about",{about})
       
    })
    server.get("/videos",function(req,res){
        return res.render("videos",{items:videos})
    })
})