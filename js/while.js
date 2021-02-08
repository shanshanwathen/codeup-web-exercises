//(function (){
//     "use strict";
//
//     //while loops
//     function double() {
//         var i = 1;
//         while (i <=16) {
//             console.log(2 ** i);
//             i++;
//         }
//     }
//
//     double();

    // Do while loop
    function sellCones() {
        // This is how you get a random number between 50 and 100
        var allCones = Math.floor(Math.random() * 50) + 50;
        console.log("I have " + allCones + " cones to sell before I go home today :)");
        var conesSold = 0, conesLeft = allCones;
        do {
            var conesToBuy = Math.floor(Math.random() * 5) + 1;
            if (conesLeft >= conesToBuy) {
                conesSold = conesSold + conesToBuy;
                conesLeft = conesLeft - conesToBuy;
                console.log(conesToBuy + " cones sold...");
            } else if (conesLeft < conesToBuy) {
                console.log("Cannot sell you " + conesToBuy + " cones. I only have " + conesLeft + "...");
            }
        } while (conesLeft > 0);
        console.log("Yay! I sold them all!");
    }

    sellCones();

//})();