/*
flexFont = function () {
    var divs = document.getElementsByClassName("flexFont");
    for(var i = 0; i < divs.length; i++) {
        var relFontsize = divs[i].offsetWidth*0.05;
        divs[i].style.fontSize = relFontsize+'px';
    }
};

window.onload = function(event) {
    flexFont();
};
window.onresize = function(event) {
    flexFont();
};

var el = document.getElementById('foo');
var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
var fontSize = parseFloat(style);
*/

$(document).ready(function(){

  var screenHeight = $(window).height();
  var screenWidth = $(window).width();
  console.log("height: " + screenHeight + " && width: " + screenWidth);
  var getThat = document.getElementById('topper');
  var height = getThat.offsetHeight;
  var sizer = window.getComputedStyle(getThat, null). getPropertyValue('font-size');
  var fontSize = parseFloat(sizer);

  var width = document.getElementById('topper').offsetWidth;
  getTextSize = function(){
    sizer = window.getComputedStyle(getThat, null). getPropertyValue('font-size');
    fontSize = parseFloat(sizer);
  }
  getViewPort = function(){
    screenHeight = $(window).height();
    screenWidth = $(window).width();
  }
  getWidth = function(){
    width = document.getElementById('topper').offsetWidth;
  }
  getHeight = function(){
    height = getThat.offsetHeight;
  }
  getViewPort();
  resizer = function(){
    if( screenHeight < screenWidth ){
    if(width > 980 ){
      getThat.style.fontSize = "25px";
    }
    if(width < 980){
      getThat.style.fontSize = "20px";
    }
    if(width < 775){
      getThat.style.fontSize = "17px";
    }
    if(width < 670){
      getThat.style.fontSize = "15px";
    }
    if(width < 590){
      getThat.style.fontSize = "14px";
    }
    if(width < 275){
      getThat.style.fontSize = "13px";
    }
    if(width < 170){
      getThat.style.fontSize = "11px";
    }
  }
  if( screenHeight > screenWidth){
    getThat.style.fontSize = "22px";
  }
  }
  outputWidth = function(){
    console.log("Width: " + width + " :: Size: " + fontSize);
  }
  window.onresize = function(event){
    getTextSize();
    getWidth();
    getHeight();
    console.log("height: " + height);
    resizer();
    outputWidth();
  }

  $("#topper").hide();
  $("#homer").hide();
  $( "#middleMe img" ).click(function() {
    $( "#topper" ).toggle();
    $( "#homer" ).toggle();
    getWidth();
    resizer();
  });

});
