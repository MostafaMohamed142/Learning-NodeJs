var http = require('http')
var data = require('./pipes')
var server = http.createServer((req,res)=>{
    console.log('request url is'+ req.url)
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.end(data)
})
server.listen(3001,'127.0.0.1')
console.log('server is now listening to 3001')

// request/response header {content-type,status}