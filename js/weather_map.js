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

    // display current weather
    let currentWeather = "";
    function getCurrentWeather(weather) {
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
            <ul class='p-0'>
                <li>Description: <strong>${weather.weather[0].description}</strong></li>
                <li>Humidity: <strong>${weather.main.humidity}</strong></li>
                <li>Wind: <strong>${weather.wind.speed}</strong></li>
                <li>Pressure: <strong>${weather.main.pressure}</strong></li>
            </ul>`;

        return currentWeather;
    }

    $.get("https://api.openweathermap.org/data/2.5/weather", {
        q: $("#current-city").html().split(": ")[1],
        appid: openWeatherAppId,
        units: "imperial"
    }).done(function (weather) {
        getWeatherIN5Days();

        currentWeatherPopup = new mapboxgl.Popup()
            .setHTML(getCurrentWeather(weather));

        currentWeatherMarker.setPopup(currentWeatherPopup)
            .addTo(map);

        // $(".dark-mode").click(() => {
        //     if ($("body").hasClass("dark-theme")) {
        //         $(".mapboxgl-popup-content").css("background-color", "#343a40");
        //     } else {
        //         $(".mapboxgl-popup-content").css("background-color", "white");
        //     }
        // });
    });


    map.on('click', function (e) {
        // Use reverseGeocode to get the location address
        reverseGeocode(e.lngLat, mapboxToken).then(function (results) {
            console.log(results)
            const cityArr = results.split(", ");
            const city = cityArr[cityArr.length - 3];

            console.log(city);

            // Display current location city name on the search bar
            $("#current-city").html("Current city: " + city);

            // Update the five-day forecast in new location
            getWeatherIN5Days();

            $.get("https://api.openweathermap.org/data/2.5/weather", {
                q: city,
                appid: openWeatherAppId,
                units: "imperial"
            }).done(function (results) {
                // Set new popup to display current weather in clicked location
                currentWeatherPopup.setHTML(getCurrentWeather(results));

                // Set new marker on clicked location
                currentWeatherMarker.setLngLat(e.lngLat);

            });
        });

        map.flyTo({
            center: e.lngLat,
            zoom: 15,
            speed: 0.8
        })
    });

    $("#search").click(function (e) {
        e.preventDefault();

        // Get coordinates using goecode & update current city and weather
        geocode($("#place").val(), mapboxToken).then(function (results) {

            // Format the current location city and display current location city name on the navbar
            let placeArr = $("#place").val().split(" ");
            for (let i = 0; i < placeArr.length; i++) {
                placeArr[i] = formatString(placeArr[i]);
            }

            $("#current-city").html("Current city: " + placeArr.join(" "));

            $.get("https://api.openweathermap.org/data/2.5/weather", {
                q: $("#place").val().split(", ")[0],
                appid: openWeatherAppId,
                units: "imperial"
            }).done(function (weather) {
                console.log(weather);
                // Set new popup to display current weather in clicked location
                currentWeatherPopup.setHTML(getCurrentWeather(weather));

                // Set new marker on clicked location
                currentWeatherMarker.setLngLat(results);

                // $(".dark-mode").click(() => {
                //     if ($("body").hasClass("dark-theme")) {
                //         $(".mapboxgl-popup-content").css("background-color", "#343a40");
                //     } else {
                //         $(".mapboxgl-popup-content").css("background-color", "white");
                //     }
                // });
            });

            // fly to the place searched
            map.flyTo({
                center: results,
                zoom: 15,
                speed: 0.8
            });

            // Update the five-day forecast in new location
            getWeatherIN5Days();

            $("#place").val("");  // clear input
        });
    });
});


function formatString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

mapboxgl.accessToken = mapboxToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.491142, 29.424349], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// add custom icon to replace the default icon for marker
const el = document.createElement('div');
el.className = 'marker';

let currentWeatherPopup;
// add marker to default city San Antonio
let currentWeatherMarker = new mapboxgl.Marker(el)
    .setLngLat([-98.4951, 29.4246])
    .addTo(map);


$(".card-title").addClass("rounded-top");

$(".dark-mode").click(() => {
    $("body").toggleClass("dark-theme");
    $(".card-header").toggleClass("bg-dark");
    $(".card, .list-group-item").toggleClass("dark-card");
    $(".h1, h5").toggleClass("dark");
    $("#place").toggleClass("btn-dark dark-input");
    $(".modal-header, .modal-footer").toggleClass("dark-theme");
    $(".modal-body").toggleClass("dark-card");
    $("#x").toggleClass("dark");
    if ($("body").hasClass("dark-theme")) {
        map.setStyle("mapbox://styles/mapbox/dark-v10");
        // if ($(".mapboxgl-popup-content").html === undefined) {
        //     $(".mapboxgl-popup-content").css({"background-color": "#343a40"});
        // }

        $(".mapboxgl-popup-content > ul > li").css("background-color", "#343a40");
    } else {
        map.setStyle("mapbox://styles/mapbox/streets-v11");
        // if ($(".mapboxgl-popup-content").html === undefined) {
        //     $(".mapboxgl-popup-content").css("background-color", "white");
        // }
        $(".mapboxgl-popup-content > ul > li").css("background-color", "white");
    }
});

$("#home").click(() => location.reload());
