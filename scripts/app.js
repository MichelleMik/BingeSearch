$(function() {
  $('input:submit').click(app.movie.controller.show.init)
  $('input:submit').click(app.review.controller.show.init)
   $('input:submit').click(app.article.controller.show.init)
  // $('input:submit').on('click', function(e) {
  //     e.preventDefault();
  //     if (($('#articlelist').children().length > 0) || ($('#reviewlist').children().length > 0)){
  
  //       $('#articlelist').children().empty();
  //       $('#reviewlist').children().empty();
  //       $('.movie').empty();
  //     }
  // //      var url = $(this).attr("href");
  // //      debugger
  // //      $('myDropdown').empty().load(url);  
  // //   }); 
  //    })
})



app = {

}
