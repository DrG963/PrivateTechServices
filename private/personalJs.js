$(document).ready(function(){
$("#menuItem1").hide();
$("#menuItem2").hide();
$("#menuItem3").hide();
$('#item3Info').hide();
$("#item1Info").hide();
$("#item2Info").hide();
$("#homer").hide();
$( "#center img" ).click(function() {
  $( "#menuItem1" ).toggle();
  $( "#menuItem2" ).toggle();
  $( "#menuItem3" ).toggle();
  $( "#homer" ).toggle();
  $('#item3Info').hide();
  $("#item1Info").hide();
  $("#item2Info").hide();
});
$("#menuItem1 img").click(function(){
  $("#item2Info").hide();
  $("#item3Info").hide();
  $("#item1Info").show();
});
$("#menuItem2 img").click(function(){
  $("#item2Info").show();
  $("#item3Info").hide();
  $("#item1Info").hide();
});
$("#menuItem3 img").click(function(){
  $("#item2Info").hide();
  $("#item3Info").show();
  $("#item1Info").hide();
});
$("#item3Info").click(function(){
  $("#item2Info").hide();
  $("#item3Info").hide();
  $("#item1Info").hide();
});
$("#item2Info").click(function(){
  $("#item2Info").hide();
  $("#item3Info").hide();
  $("#item1Info").hide();
});
$("#item1Info").click(function(){
  $("#item2Info").hide();
  $("#item3Info").hide();
  $("#item1Info").hide();
});
});
