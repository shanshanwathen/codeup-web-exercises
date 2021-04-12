$(document).ready(function () {

    "use strict";

    geocode("san Antonio, TX", mapboxToken).then(function (results) {
        new mapboxgl.Marker()
            .setLngLat(results)
            .addTo(map);
    });

    var weathersIn5Days = [];

    // GET REQUEST to OpenWeatherMap using city parameter
    // 5 day forecast info
    // https://api.openweathermap.org/data/2.5/forecast


    // Call 5 day / 3 hour forecast data
    $.get("https://api.openweathermap.org/data/2.5/forecast",  {
        q: "San Antonio, US",
        appid: openWeatherAppId,
        units: "imperial"
    }).done(function (results) {
        var weathersInEvery3Hrs = results.list;   // 5 day / 3 hour forecast data

        // filter out the weathers at 9:00am everyday
        weathersInEvery3Hrs.forEach(function (weather) {
            if (weather.dt_txt.split(" ")[1] === "09:00:00") {
                weathersIn5Days.push(weather);
            }
        });
        console.log(weathersIn5Days);
    });

    console.log(weathersIn5Days);

});


mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.491142, 29.424349], // starting position [lng, lat]
    zoom: 9 // starting zoom
});