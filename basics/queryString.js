// what is query strings ? addtional data passed to a url to be passed to a new http request


app.get('/profile',function(req,res){
    res.render('proifle' , {qs: req.query})
})

// then i can access data using <%= qs %>