var Video = Backbone.Model.extend({
  
  defaults: {
    playCount: 0
  },

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);    
  },

  select: function() {
    this.trigger('select', this);
  },
  
  incrementPlayCount: function() {
    var currPlayCount = this.get('playCount');
    this.set('playCount', currPlayCount + 1);
    // this.playCount += 1;
    console.log(this.get('playCount'));
    console.log('I counted!');
  }

});
