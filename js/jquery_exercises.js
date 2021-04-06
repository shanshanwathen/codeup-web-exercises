$(document).ready(function() {
    //
    // // ID Selectors
    // var summary = $('#summary').html();
    // alert(summary);
    //
    // var title = $('#title').html();
    // alert(title);
    //
    // // Class Selectors
    // $('.codeup').css('border','1px solid red');
    //
    // Element Selectors
    $('li').css({'font-size': '20px', 'background': 'yellow'});
    $('h1').css('background', 'yellow');
    $('p').css('background', 'yellow');
    alert($('h1').html());

    // Multiple Selectors
    $('h1, p, li').css('background', 'yellow');



    // this ones neat, courtesy of Victor
    // $("*").click(function(){
    //     $('*').hide()
    // })
    // $('*').dblclick(function(){
    //     $('*').show()
    // })

});