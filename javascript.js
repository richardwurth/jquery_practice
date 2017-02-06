$(document).ready(function(){
  //DO NOT TOUCH//
  let dis = "";
  /* Below are elements that are meant to be hidden when the page is loaded*/
  $('.clear').hide();
  $('.buttons-container').hide();
  $('.function-buttons').hide();
  $('#display').hide();
  /* Above are elements that are meant to be hidden when the page is loaded*/

  /*Below is the code for making calculator appear when button is pushed*/
  var open = false;
  $('#topImg').click(function(){
    if (open) {
      console.log('close');
      open = false;
      setTimeout(function(){
        $('.topNav').css('width','60px');
      },900);
      setTimeout(function(){
        $('#mainPartClosed').css('height','0px');
      }, 400);
      $('#topImg').toggleClass('topNavRotate');
      $('.clear').fadeOut();
      $('.buttons-container').fadeOut();
      $('.function-buttons').fadeOut();
      $('#display').fadeOut();
    } else {
      console.log('open');
      open = true;
      $('#topImg').toggleClass('topNavRotate');
      setTimeout(function(){
        $('.topNav').css('width','300px');
        // $('#mainPartClosed').css('width','400px');
      }, 400);
      setTimeout(function(){
        $('#mainPartClosed').css('height','400px');
      }, 800);
      setTimeout(function(){
        $('.clear').fadeIn();
        $('.buttons-container').fadeIn();
        $('.function-buttons').fadeIn();
        $('#display').fadeIn();
      }, 1000);
    }
  });
  /*Above is the code for making calculator appear when button is pushed*/

  /*Below is the code for the button input of the calculator*/
  let tracker = "";
  $('#zero').click(function(){
    $('#display').text(dis += 0);
  })
  $('#one').click(function(){
    $('#display').text(dis += 1);
  })
  $('#two').click(function(){
    $('#display').text(dis += 2);
  })
  $('#three').click(function(){
    $('#display').text(dis += 3);
  })
  $('#four').click(function(){
    $('#display').text(dis += 4);
  })
  $('#five').click(function(){
    $('#display').text(dis += 5);
  })
  $('#six').click(function(){
    $('#display').text(dis += 6);
  })
  $('#seven').click(function(){
    $('#display').text(dis += 7);
  })
  $('#eight').click(function(){
    $('#display').text(dis += 8);
  })
  $('#nine').click(function(){
    $('#display').text(dis += 9);
  })
  $('#clear-button').click(function(){
    $('#display').text(dis = "");
    tracker = "";
  })
  $('#point').click(function(){
    $('#display').text(dis += ".");
  })
  $('#multiply').click(function(){
    var storage = "";
    for (var i = 0; i < dis.length; i++) {
      storage += dis[i];
    }
    $('#display').text(dis = "*");
    tracker += storage;
  })
  $('#equals').click(function(){
    $('#display').text(dis = tracker);
  })
  //ENDING//
});
