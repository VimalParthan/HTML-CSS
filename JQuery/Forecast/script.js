var main = function() {
  $('.day').click(function(event){
      $(event.currentTarget).next('.hourly').toggle();
      $(event.currentTarget).find('span').toggleClass('glyphicon glyphicon-minus');
  });
};

$(document).ready(main);