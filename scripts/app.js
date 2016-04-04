$(function() {
 
  
  $('.info').hide();

  $('input:submit').click(app.movie.controller.show.init)
  $('input:submit').click(app.review.controller.show.init)
  $('input:submit').click(app.article.controller.show.init)
  
})



app = {

}
