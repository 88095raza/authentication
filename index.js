const express = require('express')
const app = express();
const User= require('./models/user');

app.set('views engine','ejs')
app.set('views','views')
// app.set('view engine', 'jade');

app.get('/register',(req,res)=>{
res.render('register');
})
app.get('/secret',(req,res)=>{
res.send('This is secret! you cannot see')
})

app.listen(3000,()=>{
    console.log("serving your app");
})