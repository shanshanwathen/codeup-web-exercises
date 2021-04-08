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
});