"use strict";

mapboxgl.accessToken = mapboxToken;


//  put my favorite restaurants in an array
var myFavoriteRestaurants = [{
        id: "fujiya",
        name: "Fujiya Japanese Garden",
        address: "9030 Wurzbach Rd, San Antonio, TX 78240",
        reason: "This restaurant has really good sushi and ramen. I love their Takoyaki.",
        dishes: "Takoyaki, Fujiya Sashimi Salad, Twin Dragon Roll, Chashu Ramen",
        image: "img/fujiyasushi.jpeg"
    }, {
        id: "sushihana",
        name: "Sushihana Japanese Restaurant",
        address: "1810 NW Military Hwy, San Antonio, TX 78213",
        reason: "The food here is extraordinarily fresh and delicious and the service is excellent.",
        dishes: "Nigiri appertizer, Sushi & sashimi dinner, Assorted sashimi",
        image: "img/tonight-s-chef-s-selection.jpeg"
    }, {
        id: "hon-machi",
        name: "Hon Machi Korean BBQ",
        address: "8251 Agora Pkwy, Selma, TX 78154",
        reason: "This restaurant has variety meats and We cook the meats ourselves.",
        dishes: "Spicy Baby Octopus, Bulgogi Beef, Ribeye Steak",
        image: "img/hon-machi-BBQ.jpeg"
}]

// bulid the map
var map = new mapboxgl.Map({
    container: "map", // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.519557, 29.527392], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// add zoom changes
$("#zoom").on("change", function() {
    map.flyTo({
        center: [-98.519557, 29.527392],
        zoom: this.value
    });
});

// add markers of my favorite restaurants to the map and add popups
myFavoriteRestaurants.forEach(function(restaurant) {
    var html = "<h5>" + restaurant.name + "</h5>";
    html += "<p>The reason I like it: " + restaurant.reason + "</p>";
    html += "<p>My favorite dishes: " + restaurant.dishes + "</p>";
    html += "<img src='" + restaurant.image + "'>"

    // add restaurant icon to replace the default icon
    var el = document.createElement('div');
    el.className = 'marker';

    geocode(restaurant.address, mapboxToken).then(function(results) {
        new mapboxgl.Marker(el)
            .setLngLat(results)
            .setPopup(new mapboxgl.Popup({idName: restaurant.id})
            .setHTML(html))
            .addTo(map);
    });
});

// add search function to search an address
$("#search").click(function (e) {
    e.preventDefault();
    geocode($("#place").val(), mapboxToken).then(function(results) {
        var popupSearched = new mapboxgl.Popup()
            .setHTML("<h6>Found it!</h6>");
        new mapboxgl. Marker()
            .setLngLat(results)
            .setPopup(popupSearched)
            .addTo(map);

        map.flyTo({center: results});
    });

    $("#place").val("");
});

// hide all the markers on the map
$("#hide").click(function (e) {
    e.preventDefault();
    $(".mapboxgl-marker").hide();   // jQuery hide method ( one click then hide, click again will not show)
    // $(".mapboxgl-marker").toggleClass("invisible"); // jQuery toggleClass method (add css style in css file or embedded in html and then toggle class to show and hide with only one click)
    // $(".mapboxgl-marker").css("display", "none") // cannot be changed since it's inline style
});

// show the markers again
$("#hide").dblclick(function (e) {
    e.preventDefault();
    $(".mapboxgl-marker").show();  // jQuery show method ( added to dblclick method, only when dblclick can show)
});

var el = document.createElement('div');
el.className = 'bounceMarker';
var marker = new mapboxgl.Marker(el);

function animateMarker(timestamp) {
    var radius = 0.05;
    geocode(myFavoriteRestaurants[1].address, mapboxToken).then(function(results) {

        // Update the data to a new position based on the animation timestamp. The
        // divisor in the expression `timestamp / 1000` controls the animation speed.
        marker.setLngLat([
            results[0],
            results[1] + Math.sin(timestamp / 500) * radius
        ]);
        // Ensure it's added to the map. This is safe to call if it's already added.
        marker.addTo(map);
    });
    // Request the next frame of the animation.
    requestAnimationFrame(animateMarker);
}

// Start the animation.
requestAnimationFrame(animateMarker);

var timneoutId = setTimeout(animateMarker, 2000);

