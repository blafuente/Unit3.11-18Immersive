let arr = [
    {
      name: "Brian",
      favSnack: 'Cookies'
    },
    {
      name: "Rob",
      favSnack: "cookies"
    },
    {
      name: "Greg",
      favSnack: "TrailMix"
    }
   ];
  
  arr.push({
    name: 'Max',
    favSnack: 'pretzels'
  });
  
//   console.log(arr);

for(let i = 0; i < arr.length; i++){
    // console.log(arr[i].favSnack);
    let array = arr[i].favSnack.slice();
    console.log(array);
}
  

//   function displayNames(arr){
//       for(let i = 0; i < arr.length; i++){
          
//       }
//   }
  
//   document.querySelector('h1').textContent = "something else";
  