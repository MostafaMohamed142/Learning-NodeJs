// takes a read stream and make a write stream

var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/README.md','utf8')
var myWriteStream = fs.WriteStream(__dirname + '/writeme.txt')

var data = myReadStream.pipe(myWriteStream)

module.exports.data = data;