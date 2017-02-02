$(document).ready(function () {

  $('.to-shake').click(function () {
    $(".to-shake").html(function (e) {
      if (Math.floor(Math.random()*20) <= 10) {
        $(".to-shake").effect("bounce",2000,"slow");
        return "Bounce!";
      } else {
        $(".to-shake").effect("shake", 2000, "slow");
        return "Shake it up!";
      }
    });
  });

  $('button').click(function() {
    $('body').css("background-color", function() {
      let diceRoll = Math.floor(Math.random()*3);
      if (diceRoll === 0) {
        $('.result').html("WHAT HAVE YOU DONE?!");
        $('.result').effect("shake","slow");
        $('.to-shake').effect("explode","slow");
        $('button').effect("explode","slow");
        $('.result').effect("explode","slow");
        return "green";
      } else if (diceRoll === 1) {
        return "blue";
      } else if (diceRoll === 2) {
        return "yellow";
      } else if (diceRoll === 3) {
        return "orange";
      } else {
        return "black";
      }

    });
  });
});
