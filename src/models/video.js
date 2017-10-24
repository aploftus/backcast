var Video = Backbone.Model.extend({
  
  defaults: {
    playCount: 0
  },

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    // this.set('title', video.snippet.title);
    // this.set('detail', video.snippet.description);
    
  },

  select: function() {
    this.trigger('select', this);
  },
  
  incrementPlayCount: function() {
    this.playCount += 1;
    console.log('I counted!');
  }

});
