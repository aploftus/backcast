var VideoListView = Backbone.View.extend({
  
  // el: '.list',
  
  // initialize: function() {
  //   // this.render();
  // },

  render: function() {
    // console.dir(this.$el.html());
    this.$el.children().detach();
    this.$el.html(this.template());
    // this.$el.find('.video-list').children().detach();
    // this.$el.append(this);
    // this.$el.find('.video-list').append(this.collection.map(function(video) {
    //   return new VideoListEntryView({model: video});
    // }));
    this.$el.find('.video-list').children().detach();
    this.collection.each(function(video) {
      this.$el.find('.video-list').append(new VideoListEntryView({model: video}).render());
    }, this);
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});

