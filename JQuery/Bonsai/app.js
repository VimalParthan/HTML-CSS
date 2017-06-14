var main = function() {
  $('#top-text').keyup(function(){
    $('h1.top-caption').text($('#top-text').val());
  });
  $('#bottom-text').keyup(function(){
    $('h1.bottom-caption').text($('#bottom-text').val());     
  });
  $('#image-url').keyup(function(){
     $('.meme img').attr('src',$('#image-url').val()); 
  });    
    
};
 
$(document).ready(main);