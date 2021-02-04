//INIT firebase

$(".success").hide();
$(".allFields").hide();
$(".recap").hide();
$(".contactID").hide();
$(".contactIDMobile").hide();

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}
if(isMobile === true){
  $(".contactIDMobile").show();
}else{
  $(".contactID").show();
}

var config = {
  apiKey: "AIzaSyCzxDLcycO8LDcR6L1Tm_a0MY4XnAj2boE",
  authDomain: "private-cb214.firebaseapp.com",
  databaseURL: "https://private-cb214.firebaseio.com/",
  projectId: "private-cb214",
  storageBucket: "private-cb214.appspot.com",
  messagingSenderId: "234334051380"
};

firebase.initializeApp(config);
//initialize a database called names on the fly
var entries = firebase.database().ref('entries');

//END INIT FIREBASE

function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        //alert("not validated");
        return false;
    } else {
        //alert("validated");
        return true;
    }
}

$(".theForm").submit(function(e) {
    e.preventDefault();
});

name ="";
package ="";
email=""
video=""

getter = function(){
	name = $('#name').val();
	package = $('#package').val();
	email = $('#email').val();
	video = $('#video').val();

  if(name !== "" && package !== "" && email !== "" && video !== ""){
    if(validateRecaptcha() === true){
      $(".recap").hide();
      $(".allFields").hide();
    entries.push({name: name, package: package, email: email, video: video, is_approved: "0"});
    $('#submit').hide();
    $(".success").show();
    setTimeout(function(){ $('#submit').show(); }, 2000);
    name = $('#name').val("");
  	package = $('#package').val("");
  	email = $('#email').val("");
  	video = $('#video').val("");
  }else{
    $(".recap").show();
  }}else{
    //console.log("Fill out all fields pls..")
    $(".allFields").show();
  }
}//END function

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
