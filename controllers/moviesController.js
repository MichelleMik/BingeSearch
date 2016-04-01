function MoviesController() {
    this.$movieName = $('#movie');
  };

MoviesController.prototype.init = function() {
  var self = this
  $(':submit').click(function(event) {
    event.preventDefault();
    var movieName = self.$movieName.val(); 
  
    $.ajax({
  method: "GET",
  url: "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json",
   }).done(function(data) {
     var newMovie = new Movie(data) 
     debugger
     return newMovie;
    })
  });
  debugger
 } 



// MoviesController.prototype.search = function(init) {
  
  





// render: function Render(MoviesController.init) {
//   debugger
// }

// 




  // Search all database by movieName. Return object where i tmatches
  // Create a new instance based on object's properties and values
  // Display those

