// we need file system

var fs = require('fs')

//sync way acts as a block code
var reader =fs.readFileSync('README.md','utf8')
console.log(reader)

//////// write a file sync way
fs.writeFileSync('write.txt',reader)

// async way
fs.readFile('README.md','utf-8',(err,data)=>{
    fs.writeFile('write.txt',data)
})

// fs.unlink('filename') to delete files


