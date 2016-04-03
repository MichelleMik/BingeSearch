
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
        $('.movie').append('<h1>' + movie.title + '</h1>'
          + '<p>' + movie.plot + '</p>'
          + '<p>' + movie.rating + '</p>'
          + '<p>' + movie.genre + '</p>'
          + '<p>' + movie.year + '</p>'
          + '<img src="' + movie.poster + '">'  
          )
         // $('input:submit').click(function(){
         //   $('.movie').val('');
         //  })
         $('input:submit').click(function(){
        if ($('#articlelist').children().length > 0){
          //debugger;
             $('#articlelist').empty();
             $('#reviewlist').empty();
             $('.movie').empty();
            }
        })
         
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