var main = function() {
  var cities = [
    "Bangalore",
    "Paris",
    "London",
    "New York",
    "Tokyo"
  ];
  $("#input-search-term").autocomplete({
    source: cities
  });
};
 
$(document).ready(main);