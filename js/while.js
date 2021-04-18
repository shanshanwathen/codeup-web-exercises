(function (){
    "use strict";

    //while loops
    function double() {
        // let number = 2;
        // while (number <= 65536) {
        //     console.log(number);
        //     number *= 2;
        // }
        let i = 1;
        while (i <=16) {
            console.log(2 ** i);
            i++;
        }
    }

    double();

    // Do while loop
    function sellCones() {
        // This is how you get a random number between 50 and 100
        let allCones = Math.floor(Math.random() * 50) + 50;
        console.log(`I have ${allCones} cones to sell before I go home today :)`);
        do {
            const conesToSell = Math.floor(Math.random() * 5) + 1;
            if (allCones >= conesToSell) {
                allCones = allCones - conesToSell;
                console.log(`${conesToSell} cones sold...`);
            } else {
                console.log(`Cannot sell you ${conesToSell} cones. I only have ${allCones}...`);
            }
        } while (allCones > 0);
        console.log("Yay! I sold them all!");
    }

    sellCones();

})();