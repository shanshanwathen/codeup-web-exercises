"use strict";

mapboxgl.accessToken = mapboxToken;

var myFavoriteRestaurants = [{
        name: "Fujiya Japanese Garden",
        address: "9030 Wurzbach Rd, San Antonio, TX 78240"
    }, {
        name: "Sushihana Japanese Restaurant",
        address: "1810 NW Military Hwy, San Antonio, TX 78213"
    }, {
        name: "Hon Machi Korean BBQ",
        address: "8251 Agora Pkwy, Selma, TX 78154"
}]

var map = new mapboxgl.Map({
    container: "map", // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4951, 29.4246], // starting position [lng, lat]
    zoom: 9 // starting zoom
});


myFavoriteRestaurants.forEach(function(restaurant) {
    geocode(restaurant.address, mapboxToken).then(function(results) {
        new mapboxgl.Marker({color: "orange"})
            .setLngLat(results)
            .setPopup(new mapboxgl.Popup()
            .setHTML("<h6>" + restaurant.name + "</h6>"))
            .addTo(map);
    });
});




