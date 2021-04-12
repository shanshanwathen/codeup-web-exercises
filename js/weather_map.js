$(document).ready(function () {

    "use strict";

    geocode("san Antonio, TX", mapboxToken).then(function (results) {
        new mapboxgl.Marker()
            .setLngLat(results)
            .addTo(map);
    });

    var weatherIn5Days = [];

    // GET REQUEST to OpenWeatherMap using city parameter
    // 5 day forecast info
    // https://api.openweathermap.org/data/2.5/forecast


    // Call 5 day / 3 hour forecast data
    $.get("https://api.openweathermap.org/data/2.5/forecast",  {
        q: "San Antonio, US",
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
        console.log(weatherIn5Days);

        for (var i = 0; i < weatherIn5Days.length; i++) {
            var html = '<h5 class="card-title bg-light">' + weatherIn5Days[i].dt_txt.split(" ")[0] + '</h5>';
            html += '<h6 class="temperature">' + weatherIn5Days[i].main.temp_max + '/' + weatherIn5Days[i].main.temp_min + '</h6>';
            html += '<h6>' + weatherIn5Days[i].weather[0].icon + '</h6>';
            html += '<div class="card-body">';
            html += '<ul class="card-text list-group">';
            html += '<li class="list-group-item">Description: ' + weatherIn5Days[i].weather[0].description + '</li>';
            html += '<li class="list-group-item">Humidity: ' + weatherIn5Days[i].main.humidity + '</li>';
            html += '<li class="list-group-item">Wind: ' + weatherIn5Days[i].wind.speed + '</li>';
            html += '<li class="list-group-item">Pressure: ' + weatherIn5Days[i].main.pressure + '</li>';
            html += '</ul></div>';
            $(".card").eq(i).html(html);
        }
    });


});


mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.491142, 29.424349], // starting position [lng, lat]
    zoom: 9 // starting zoom
});