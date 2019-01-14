// 1. Write a function that takes a callback (function) as a parameter. Run that function inside of your function.

const firstFunc = function firstFunction(){
    console.log("Hello Friends!");
}

function secondFunction(callback){
    callback();
}

secondFunction(firstFunc);

// 2. Add an arguement "n" to your callback. Print off the value of n inside of the function.
const thirdFunc = function thirdFunction(n){
    console.log(n);
}
function fourthFunc(callback){
    callback(11);
}
fourthFunc(thirdFunc);

// 3. Write a function that takes a parameter. Check to see what datatype the parameter is. 
// If it's a function, run it. If it's an object, print off it's properties. 
// If it's an array, print off the [0] element. If it's something else, just print it.
let myArray = ["Hello", 11, "Brian"];
console.log(typeof(myArray))
console.log(Array.isArray(myArray));
function checkFunc(parameter){
    p = typeof(parameter)
    if(p === "function"){
        console.log("This is a function, run it")
    }else if(p === "object"){
        console.log("This is an object", parameter);
    }else if(Array.isArray(parameter) === true){
        console.log("This is an Array, element 0 =", myArray[0]) 
    }else{
        console.log(typeof(parameter));
    }
}
checkFunc(firstFunc);
checkFunc(myArray);


// Write a function that accepts two parameters (you may add a third to differentiate type). 
// The first is an array, and the second is a function. 
// The function should look through the array for the first thing that matches the condition 
// of the function passed. If a match is not found, return false.
arr = ["Nike", "Adidas", "UnderArmour"];
for(i = 0; i < arr.length; i++){
    console.log(arr[i])
}


let findElementArray = [1, 3, 5, 8, 9, 10];
function x(){
    for(i = 0; i < findElementArray.length; i++){
        if(findElementArray[i]%2 === 0){
            console.log(findElementArray[i]);
        }
    }
}

function exercise4(parameter1, parameter2){
    
}