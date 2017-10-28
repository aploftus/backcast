var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // this.videos.search('bunnies');
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    // we specify the el when we make a new instance of a view, NOT inside the view
    // because then we can reuse our view modules.

    // we don't need to store these views as vars after they are attached to DOM
    new VideoListView({
      // start from this, and then search down. Don't do a full DOM search
      el: this.$('.list'),
      collection: this.videos
    });
    // we can render each view EITHER inside initialize() or here when we invoke constructor
    // Fred prefers to render when invoking constructor, to avoid writing an initialize
    // function if we don't have to
    new VideoPlayerView({ 
      el: this.$('.player'),
      model: this.videos.at(0),
      collection: this.videos
    });

    new SearchView({ 
      el: this.$('.search')
    });

    return this;
  },

  template: templateURL('src/templates/app.html')

});
