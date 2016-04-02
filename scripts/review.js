
app.review = {
  model: {
    new: (function(){
      function Review (headline, byline, link) {   
        this.headline = headline;
        this.byline = byline;
        this.link = link;
      }
      return Review;
    }())
  },

  controller: {
    show: {
      init: function(event) {
        event.preventDefault();
        var movieTitle;
        movieTitle = $('#movie').val(); 
        // $('#movie').val("");
        var promise = app.review.adapter.getBy(movieTitle).then(function(result){
            app.review.controller.show.render(result)
        })
      },
      render: function(review) {
        $('.review.headline').append('<a href="' + review.link + '">' + review.headline + '</a>')
      }
  }
},

  adapter: {
    getBy: function(movieTitle) { 
     return $.ajax({
      method: "GET",
      url: "http://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + movieTitle + "&api-key=a0695feee7a11df3e213eef556144231%3A1%3A53268990",
      }).then(function(data) {
        var reviewData = data;
        var allReviews = [];
        var review;
        if (data.num_results === 0) {
            alert("Sorry no review found");
         } else {
          reviewData.results.forEach(function(i) {
            review = new app.review.model.new(i.link.suggested_link_text, i.byline, i.link.url)
            allReviews.push(review)      
          })
          }
        return review;
        })
     }
    }
  }


