(function (){
    "use strict";

    // Break and continue
    function oddNumber() {
        // for (var i = 1; i <= 25; i++) {
        //     var numberToSkip = Number(prompt("Please type in an odd number between 1 and 50 :)"));
        //     // make sure numberToSkip is a number instead of a string
        //     if (numberToSkip >= 1 && numberToSkip <= 50 && numberToSkip % 2 === 1) {
        //         console.log("Number to skip is: " + numberToSkip);
        //         break;
        //     }
        // }

        function isNumberInRange(num) {
            return num >= 1 && num <= 50;
        }
        var numberToSkip = Number(prompt("Please give me an add number between 1 and 50."));
        while (true) {
            if (numberToSkip % 2 === 1 && isNumberInRange(numberToSkip)) {
                console.log("Number to skip is: " + numberToSkip)
                break;
            }
            numberToSkip = Number(prompt("Please give me an add number between 1 and 50."));
        }

        // for (var number = 1; number <= 50; number++) {
        //     if (number === numberToSkip) {
        //         console.log("Yikes! Skipping number: " + numberToSkip);
        //     } else if( number % 2 === 1) {
        //         console.log("Here is an odd number: " + number);
        //     }
        // }

        for (var number = 1; number <= 50; number+=2) {
            if (number === numberToSkip) {
                console.log("Yikes! Skipping number: " + numberToSkip);
                continue;
            }
            console.log("Here is an odd number: " + number);

        }
    }

    oddNumber();

    // var oddNumberToSkip = 0;
    // while (oddNumberToSkip < 1 || oddNumberToSkip > 50 || oddNumberToSkip % 2 === 0) {
    //     oddNumberToSkip = Number(prompt("Please type in an odd number between 1 and 50 :)"));
    // }
    // console.log("Number to skip is:" + oddNumberToSkip);
    //
    // var number = 1;
    // while (number < 50) {
    //     if (number === oddNumberToSkip) {
    //         console.log("Yikes! Skipping number: " + number);
    //     } else if (number % 2 === 1) {
    //         console.log("Here is an odd number:" + number);
    //     }
    //     number++;
    // }


})();