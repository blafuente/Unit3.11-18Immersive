// FS is part of Node
const fs = require("fs");

fs.readFile('file1.txt','utf-8',(error,contents)=>{
    // console.log(error);
    // be defualt, the reutrn value of readFile, is a buffer
    // console.log(contents.toString());
    // if(error) throw error
    console.log("Contents of file1.txt...");
    // console.log(contents);
});

const contents = fs.readFileSync('crop.js', 'utf-8');
console.log(contents);
const contents2 = fs.readFileSync('nodejsexercise.js', 'utf-8');
console.log(contents2);