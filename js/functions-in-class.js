// "use strict"
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
// function increment(num){
//     return num + 1;
// }
//
// //var result = increment(num: 1);
//
// // var four = increment(3);  //action /implementation of expectation
// // var five = increment(increment(3));
// // var six = increment(increment(increment(3)));
// //
// // console.log(four);
// // console.log(five);
// // console.log(six);
//
// // If I write a new function below: will I be able to pass our increment function inside of it?
//
// function multiplyByTwo(num){
//     return num * 2;
// }
//
// console.log(multiplyByTwo(increment(3)));
//
// // Anonymous Functions
// var honkHorn = function(){
//     // do some more stuff
//     return "anonymous beep beep";
// }
//
// console.log(honkHorn());
//
// // git branch practice < git branch -b hello-there-marco!
// // git branch branch-name
// // git checkout branch-name <go to the branch
// //git checkout main
//
// // Setting a default parameter
// function sayHello(name = "Shan"){
//     return alert("Hello there, " + name + ".");
// }

// Scope
// var globalVar = "globalVar: Look, I'm global." //declare a global variable
//
// function scopeExample(){
//     globalVar = "globalVar: I'm inside the function. :)"
//     var localVar = "localVar: Look, I'm local."
//     alert(localVar);
//     alert(globalVar);
// }
//
// scopeExample();
// alert(globalVar); // Local scope can change the global variable if we resign the global variable inside local scope

var iifeVar = "I'm out in the open - I hope nothing bad happens!"
    console.log(iifeVar);

//IIFE: The first way to put your code behind a gateway
(function (){
    // where our JS code excists - use 'local scope' to deny accessibility

    function someFunctionNoParameters(){
    //inside of here - we tell our function to do some stuff
    return alert("Hello there, Marco!");
}

    var iifeVar = "I'm behind the IIFE - everything is okey.";
    console.log(iifeVar);

})();
