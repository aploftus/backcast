var VideoListView = Backbone.View.extend({
  
  el: '.list',
  
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.find('.video-list').children().detach();
    this.$el.append(this);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});

