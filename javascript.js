$(document).ready(function(){
  //DO NOT TOUCH//
  var open = false;
  $('#topImg').click(function(){
    if (open) {
      console.log('close');
      open = false;
      setTimeout(function(){
        $('#topImg').toggleClass('topNavRotate');
        $('.topNav').css('width','50px');
      }, 500);
      $('#mainPartClosed').css('height','0px');
    } else {
      console.log('open');
      open = true;
      $('#topImg').toggleClass('topNavRotate');
      $('.topNav').css('width','300px');
      setTimeout(function(){
        $('#mainPartClosed').css('height','400px');
        // $('#mainPartClosed').css('width','400px');
      }, 300);
    }
  });
  //ENDING//
});
