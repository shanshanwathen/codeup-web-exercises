"use strict";

mapboxgl.accessToken = mapboxToken;

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

var map = new mapboxgl.Map({
    container: "map", // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4951, 29.4246], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

$("#zoom").on("change", function() {
    new mapboxgl.Map({
        container: "map", // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.4951, 29.4246],
        zoom: this.value
    });
});

myFavoriteRestaurants.forEach(function(restaurant) {
    var html = "<h5>" + restaurant.name + "</h5>";
    html += "<p>The reason I like it: " + restaurant.reason + "</p>";
    html += "<p>My favorite dishes: " + restaurant.dishes + "</p>";
    html += "<img src='" + restaurant.image + "'>"

    geocode(restaurant.address, mapboxToken).then(function(results) {
        new mapboxgl.Marker({color: "orange"})
            .setLngLat(results)
            .setPopup(new mapboxgl.Popup({idName: restaurant.id})
            .setHTML(html))
            .addTo(map);
    });
});


