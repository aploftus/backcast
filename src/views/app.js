var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videoListView = new VideoListView({ collection: this.videos });
    this.videoPlayerView = new VideoPlayerView({model: this.videos.at(0)});
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    $('.list').children().detach();
    $('.list').append(this.videoListView.render());
    $('.player').children().detach();
    $('.player').append(this.videoPlayerView.render());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
