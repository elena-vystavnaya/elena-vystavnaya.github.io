$(document).ready(function(){
  //  $("head").append("<link rel='stylesheet' type='text/css' href='/css/style.min.css' />");
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        var margin = $("#menu").height();
        $('body,html').animate({
            scrollTop: top - margin
        }, 1000);
    });
});

