"use strict";

$(document).ready(function () {
    $('dd').addClass('invisible');
    $('.invisible').css({'visibility': 'hidden', 'margin-top': '1rem', 'margin-bottom': '1.5rem'});
    $('dt').click(function (e) {
            e.preventDefault();

            if ($('dd').css('visibility') === 'hidden') {
                $('dd').css('visibility', 'visible');
                $(this).css('background-color', '#ff0');
            } else {
                $('dd').css('visibility', 'hidden');
                $(this).css('background-color', '#fff');
            }
            $('dd').toggleClass('invisible');
        }
    );

    var html = $('body').html();
    html += '<h3 class="national-park-name">Great Smoky Mountains National Park, Tennessee</h3>';
    html += '<ul class="fun-facts"><li>Home to a large diversity of plants and animals</li>';
    html += '<li>No entrance fee to the national park</li>';
    html += '<li>About 2900 miles of streams</li>';
    html += '<li>Over 800 miles of hiking trails</li></ul>';

    html += '<h3 class="national-park-name">Grand Canyon National Park, Arizona</h3>';
    html += '<ul class="fun-facts"><li>It\'s bigger than the entire state of Rhode Island</li>';
    html += '<li>The Hopi Tribe considers the Grand Canyon a gateway to the afterlife</li>';
    html += '<li>Temperatures vary greatly within the canyon</li>';
    html += '<li>The canyon is full of hidden caves</li></ul>';

    html += '<h3 class="national-park-name">Zion National Park, Utah</h3>';
    html += '<ul class="fun-facts"><li>Zion’s elevation varies by 5000 feet</li>';
    html += '<li>Its geology features some of the tallest sandstone monoliths in the world</li>';
    html += '<li>The north face of the Great White Throne rim rises 2,350 feet from the Zion canyon floor</li>';
    html += '<li>Angels Landing is of the most daring hikes in the world</li></ul>';

    html += '<button id="high-lite">Change theme</button>'

    $('body').html(html);

    $('#high-lite').click(function () {
        $('.fun-facts').each(function (index, element) {
            $(element).children().last().css('background-color', '#ff0');
        });
    });

    $('h3').click(function () {
        $(this).each(function (index, element) {
            $(this).next().children().css('font-weight', 'bold');
        });
    });

    $('li').click(function () {
        $(this).parent().children().first().css('color', 'blue');
    });

});

