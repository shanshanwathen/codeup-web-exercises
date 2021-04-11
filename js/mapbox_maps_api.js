"use strict";

mapboxgl.accessToken = mapboxToken;

geocode("9030 Wurzbach Rd, San Antonio, TX 78240", mapboxToken).then(function(results1) {
    var map = new mapboxgl.Map({
     container: "map", // container ID
     style: 'mapbox://styles/mapbox/streets-v11', // style URL
     center: results1, // starting position [lng, lat]
     zoom: 9 // starting zoom
    });

    var fujiyapPopup = new mapboxgl.Popup()
        .setHTML("<h6>Fujiya Japanese Garden</h6>");

    var fujiyaMarker = new mapboxgl.Marker({color: "orange"})
        .setLngLat(results1)
        .setPopup(fujiyapPopup)
        .addTo(map);

});



