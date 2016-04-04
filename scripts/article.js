app.article  = {
  model: {
    new: (function(){
      function Article(headLine,leadParagragh,webUrl) {   
        this.headLine = headLine;
        this.leadParagragh = leadParagragh;
        this.webUrl = webUrl;
        
      }
      return Article;
    }())
  },

  controller: {
    show: {
      init: function(event) {
        event.preventDefault();
        var movieTitle;
        movieTitle = $('#movie').val(); 
        var promise = app.article.adapter.getBy(movieTitle).then(function(result){
            app.article.controller.show.render(result)
        })
      },
      render: function(relatedArticles) {
        relatedArticles.forEach(function (article) {
          $('#articlelist').append('<li><a target="_blank" href="' + article.webUrl+ '"class ="article-link">' + article.headLine+ '</a><p>' + article.leadParagragh + '</p>'  + '</li><br>')  
        })
          $('#movie').val("");
          $('input:submit').click(function(){
            if ($('#reviewlist').children().length > 0){
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
      url: 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + movieTitle +'&api-key=f9f6d1e06824baade10a277bd9a7264c%3A3%3A53268990',
      }).then(function(data) {
        console.log(data);
      
        var articleData = data.response.docs;
        var allArticles = [];
        if (articleData=== 0) {
          alert("Sorry no review found");
        } else {
          articleData.forEach(function(i) {
            article = new app.article.model.new(i.headline.main, i.snippet, i.web_url)
            allArticles.push(article)      
          })
        }
         return allArticles;
      })
    }
  }
}



