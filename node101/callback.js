// a callback is a function for some other function to run. 
// a function to be called after by another function

// In JaveScript, functions are first-class objects.
// That means... you can do almost anything with
// a function that you can do WITH any object.
// - pass them around 
// - assign it to a variable 
// - overwrite it
function x() {}
console.log(typeof(x))

const myFunction = function(n){
    console.log(n);
}
// console.log(myFunction);

function myOtherFunction(callback){
    callback(5);
}

myOtherFunction(myFunction);

$.getJSON(url,(data)=>{

})
// somewhere in the bowels of jQuery is this...
window.$ - {};
$.getJSON = function(url, callback){
    // jQuery does something cool with url (xmlhttprequest)
    // it gets some data back. 
    // it calls the data myData 
    callback(myData)
}

// const http = {}
// http.createServer = function(callback){
//     handle the http traffic
//     do a bunch of networking stuff
//     now  I'm done nad i have a req object
//     and a res object. can you give me that 
//     code you wanted me to run now?
//     callback(req, res);
// }