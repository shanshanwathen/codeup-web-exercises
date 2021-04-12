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

    var swapImages = [
        {html: $("#image0").html()},   // 0  left
        {html: $("#image1").html()},   // 1  center
        {html: $("#image2").html()}    // 2  right
        ];

    function swapLeftAndCenter() {
        $("#image0").html(swapImages[1].html);
        $("#image1").html(swapImages[0].html);  // swap the images
        swapImages[0].html = $("#image0").html();
        swapImages[1].html = $("#image1").html();  // get the new html after swap
        swapImages.splice(0, 2, swapImages[0], swapImages[1]);  // replace swapImages array
    }

    function swapRightAndCenter() {
        $("#image2").html(swapImages[1].html);
        $("#image1").html(swapImages[2].html);  // swap the images
        swapImages[2].html = $("#image2").html();
        swapImages[1].html = $("#image1").html();  // get the new html after swap
        swapImages.splice(1, 2, swapImages[1], swapImages[2]);
    }
    // click left button: swap left and center
    $(".swap").first().click(swapLeftAndCenter);

    // click right button: swap right and center
    $(".swap").last().click(swapRightAndCenter);

    // click center button: swap center and left or right
    $(".swap:eq(1)").click(function () {
        // get a random number between 0 and 1
        var random = Math.floor(Math.random() * 2);
        // if get left image
        if (random === 0) {
            swapLeftAndCenter();
        } else { // get right image
            swapRightAndCenter();
        }
    });
});

