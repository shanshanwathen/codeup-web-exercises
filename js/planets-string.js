(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var newPlanetsString = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";

    console.log(newPlanetsString);

    var newPlanetsArray = newPlanetsString.split("<br>");
    console.log(newPlanetsArray);

    function secondPlanets() {
        var a = "<ul>", b = "</ul>", secondPlanets = "";
        for (var i = 0; i <newPlanetsArray.length; i++) {
            secondPlanets = secondPlanets + "<li>" + newPlanetsArray[i] + "</li>";
        }
        return a + secondPlanets + b;
    }

    var secondPlanetsString = secondPlanets();
    console.log(secondPlanetsString);

    // var secondPlanetsString = "<ul>" + "<li>" + newPlanetsArray.join("</li><li>") +  "</li>" + "</ul>";
    //
    // console.log(secondPlanetsString);

})();