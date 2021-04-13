$(document).ready(function () {

    "use strict";

    // GET REQUEST to OpenWeatherMap using city parameter
    // 5 day forecast info
    // https://api.openweathermap.org/data/2.5/forecast

    // Call 5 day / 3 hour forecast data

    function getWeatherIN5Days() {
        var weatherIn5Days = [];
        $.get("https://api.openweathermap.org/data/2.5/forecast",  {
            q: $("#current-city").html().split(": ")[1],
            appid: openWeatherAppId,
            units: "imperial"
        }).done(function (results) {
            var weathersInEvery3Hrs = results.list;   // 5 day / 3 hour forecast data (0:00am, 3:00, 6:00, 9:00, 12:00pm, 3:00pm, 6:00pm, 9:00pm)

            // filter out the weathers at 9:00am everyday
            weathersInEvery3Hrs.forEach(function (weather) {
                if (weather.dt_txt.split(" ")[1] === "09:00:00") {
                    weatherIn5Days.push(weather);
                }
            });

            for (var i = 0; i < weatherIn5Days.length; i++) {
                $(".card-title").eq(i).html(weatherIn5Days[i].dt_txt.split(" ")[0]);

                $(".temperature").eq(i).html(weatherIn5Days[i].main.temp_max + '/' + weatherIn5Days[i].main.temp_min);
                $(".icon").eq(i).html(weatherIn5Days[i].weather[0].icon);
                $(".description").eq(i).html("Description: " + weatherIn5Days[i].weather[0].description);
                $(".humidity").eq(i).html("Humidity: " + weatherIn5Days[i].main.humidity);
                $(".wind").eq(i).html("Wind: " + weatherIn5Days[i].wind.speed);
                $(".pressure").eq(i).html("Pressure: " + weatherIn5Days[i].main.pressure);
            }
        });
    }

    geocode("San Antonio, TX", mapboxToken).then(function (results) {
        // Put a marker on the map when click
        var SAMarker = new mapboxgl.Marker()
            .setLngLat(results)
            .addTo(map);
    });
    getWeatherIN5Days();

    map.on('click', function (e) {
        //  Remove the origin marker
        $(".mapboxgl-marker").remove();

        // Put a marker on the map when click
        new mapboxgl.Marker()
            .setLngLat(e.lngLat)
            .addTo(map);

        // Use reverseGeocode to get the location address
        reverseGeocode(e.lngLat, mapboxToken).then(function (results) {

            // Display current location city name on the navbar
            $("#current-city").html("Current city: " + results.split(", ")[1]);

            // Update the five-day forecast in new location
            getWeatherIN5Days();
        });
    });






});


mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.491142, 29.424349], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
