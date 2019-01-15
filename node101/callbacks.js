function squareIt(number, callback){ // 15, triple 
    // doStuff...
    //  console.log(callback(x,y)**2);
    let square = number ** 2; // 15 ** 2, 225
    return callback(square) // triple(225) = 675
  }
  
  function triple(something){ // 225
    return something * 3; // 675
  }
  
  function brokenTripple(something){ //something = 225
      return something.toString() + something.toString() + something.toString(); // "225" * 3 = "225225225"
  }
  
  function multiplyEm(a,b){
     return a*b;
  }
  
  let num = multiplyEm(3, 5); // 15
//   let result = squareIt(num, triple); // num: 15, triple: function // 675
//   console.log(result); // 675
  let result = squareIt(num, brokenTripple); //squareIt(15, function)
  console.log(result); // 225225225