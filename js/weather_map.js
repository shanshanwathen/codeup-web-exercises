$(document).ready(function () {

    "use strict";

    // GET REQUEST to OpenWeatherMap using city parameter
    // 5 day forecast info
    // https://api.openweathermap.org/data/2.5/forecast

    // Call 5 day / 3 hour forecast data

    function getWeatherIN5Days() {
        $.get("https://api.openweathermap.org/data/2.5/forecast",  {
            q: $("#current-city").html().split(": ")[1],
            appid: openWeatherAppId,
            units: "imperial"
        }).done(function (results) {
            let weathersInEvery3Hrs = results.list;   // 5 day / 3 hour forecast data (0:00am, 3:00, 6:00, 9:00, 12:00pm, 3:00pm, 6:00pm, 9:00pm)

            // filter out the weathers at 9:00am everyday
            const weatherIn5Days = weathersInEvery3Hrs.filter(weather => weather.dt_txt.split(" ")[1] === "09:00:00");

            for (let i = 0; i < weatherIn5Days.length; i++) {
                const iconcode = weatherIn5Days[i].weather[0].icon;
                const iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;
                $(".card-deck .card").eq(i).html(
                    `<h5>${weatherIn5Days[i].dt_txt.split(" ")[0]}</h5>
                    <h6><strong>${weatherIn5Days[i].main.temp_max}/${weatherIn5Days[i].main.temp_min}</strong></h6>
                    <div><img src=${iconurl} alt="Weather icon"></div>
                    <div class="card-body">
                        <ul class="card-text list-group">
                            <li>Description: <strong>${weatherIn5Days[i].weather[0].description}</strong></li>
                            <li>Humidity: <strong>${weatherIn5Days[i].main.humidity}</strong></li>
                            <li>Wind: <strong>${weatherIn5Days[i].wind.speed}</strong></li>
                            <li>Pressure: <strong>${weatherIn5Days[i].main.pressure}</strong></li>
                        </ul>
                    </div>
                </div>`);

                $("h5").addClass("card-title bg-secondary text-light rounded-top");
                $("img").parent().addClass("text-center");
                $("li").addClass("list-group-item");
            }
        });
    }

    let currentWeather = "";
    let defaultWeatherForecast = "";
    function getCurrentWeather(weather) {
        console.log(currentWeather);

        if (currentWeather !== "") {
            currentWeather = "";
        }

            // Display weather icon
        const iconcode = weather.weather[0].icon;
        const iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;

        currentWeather =
            `<h6>Current Weather</h6>
            <p class='text-center m-0'><strong>${weather.main.temp_max}/${weather.main.temp_min}</strong></p>
            <div class='text-center'><img id='weather-icon' src=${iconurl} alt='Weather icon'></div>
            <ul class='list-group'>
                <li>Description: <strong>${weather.weather[0].description}</strong></li>
                <li>Humidity: <strong>${weather.main.humidity}</strong></li>
                <li>Wind: <strong>${weather.wind.speed}</strong></li>
                <li>Pressure: <strong>${weather.main.pressure}</strong></li>
            </ul>`;
        $("li").addClass("list-group-item");

        return currentWeather;
    }

    $.get("https://api.openweathermap.org/data/2.5/weather", {
        q: $("#current-city").html().split(": ")[1],
        appid: openWeatherAppId,
        units: "imperial"
    }).done(function (weather) {
        getWeatherIN5Days();
        const displayCurrentWeather = new mapboxgl.Popup()
            .setHTML(getCurrentWeather(weather));

        new mapboxgl.Marker(el)
            .setLngLat([-98.4951, 29.4246])
            .setPopup(displayCurrentWeather)
            .addTo(map);
    });

    defaultWeatherForecast = $(".card-deck").html();
    console.log(defaultWeatherForecast);

    map.on('click', function (e) {
        // Use reverseGeocode to get the location address
        reverseGeocode(e.lngLat, mapboxToken).then(function (results) {
            console.log(results)
            const cityArr = results.split(", ");
            const city = cityArr[cityArr.length - 3];

            // Display current location city name on the search bar
            $("#current-city").html("Current city: " + city);

            // Update the five-day forecast in new location
            getWeatherIN5Days();

            $.get("https://api.openweathermap.org/data/2.5/weather", {
                q: city,
                appid: openWeatherAppId,
                units: "imperial"
            }).done(function (results) {
                const displayCurrentWeather = new mapboxgl.Popup()
                    .setHTML(getCurrentWeather(results))
                    .addTo(map);

                new mapboxgl.Marker(el)
                    .setLngLat(e.lngLat)
                    .setPopup(displayCurrentWeather)
                    .addTo(map);
            });
        });

        map.flyTo({
            center: e.lngLat,
            zoom: 15,
            speed: 0.5
        })
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
                var currentWeather = new mapboxgl.Popup()
                    .setHTML(getCurrentWeather(weather));

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
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.491142, 29.424349], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// add custom icon to replace the default icon
const el = document.createElement('div');
el.className = 'marker';

$(".card-title").addClass("rounded-top");

$(".dark-mode").click(function () {
    $("body").toggleClass("dark-theme");
    $(".card-header").toggleClass("bg-dark");
    $(".card, li").toggleClass("dark-card");
    $(".h1, h5").toggleClass("dark");
    $("#place").toggleClass("btn-dark dark-input");
    $(".modal-header, .modal-footer").toggleClass("dark-theme");
    $(".modal-body").toggleClass("dark-card");
    $("#x").toggleClass("dark");
    $(".mapboxgl-popup-content").toggleClass("bg-dark");
    if ($("body").hasClass("dark-theme")) {
        map.setStyle("mapbox://styles/mapbox/dark-v10");
    } else {
        map.setStyle("mapbox://styles/mapbox/streets-v11");
    }
});
