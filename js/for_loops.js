(function (){
    "use strict";

    // For loops 2
    function showMultiplicationTable(number) {
        for (var i = 1; i <=10; i++) {
            console.log(number + "x" + i + " = " + number * i);
        }
    }

    showMultiplicationTable(7);

    //3
    function isEvenOrOdd() {
        for (var i = 1; i <= 10; i++) {
            var random = Math.floor(Math.random() * (200 - 20) + 20);
            if (random % 2 === 0) {
                console.log(random + " is even.");
            } else {
                console.log(random + " is odd.");
            }
        }
    }

    isEvenOrOdd();

    //3
    function evenOrOdd() {
        var i = 1;
        while (i <= 10) {
            var random = Math.floor(Math.random() * (200 - 20) + 20);
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
    function printNumber() {
        for (var i = 1; i < 10; i++) {
            console.log(i.toString().repeat(i));
        }
    }

    printNumber();

    //5
    function minusFive() {
        for (var i = 100; i > 0; i -= 5) {
            console.log(i);
        }
    }

    minusFive();

})();