var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function(query) {
    console.log('i searched');
    this.fetch({
      data: {
        q: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: 'true',
        part: 'snippet'
      }
    });
  },
  
  parse: function(data, options) {
    return data.items;
  }
});