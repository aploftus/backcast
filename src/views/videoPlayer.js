var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    this.collection.on('change:playCount', this.registerChange, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },
  
  registerChange: function(e) {
    this.model = e;
    this.render();
  },

  template: templateURL('src/templates/videoPlayer.html')

});
