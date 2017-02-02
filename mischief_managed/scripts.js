$(document).ready(function() {

  $("button").click(function(){
      var div = $(".change");
      div.toggle("fold",2000);
      $(this).effect("highlight");
      $(this).text(function(i, text) {
        return text === "I solemnly swear that I am up to no good." ? "Mischief Managed" : "I solemnly swear that I am up to no good.";
  });
    });
  });
