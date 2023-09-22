var events = require('events')


var myEmitter = new events.EventEmitter()

myEmitter.on("event",function(msg){
    console.log(msg)
})

myEmitter.emit('event','this is mostafa hi');

/////////////////////////////

var util = require('util')

var Person = function(name){
    this.name = name
}

util.inherits(Person,events.EventEmitter)

const mostafa = new Person('mostafa')
const ahmed = new Person('ahmed')

var people = [mostafa,ahmed]

people.forEach((person)=>{
    person.on('speak',(msg)=>{
        console.log(person.name + 'said' + msg)
    })
})
ahmed.emit('speak' , 'this is ahmed')
