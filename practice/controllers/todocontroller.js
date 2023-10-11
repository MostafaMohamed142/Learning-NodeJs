var bodyParser = require('body-parser')

var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://test:test@cluster0.axo2iv0.mongodb.net/')
// create a schema
var todoSchema = new mongoose.Schema({
    item:String
})
const Todo=new mongoose.model("Todo",todoSchema)
// var itemOne = Todo({
//     item: 'code'
// }).save()
//var datas = [{item:'run'},{item:'make bed'} , {item:'code'}]
var urlencoder = bodyParser.urlencoded({extended:false})
module.exports = function(app){
    app.get('/todo', async (req, res) => {
        try {
          const data = await Todo.find({});
          res.render('todo', { todos: data });
        } catch (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        }
      });

      app.post('/todo',urlencoder, async (req, res) => {
        try {
          const newTodo = await new Todo(req.body).save();
          res.json(newTodo);
        } catch (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        }
      });
      app.delete('/todo/:item', async (req, res) => {
        try {
          const itemToDelete = req.params.item.replace(/\-/g, " ");
          const data = await Todo.deleteOne({ item: itemToDelete });
          console.log('any')
          res.json(data);
        } catch (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        }
      });
}