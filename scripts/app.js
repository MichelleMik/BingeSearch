$(function() {
  $('input:submit').click(app.movie.controller.show.init)
  $('input:submit').click(app.review.controller.show.init)
  $('.review').click(function(e) {
      e.preventDefault();
      debugger
       var url = $(this).attr("href");
       $('myDropdown').empty().load(url);  
    });
}) 

app = {

}
