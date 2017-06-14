var main = function() {
    $('.more-btn').click(function(){
       $(this).next('.more-menu').slideToggle('swing');    
    });
    $('.share').click(function(){
       $(this).next('.share-menu').slideToggle('swing');    
    });
    $('.notification').click(function(){
       $(this).toggleClass('active');    
    });
};

$(document).ready(main);
