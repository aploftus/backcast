var VideoListView = Backbone.View.extend({
  
  el: '.list',
  
  initialize: function() {
    this.render();
  },

  render: function() {
    // this.$el.children().detach();
    console.dir(this.$el.html());
    this.$el.html(this.template());
    console.dir(this.$el.html());
    // this.$el.find('.video-list').children().detach();
    // this.$el.append(this);
    // console.log(this.collection);
    // this.$el.find('.video-list').append(this.collection.map(function(video) {
    //   return new VideoListEntryView({model: video});
    // }));
    var videoListElement = this.$el;
    console.dir(videoListElement);
    this.collection.forEach(function(video) {
      var vidlistview = new VideoListEntryView({model: video});
      console.dir(vidlistview.$el.html());
      videoListElement.append(vidlistview.$el.html());

      // console.dir(vidlistview);
      // console.log('Element: ' + JSON.stringify(vidlistview));
      // console.log('Inside forEach: ' + JSON.stringify(video));
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

