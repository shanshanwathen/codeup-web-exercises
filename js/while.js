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
        var conesSold = 0;
        do {
            var conesToBuy = Math.floor(Math.random() * 5) + 1;
            conesSold = conesSold + conesToBuy;
            var conesLeft = allCones - conesSold;
            if (conesLeft >= conesToBuy) {
                console.log(conesToBuy + " cones sold...");
                console.log(conesLeft + " cones left.");
            } else if (conesLeft < conesToBuy) {
                console.log("Cannot sell you " + conesToBuy + " cones. I only have " + conesLeft + "...");
            }

        } while (conesLeft > 0);
        console.log("Yay! I sold them all!");
    }

    sellCones();

//})();