$(document).ready(function(){
   $('img').click(function(){
      $('.dropdown-menu').slideToggle('swing'); 
   });
   $('form').submit(function(){
      if($('#email').val()===''){
         $('.email-error').text('Please enter your email'); 
      }
      if($('#password').val()===''){
         $('.password-error').text('Please enter your password'); 
      } 
    return false;   
   });    
});