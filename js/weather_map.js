$(document).ready(function () {

    "use strict";




    // geocode("san Antonio, TX", mapboxToken).then(function (results) {
    //     new mapboxgl.Marker()
    // })
    // // GET REQUEST to OpenWeatherMap using city parameter
    // // https://openweathermap.org/current
    //
    // $.get("https://api.openweathermap.org/data/2.5/weather",  {
    //     q: "San Antonio, US",
    //     appid: openWeatherAppId,
    //
    //     // TODO: How can we get imperial units instead?
    //     units: "imperial"
    // }).done(function (results) {
    //     console.log(results);
    // })



});


mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.491142, 29.424349], // starting position [lng, lat]
    zoom: 9 // starting zoom
});