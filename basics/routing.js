var http = require('http');
var fs = require('fs');



const server = http.createServer((req,res)=>{
    console.log(req.url)
    switch (req.url) {
        case req.url === '/home' || req.url === '/':
            res.writeHead(200,{'content-type' : 'text/html'})
            fs.createReadStream(__filename + '/index.html').pipe(res)
            break;
        case req.url === '/main':
            res.writeHead(200,{'content-type' : 'text/html'})
            fs.createReadStream(__filename + '/main.html').pipe(res)
    
        default: 
        res.writeHead(400,{'content-type' : 'text/html'},'wrong page')
       
            break;
    }
})

server.listen(3000)