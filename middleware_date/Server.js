const PORT = process.env.PORT || 3000 
const express = require ('express');
const { append } = require('express/lib/response');
const server = express()
const path = require ('path')
const time = new Date();
const hour = time.getHours();
const day = time.getDay();
 console.log('hour',hour)
 console.log('day',day) 

 server.use(function(req,res,next)
 { (hour>=9 && hour<=17 && day>0 && day<6 ) 
    ? next()
    : res.sendFile(path.join(__dirname,"public","End.html"))
})
 server.use(express.static(path.join(__dirname,'Public')
 )) 
server.listen(PORT,(err)=> err
    ? console.log(err)
    : console.log(`the server is running from the port : ${PORT}`))