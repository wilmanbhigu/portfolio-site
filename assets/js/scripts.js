$("#about").click(function() {
  $('html,body').animate({
    scrollTop: $(".post#about").offset().top},'slow');
});

$("#blog").click(function() {
  $('html,body').animate({
    scrollTop: $(".post#blog").offset().top},'slow');
});

$(".top").click(function() {
  $('html,body').animate({
    scrollTop: $("body").offset().top},'slow');
});
