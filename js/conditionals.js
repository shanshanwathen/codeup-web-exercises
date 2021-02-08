(function (){
    "use strict";

    /* ########################################################################## */


    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */


    function analyzeColor(colorName){
        if (colorName === "blue") {
            return "Blue is the color of the sky.";
        } else if (colorName === "red") {
            return "Strawberries are red.";
        } else if (colorName === "yellow") {
            return "Bananas are yellow.";
        } else if (colorName === "orange") {
            return "Oranges are orange.";
        } else if (colorName === "green") {
            return "Leaves are green.";
        } else if (colorName === "indigo") {
            return "Blueberries are indigo";
        } else if (colorName === "violet") {
            return "Can you tell me something about violet?";
        } else {
            return "I don't know anything about " + colorName + ".";
        }
    }

    console.log(analyzeColor("cyan"));

    // Don't change the next two lines!
    // These lines create two variables for you:
    // - `colors`: a list of the colors of the rainbow
    // - `randomColor`: contains a single random color value from the list (this
    //                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */

    console.log(analyzeColor(randomColor));

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

    function analyzeColorAnother(colorName){
        switch(colorName) {
            case "blue":
                return ("Blue is the color of the sky.");
            case "red":
                return ("Strawberries are red.");
            case "yellow":
                return ("Bananas are yellow.");
            case "orange":
                return ("Oranges are orange.");
            case "green":
                return ("Leaves are green.");
            case "indigo":
                return ("Blueberries are indigo.");
            case "violet":
                return ("Can you tell me something about violet?");
            default:
                return ("I don't know anything about " + colorName + ".");
        }
    }

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    var color = prompt("What's your favorite color?");
    alert(analyzeColorAnother(color));

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    function calculateTotal(luckyNumber, totalAmount){
        if (luckyNumber === 0) {
            return totalAmount;
        } else if (luckyNumber === 1) {
            return totalAmount * (1 - 0.10);
        } else if (luckyNumber === 2) {
            return totalAmount * (1- 0.25);
        } else if (luckyNumber === 3) {
            return totalAmount * (1 - 0.35);
        } else if (luckyNumber === 4) {
            return totalAmount * (1 - 0.50);
        } else {
            return 0;
        }
    }

    console.log(calculateTotal(5, 100));

    function switchCalculateTotal(luckyNumber, totalAmount) {
        switch (luckyNumber) {
            case 0:
                return totalAmount;
            case 1:
                return totalAmount * (1 - 0.10);
            case 2:
                return totalAmount * (1 - 0.25);
            case 3:
                return totalAmount * (1 - 0.35);
            case 4:
                return totalAmount * (1 - 0.50);
            default:
                return 0;
        }
    }

    console.log(switchCalculateTotal(4, 100));

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
    // Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

    var totalBill = Number(prompt("What's your bill total"));
    alert("Your lucky number was " + luckyNumber  +  ".");
    alert("Your price before the discount was $" + totalBill + ".");
    alert("Your total bill after the discount is $" + calculateTotal(luckyNumber, totalBill) + ".");

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    var enterOrNot = confirm("Would you like to enter a number?");
    if (enterOrNot === true) {
        var numberEntered = Number(prompt("Great, please enter a number."));
        if(isNaN(numberEntered) === true) {
            alert("What you entered was not a number.");
        } else {
            var EvenOrOdd = numberEntered % 2;
            var sum = numberEntered + 100;
            if (EvenOrOdd === 1 || EvenOrOdd === -1) {
                alert(numberEntered + " is an odd number.");
            } else {
                alert(numberEntered + " is an even number.");
            }
            alert(numberEntered + " plus 100 is " + sum + ".");
            if (numberEntered > 0) {
                alert(numberEntered + " is a positive number.");
            } else if (numberEntered < 0) {
                alert(numberEntered + " is a negative number.");
            }
        }
    }

    //Refactor code of last exercise
    var enterANumber = confirm("Would you like to enter a number? :)")
    if (enterANumber === true) {
        var number = Number(prompt("Great, please enter a number :)"));
        isNumberOrNot(number);
    }

    function isEvenOrOdd(number) {
        switch (number % 2) {
            case 0:
                alert (number + " is an even number.");
                break;
            default:
                alert (number + " is an odd number.");
                break;
        }
    }

    function addHundred(number) {
        alert(number + " plus 100 is " + (number + 100) + ".");
    }

    function isNegativeOrPositive(number) {
        if (number > 0) {
            alert (number + " is a positive number.");
        } else if (number < 0) {
            alert (number + " is a negative number.");
        }
    }

    function isNumberOrNot(number) {
        switch (isNaN(number)) {
            case true:
                alert("What you entered was not a number.");
                break;
            default:
                isEvenOrOdd(number);
                addHundred(number);
                isNegativeOrPositive(number);
        }
    }

})();