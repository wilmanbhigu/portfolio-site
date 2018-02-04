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

$(document).ready(function () {
  var post = readTextFile("http://andrewrobilliard.com/assets/blogPosts/b1");
});

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}