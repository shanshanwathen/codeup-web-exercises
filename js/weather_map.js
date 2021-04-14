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

                $(".temperature").eq(i).html("<strong>" + weatherIn5Days[i].main.temp_max + '/' + weatherIn5Days[i].main.temp_min + "</strong>");
                var iconcode = weatherIn5Days[i].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $(".icon").eq(i).attr("src", iconurl);
                $(".icon").parent().addClass("text-center");
                $(".description").eq(i).html("Description: <strong>" + weatherIn5Days[i].weather[0].description + "</strong>");
                $(".humidity").eq(i).html("Humidity: <strong>" + weatherIn5Days[i].main.humidity + "</strong>");
                $(".wind").eq(i).html("Wind: <strong>" + weatherIn5Days[i].wind.speed + "</strong>");
                $(".pressure").eq(i).html("Pressure: <strong>" + weatherIn5Days[i].main.pressure + "</strong>");
            }
        });
    }

    var currentWeatherArr = [];
    function getCurrentWeather(weather) {
        console.log(currentWeatherArr);

            if (currentWeatherArr !== []) {
                currentWeatherArr = [];
            }
            currentWeatherArr.push("<p class='text-center m-0'><strong>" + weather.main.temp_max + "/" + weather.main.temp_min + "</strong></p>");

            // Display weather icon
            var iconcode = weather.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            currentWeatherArr.push("<div class='text-center'><img id='weather-icon' src='" + iconurl + "' alt='Weather icon'></div>");

            currentWeatherArr.push("<ul class='list-group'><li>Description: <strong>" + weather.weather[0].description + "</strong></li>");
            currentWeatherArr.push("<li>Humidity: <strong>" + weather.main.humidity + "</strong></li>");
            currentWeatherArr.push("<li>Wind: <strong>" + weather.wind.speed + "</strong></li>");
            currentWeatherArr.push("<li>Pressure: <strong>" + weather.main.pressure + "</strong></li></ul>");

        var html = "<h6>Current Weather</h6>";
        currentWeatherArr.forEach(function (weatherAspect) {
            html += weatherAspect;
        });

        console.log(currentWeatherArr);
        return html;
    }

    var city = $("#current-city").html().split(": ")[1];
    $.get("https://api.openweathermap.org/data/2.5/weather", {
        q: city,
        appid: openWeatherAppId,
        units: "imperial"
    }).done(function (weather) {
        var html = getCurrentWeather(weather);
        var currentWeather = new mapboxgl.Popup()
            .setHTML(html);

        new mapboxgl.Marker(el)
            .setLngLat([-98.4951, 29.4246])
            .setPopup(currentWeather)
            .addTo(map);
    });

    getWeatherIN5Days();


    map.on('click', function (e) {
        //  Remove the origin marker & popup
        $(".mapboxgl-marker").remove();
        $(".mapboxgl-popup-content").remove();

        // Use reverseGeocode to get the location address
        reverseGeocode(e.lngLat, mapboxToken).then(function (results) {
            console.log(results)
            var cityArr = results.split(", ");
            city = cityArr[cityArr.length - 3];

            console.log(city);
            // Display current location city name on the navbar
            $("#current-city").html("Current city: " + city);

            // Update the five-day forecast in new location
            getWeatherIN5Days();

            $.get("https://api.openweathermap.org/data/2.5/weather", {
                q: city,
                appid: openWeatherAppId,
                units: "imperial"
            }).done(function (results) {
                var html = getCurrentWeather(results);
                var currentWeather = new mapboxgl.Popup()
                    .setHTML(html);

                new mapboxgl.Marker(el)
                    .setLngLat(e.lngLat)
                    .setPopup(currentWeather)
                    .addTo(map);
            });
        });
    });

    $("#search").click(function (e) {
        e.preventDefault();

        // Get coordinates using goecode & update current city and weather
        geocode($("#place").val(), mapboxToken).then(function (results) {

            // Display current location city name on the navbar
            $("#current-city").html("Current city: " + $("#place").val().charAt(0).toUpperCase() + $("#place").val().slice(1).toLowerCase());  // case insensitive

            $.get("https://api.openweathermap.org/data/2.5/weather", {
                q: $("#place").val(),
                appid: openWeatherAppId,
                units: "imperial"
            }).done(function (weather) {
                var html = getCurrentWeather(weather);
                var currentWeather = new mapboxgl.Popup()
                    .setHTML(html);

                new mapboxgl.Marker(el)
                    .setLngLat(results)
                    .setPopup(currentWeather)
                    .addTo(map);
            });

            // fly to the place searched
            map.flyTo({
                center: results,
                zoom: 15,
                speed: 0.5
            });

            // Update the five-day forecast in new location
            getWeatherIN5Days();

            $("#place").val("");  // clear input
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

// add custom icon to replace the default icon
var el = document.createElement('div');
el.className = 'marker';

$(".card-title").addClass("rounded-top");

$(".dark-mode").click(function () {
    $("body").toggleClass("dark-theme");
    $(".card-header").toggleClass("bg-dark");
    $(".card, li").toggleClass("dark-card");
    $(".h1, h5").toggleClass("dark");
    $("#place").toggleClass("btn-dark dark-input");
    $(".mapboxgl-popup-content").toggleClass("bg-dark");
    if ($("body").hasClass("dark-theme")) {
        map.setStyle("mapbox://styles/mapbox/dark-v10");
    } else {
        map.setStyle("mapbox://styles/mapbox/streets-v11");
    }
});
