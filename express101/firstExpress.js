const express = require('express');
// console.log(express);
const app = express();
// const port = process.argv[2];

app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>");
})
app.get('/class',(req,res)=>{
    res.end("<p>Hello, friends!</p>")
})

app.listen(3000);