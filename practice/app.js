var express = require('express')
var todocontroller = require('./controllers/todocontroller');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// setting temlpate engine

app.set('view engine' , 'ejs')

// static files

app.use(express.static('./public'))

// setting controller 
todocontroller(app);

// listen to a port 

app.listen(3000)

