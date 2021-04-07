"use strict"

$(document).ready(function() {
    $('h1').click(function() {
        $(this).css('background-color', 'lavender');
    });

    $('p').dblclick(function(e) {
        $(e.target).css('font-size', '18px');
    });

    $('li, a').hover(
        function() {
            $(this).css({'color': 'red', 'text-decoration': 'none'});
        },
        function() {
            $(this).css({'color': 'black', 'text-decoration': 'none'});
        }
    );
});