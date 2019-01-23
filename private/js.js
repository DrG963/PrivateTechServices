$(document).ready(function(){
$("#menuItem1").hide();
$("#menuItem2").hide();
$("#menuItem3").hide();
$("#menuItem4").hide();
$( "#mainMenu img" ).click(function() {
  $( "#menuItem1" ).toggle( "slow" );
  $( "#menuItem2" ).toggle( "slow" );
  $( "#menuItem3" ).toggle( "slow" );
  $( "#menuItem4" ).toggle( "slow" );
});
});
