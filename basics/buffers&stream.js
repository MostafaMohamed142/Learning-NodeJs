// buffers are temporary storage spot for a chunk of data that is being transferred
// from one place to another

//the buffer is filled with data and then passed along
// transfer small chunks of data at a time

// streams are streams of data that is being transferred from one place to another


// readable streams allows nodejs to read data from stream

// writable stream allows nodejs to write data on stream

//duplex can to both

//creating read stream

var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + 'README.md','utf8')
var myWriteStream = fs.WriteStream(__dirname +'/writeme.txt')
myReadStream.on('data',(chunk)=>{
    console.log(`chunk is rev ${chunk}`)
    myWriteStream.writ(chunk)
})