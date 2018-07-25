$(document).ready(function(){
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


