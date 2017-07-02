$(document).ready(function (){
  $(".about").click(function (){
    $('html, body').animate({
      scrollTop: $(".about-us").offset().top
      }, 700);
  });

  $(".our_approch").click(function (){
    $('html, body').animate({
      scrollTop: $("#our-approch").offset().top
      }, 700);
  });

  $(".work").click(function (){
    $('html, body').animate({
      scrollTop: $("#red").offset().top
      }, 700);
  });

  $(".consult").click(function (){
    $('html, body').animate({
      scrollTop: $("#blue").offset().top
      }, 700);
  });

});
