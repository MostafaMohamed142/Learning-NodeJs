// with template engines i can embbed data (javascript code) into html files 
// there packages from template engies like ejs which has a method called render('view name',object) which takes the path of the html files , and data which i to render
// we can create a ejs file which can be used by express to render dynamic data , we can use <%= code %> syntax for accessing data , and we can use <% for accessing javascript code %>
const app = express()
app.set('view model' , 'ejs')

app.get('/profile/:name',(req,res)=>{
    res.render('profile' + {person : req.params.name})
})

// partial templates
// if we wanna render a part of a page across the app , <% include (viewpath) %>