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
    var about = readTextFile("https://andrewrobilliard.com/assets/blogPosts/about.htm");
    $('.content').append(about);
    var count = 1;
    var post = readTextFile("https://andrewrobilliard.com/assets/blogPosts/b"+count+".htm");
    while(post != -1){
        if(count == 1){
            $('.content').append('<h1>Blog</h1>')
        }
        post = readTextFile("https://andrewrobilliard.com/assets/blogPosts/b"+count+".htm");
        $('.content').append(allText);
        count++;
    }
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
                return allText;
            }
        }
    }
    rawFile.send(null);
    return -1;
}