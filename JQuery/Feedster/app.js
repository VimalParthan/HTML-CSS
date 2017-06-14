var main = function() {
    $('.notification-image').click(function(){
       $('.notification-menu').slideToggle('swing');
    });
    $('.btn').click(function(){
        $(this).toggleClass('btn-like');
    });
}

$(document).ready(main);
