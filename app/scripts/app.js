var app = {}


$(function() { // on document ready
  movieController = new MoviesController();
  movieController.init();
  // movieController.search(returnedMovie)

});


// controller accepts user input
// controller goes to API, get me stuff
// controller brings it back 
// model creats a new instance based on stuff
// controller takes model and passes to a render or view
// render/view updates html page