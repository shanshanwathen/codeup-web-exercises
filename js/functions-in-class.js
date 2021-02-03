"use strict"
// function someFunctionNoParameters(){
//     //inside of here - we tell our function to do some stuff
//     return alert("Hello there, Marco!");
// }
//
// //someFunctionNoParameters();
//
// function someFunctionWithParameter(name){
//     //inside of here - we tell our  function to do some stuff
//     return alert("Hello there, " + name);
// }
//
// var myName = "Shanshan";
// someFunctionWithParameter(myName);
//
// // A function that returns a value >> assign thay value to a variable
//
function increment(num){
    return num + 1;
}

//var result = increment(num: 1);

// var four = increment(3);  //action /implementation of expectation
// var five = increment(increment(3));
// var six = increment(increment(increment(3)));
//
// console.log(four);
// console.log(five);
// console.log(six);

// If I write a new function below: will I be able to pass our increment function inside of it?

function multiplyByTwo(num){
    return num * 2;
}

console.log(multiplyByTwo(increment(3)));

// Anonymous Functions
var honkHorn = function(){
    // do some more stuff
    return "beep beep";
}

console.log(honkHorn());