var VideoListView = Backbone.View.extend({
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.find('.video-list').children().detach();
    this.collection.each(function(video) {
      this.$el.find('.video-list').append(new VideoListEntryView({model: video}).render());
    }, this);
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});

