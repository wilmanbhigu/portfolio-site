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
    var about = httpGet("https://andrewrobilliard.com/assets/blogPosts/about.htm");
    if (about != -1){
        $('.content').append(about);
    }
    
    var count = 1;
    var post = httpGet("https://andrewrobilliard.com/assets/blogPosts/b"+count+".htm");
    while(count <= 1){
        if(count == 1){
            $('.content').append('<h1>Blog</h1>')
        }
        post = httpGet("https://andrewrobilliard.com/assets/blogPosts/b"+count+".htm");
        $('.content').append(post);
        count++;
    }
});

function httpGet(theUrl)
{
    console.log("GET request placed for url: "+theUrl)
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}