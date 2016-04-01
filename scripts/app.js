$(function() {
  $('input:submit').click(app.movie.controller.show.init)
})

app = {

}

app.movie = {
  model: {
    new: (function(){
      function Movie (title, year, genre, rated, plot) {   
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rated;
        this.plot = plot;
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
        var promise = app.movie.adapter.getBy(movieTitle).then(function(whatever){
          //app.movie.controller.show.render(whatever)
        })
      },
      // put render
    }
  },
  adapter: {
    getBy: function(movieTitle) {
     return $.ajax({
      method: "GET",
      url: "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&r=json",
      }).then(function(data) {
       
        var movieData = data;
         debugger
        var movie;
        movie = new app.movie.model.new(movieData.Title, movieData.Year, movieData.Genre, movieData.Rated, movieData.Plot)
        
     })
    }
  }
}