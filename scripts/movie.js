
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
        if ($('#movie').val() === "") {
            $('.movie').empty();
            $('.movie').append('<h2>Please enter a movie</h2>');
            $('.info').hide();
          } 
        else {

          movieTitle = $('#movie').val();
          $('.info').show()  
        var promise = app.movie.adapter.getBy(movieTitle).then(function(result){
          app.movie.controller.show.render(result)
        })
        }  
      },
      render: function(movie) {
        $('.movie').append('<h1 class="title">' + "- " + movie.title + " -" + '</h1>'
          + '<div class="plot">' + movie.plot + '</div>'
          + '<p>' + 'Rated: ' + movie.rating + '</p>'
          + '<p>' + 'Genre: ' + movie.genre + '</p>'
          + '<p>' + 'Year: ' + movie.year + '</p>'
          + '<img src="' + movie.poster + '">'  
          )
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
        if (movieData.Error) {
          $('#movie').empty();
          $('.movie').empty();
          $('.info').hide();
          $('.movie').append('<h2>' + movieData.Error + '</h2>')
        }
        else {
          $('.movie').empty();
          $('.info').show();
          var movie;
          movie = new app.movie.model.new(movieData.Title, movieData.Year, movieData.Genre, movieData.Rated, movieData.Plot, movieData.Poster)
        return movie;
      }
     })     
    }
  }
}