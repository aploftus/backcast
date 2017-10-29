var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  selectVideo: function(video) {
    this.model = video;
    this.render();
  },

  template: templateURL('src/templates/videoPlayer.html')

});
