$(document).ready(function(){
$("#righty").hide();
$("#lefty").hide();
$("#home").hide();
$( "#centerBro img" ).click(function() {
  $( "#lefty" ).toggle();
  $( "#righty" ).toggle();
  $( "#home" ).toggle();
});
});
