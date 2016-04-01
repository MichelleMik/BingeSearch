app.movie = {
  new: function(data) {   
    this.title = data.Title;
    this.year = data.Year;
    this.genre = data.Genre;
    this.rating = data.Rating;
    this.plot = data.Plot
  }
}