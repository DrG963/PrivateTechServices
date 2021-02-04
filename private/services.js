$(document).ready(function(){
$("#menuItem1").hide();
$("#menuItem2").hide();
$("#menuItem3").hide();
$('#item3Info').hide();
$("#item1Info").hide();
$("#item2Info").hide();
$("#homer").hide();
$( "#center img" ).click(function() {
  $( "#menuItem1" ).slideToggle();
  $( "#menuItem2" ).slideToggle();
  $( "#menuItem3" ).slideToggle();
  $( "#homer" ).slideToggle();
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
$('#laptop').click(function(e){
  $('#subDesktop').slideUp();
  $('#subLaptop').slideToggle();
  $('#subMobile').slideUp();
});
$('#mobile').click(function(e){
  $('#subDesktop').slideUp();
    $('#subLaptop').slideUp();
    $('#subMobile').slideToggle();
  });
  $('#desktop').click(function(e){
    $('#subDesktop').slideToggle();
    $('#subLaptop').slideUp();
    $('#subMobile').slideUp();
    });
  $('.allCloser').click(function(){
$('#closeMenu').slideDown();
  });
  $('#closeMenu').click(function(){
    $('.yesThis').slideUp();
    $('#closeMenu').slideUp();
      });
  $('#create').click(function(e){
    $('#subCreate').slideToggle();
    $('#subRepair').slideUp();
    });
    $('#repair').click(function(e){
      $('#subRepair').slideToggle();
      $('#subCreate').slideUp();
      });


});//end ready
