
app.movie = {
  model: {
    new: (function(){
      function Movie (title, year, genre, rated, plot, poster) {   
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rated;
        this.plot = plot;
        this.poster = poster;
      }
      return Movie;
    }())
  },


  controller: {
    show: {
      init: function(event) {
        event.preventDefault();
        var movieTitle;
        movieTitle = $('#movie').val();  
        // $('#movie').val("");
        var promise = app.movie.adapter.getBy(movieTitle).then(function(result){
          app.movie.controller.show.render(result)
        })
      },
      render: function(movie) {
        $('.movie').append('<h1 class="title">' + "- " + movie.title + " -" + '</h1>'
          + '<div class="plot">' + movie.plot + '</div>'
          + '<p>' + 'Rated: ' + movie.rating + '</p>'
          + '<p>' + 'Genre: ' + movie.genre + '</p>'
          + '<p>' + 'Year: ' + movie.year + '</p>'
          + '<img src="' + movie.poster + '">'  
          )
          // $('input:submit').click(function(){
          //   $('.movie').val('');
          //  })
        //  $('input:submit').click(function(){
        // if ($('#articlelist').children().length > 0){
        //   debugger;
        //      $('#articlelist h2').children().empty();
        //      $('#reviewlist h2').children().empty();
        //      $('.movie').empty();
        //     }
        // })
         
      }
    }
  },
  adapter: {
    getBy: function(movieTitle) {
     return $.ajax({
      method: "GET",
      url: "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&r=json",
      }).then(function(data) {
        var movieData = data;
        var movie;
        movie = new app.movie.model.new(movieData.Title, movieData.Year, movieData.Genre, movieData.Rated, movieData.Plot, movieData.Poster)
        return movie;
     })
    }
  }
}