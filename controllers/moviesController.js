// app.movie.controller = {}

// app.movie.controller.create = {

function MoviesController() {
  this.$movieName = $('#movie');
};

MoviesController.prototype.init = function() {
  var self = this
  $(':submit').click(function(event) {
    event.preventDefault();
    var movie = self.$movieName.val();

  $.ajax({
    method: "GET",
    url: "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json",
    }).done(function(data) {
      var newMovie = new app.movie.new(data) 
      return newMovie;
    })    
  }); // ends submit jquery
}; // ends prototype

// function Render(MoviesController.init) {
//   debugger
// }






  // Search all database by movieName. Return object where i tmatches
  // Create a new instance based on object's properties and values
  // Display those

