$(function() {


  $('.info').hide();

  // $('input:submit').click(app.movie.controller.show.init)
  // $('input:submit').click(app.review.controller.show.init)
  // $('input:submit').click(app.article.controller.show.init)
  
  $('input:submit').click(function(event){
    app.movie.controller.show.init(event, function(){
      app.review.controller.show.init(event);
      app.article.controller.show.init(event);
    })
    })
  })

app = {}

    