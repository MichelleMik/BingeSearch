$(function() {
  $('input:submit').click(app.movie.controller.show.init)
  $('input:submit').click(app.review.controller.show.init)
  $(document).on('click', '.review-link', function(e) {
      e.preventDefault();
       var url = $(this).attr("href");
       $('myDropdown').empty().load(url);  
    }); 


})



app = {

}
