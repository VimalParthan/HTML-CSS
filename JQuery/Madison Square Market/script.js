$(document).ready(function(){
   $('.pull-right ul li h3').click(function(){
      $('.dropdown-menu').slideUp('fast'); 
      $(this).next('.dropdown-menu').slideToggle('swing'); 
   }); 
});