(function (){
    "use strict";

    // For loops 2
    //Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

    function showMultiplicationTable(number) {
        for (var i = 1; i <=10; i++) {
            console.log(number + "x" + i + " = " + number * i);
        }
    }

    showMultiplicationTable(7);

    //3
    // Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
    // function isEvenOrOdd() {
    //     for (var i = 1; i <= 10; i++) {
    //         var random = Math.floor(Math.random() * 181 + 20);
    //         if (random % 2 === 0) {
    //             console.log(random + " is even.");
    //         } else {
    //             console.log(random + " is odd.");
    //         }
    //     }
    // }

    function isEvenOrOdd() {
        var randomNumbers = [];
        for (var i = 1; i <= 10; i++) {
            randomNumbers.push(Math.floor(Math.random() * 181 + 20));
        }
        return randomNumbers.every(function(element) {
            (element % 2 === 0) ? console.log(element + "is even.") : console.log(element + " is odd.");
        });
    }

    isEvenOrOdd();

    //3 another way by using while loop
    function evenOrOdd() {
        var i = 1;
        while (i <= 10) {
            var random = Math.floor(Math.random() * (200 - 20 + 1) + 20);
            switch (random % 2) {
                case 0:
                    console.log(random + " is even.");
                    break;
                default:
                    console.log(random + " is odd.");
                    break;
            }
            i++;
        }
    }

    evenOrOdd();

    //4
    // Create a for loop that uses console.log to create the output shown below.
    function printNumber() {
        for (var i = 1; i < 10; i++) {
            console.log(i.toString().repeat(i));
        }
    }

    printNumber();

    //4
    for (var i = 1; i < 10; i++) {
        var output = "";
        for (var j =  1; j <= i; j++) {
           output = output + i.toString();
        }
        console.log(output);
    }

    //5
    // Create a for loop that uses console.log to create the output shown below.
    function minusFive() {
        for (var i = 100; i > 0; i -= 5) {
            console.log(i);
        }
    }

    minusFive();

})();