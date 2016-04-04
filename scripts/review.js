
app.review = {
  model: {
    new: (function(){
      function Review (headline, byline, link, summary) {   
        this.headline = headline;
        this.byline = byline;
        this.link = link;
        this.summary = summary
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

        var promise = app.review.adapter.getBy(movieTitle).then(function(result){
            app.review.controller.show.render(result)
        })
      },
      render: function(reviews) {
        reviews.forEach(function (review) {
          $('#reviewlist').append('<li><a target="_blank" href="' + review.link + '"class ="review-link">' + review.headline + '</a><p>' + review.summary + '</p></li><br>')  
        })
        $('#movie').val("");
  //        $('input:submit').click(function(){
  //        if ($('#articlelist').children().length == 0){
  //       //   //debugger;
  //           $('#articlelist')
  //       //      //$('#reviewlist').empty();
  //       //     $('.dropdown').empty();
  //       //     }
  //       // })
  //     } else {
  //        $('#articlelist').empty();
     }
   }
  // });
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
        // if (data.num_results === 0) {
        //  } else {
          reviewData.results.forEach(function(i) {
            review = new app.review.model.new(i.link.suggested_link_text, i.byline, i.link.url, i.summary_short)
            allReviews.push(review)      
          })
          // }
        return allReviews;
        })
     }
    }
  }



