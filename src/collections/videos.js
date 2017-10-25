var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function(query) {
    
    this.fetch({
      data: {
        q: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: 'true',
        part: 'snippet'
      },
      success: function(data) {
        console.log('we fetched!' + data);
      },
      failure: function() {
        console.log('sorry, we were unable to fetch');
      }
    });
  }
});