"use strict";

$(document).ready(function () {
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

    $('dd').addClass('invisible visible');
    $('dt').click(function () {
            $(this).next().toggleClass('invisible');
        });



    var left = $("#image1").html();
    var center = $("#image2").html();
    var right = $("#image3").html();

    $(".swap").first().click(function () {
        $("#image1").html($("#image2").html());
        $("#image2").html(left);
        left = $("#image1").html();
    });

    $(".swap").last().click(function () {
        $("#image3").html($("#image2").html());
        $("#image2").html(right);
        right = $("#image3").html();
    });

});

