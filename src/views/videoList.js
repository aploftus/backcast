var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },
  
  render: function() {
    // this detach is necessary to reload lists with new searches?
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.each(function(video) {
      this.$('.video-list').append(
        new VideoListEntryView({model: video}).render().el);
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

