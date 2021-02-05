(function (){
    "use strict";

    console.log("It's time for some conditionals!!");

    var myAge = Number(prompt("How old are you?"));
    var requiredAge = 13;
    console.log("Ok, you are " + myAge + " years old.")

    // This is an if statement
    if (myAge >= requiredAge) {
        alert("Congrats, you can make a social media account!");
    }


    // This is an if/else statement
    if (myAge >= requiredAge) {
        alert("Congrats, you can make a social media account!");
    } else {
        alert("You are not old enough to make an account!");
    }

    // Ternary operator
    (myAge >= requiredAge) ? console.log("You can make a social media account!") : console.log("You are not old enough to make an account!");


    // This is a switch statement
    switch(true) {
        case (myAge === requiredAge):
            alert("You are just old enough to make an account.");
            break;
        case (myAge > requiredAge):
            alert("Congrats, you can make a social media account!");
            break;
        default:
            alert("You are not old enough to make an account!");
            break;
    }

    // This is an if/else if/else statement
    var favoriteColor = prompt("What's your favorite color?");
    if (favoriteColor === "red") {
        alert("Oops, red if not my favorite color.");
    } else if (favoriteColor === "blue") {
        alert("Blue is my favorite color too!!");
    } else if (favoriteColor === "purple") {
        alert("Purple is my second favorite color!");
    } else {
        alert("We don't have the same favorite color :(");
    }

    // This is a switch statement
    switch (favoriteColor) {
        case "red":
            alert("Oops, red if not my favorite color.");
            break;
        case "blue":
            alert("Blue is my favorite color too!!");
            break;
        case "purple":
            alert("Purple is my second favorite color!");
            break;
        default:
            alert("We don't have the same favorite color :(");
            break;
    }


})();