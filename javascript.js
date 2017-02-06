$(document).ready(function() {

  $('.open').click(function () {

    $('.open').toggleClass('rotate');
    $('.head').toggleClass("head-toggle");
    setTimeout(function(){
      $('.main').toggle("blind",500);
    }, 1000);
  });
  $('.main').toggleClass('flex');

})
