const express = require('express');
const app = express();
//const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('view options', {delimiter: '?'});

app.use((req,res,next) => {
//console.log(req.body)
//eq.locals.loggedIn = true;
next()    
})
// mongoose.connect('mongodb://localhost/test',{
//     useNewUrlParser: true 
// });

//require('./models/persondb');
//const person = mongoose.model('person')


app.get('/', (req, res) => {
    console.log(req.method)
    res.render('index',{data : {name : "fred",age: 12}})
  });

// app.post("/about",(req,res) => {
//     console.log(req.body)
//     res.render("about")
// })

// app.get("/stories",(req,res) => {
//     let sId = req.params.id;
//     res.render('stories')
// })
// app.get("/story/:id",(req,res) => {
//     let sId = req.params.id;
//     res.render('story',{storyId : sId})
// })
let port = process.env.PORT || 3000;
app.listen(port);