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

fs.readFile('dronedata.txt',(err,contents)=>{
    // get location from data
    // check for objects that were moving
    // loss signal
    // process precip data, so we can chart last nights rain
})


let fs = {};
fs.readFile('package.json',(err,contents)=>{
    // do cool stuff
})

//Inside of Node!!!
fs.readFile = function(fileToOpen,calbackToRun){
    // go open the SSD and find fileToOpen
    // reads the buffer
    // set buffer from file = data
    // if there was an error, set errorMessage
    callbackToRun(errorMessage, data);
}
// Inside of Node!


fs.readFile('cropdata.js',(err,contents)=>{
    // put it on a webpage 
    // send to Harvard for research
    // organize by food type for a dieticia
})