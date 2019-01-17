const express = require('express');
// console.log(express);
const app = express();
// const port = process.argv[2];

app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>");
})
app.get('/class',(req,res)=>{
    res.send("<p>Hello, friends!</p>")
})
app.get('/test',(req,res)=>{
    res.send("<h2>Testing out Node/Express</h2>")
})

app.listen(3000);