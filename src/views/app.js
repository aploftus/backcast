var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('bunnies');
    this.render();
  },

  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
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
    }).render();
    // we can render each view EITHER inside initialize() or here when we invoke constructor
    // Fred prefers to render when invoking constructor, to avoid writing an initialize
    // function if we don't have to
    new VideoPlayerView({ 
      el: this.$('.player'),
      model: this.videos.at(0),
      collection: this.videos
    }).render();

    new SearchView({ 
      el: this.$('.search'),
      collection: this.videos
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
