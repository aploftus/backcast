var VideoListEntryView = Backbone.View.extend({

  // el: '.video-list',
  
  // initialize: function() {
  //   // this.render();
  // },

  render: function() {
    // this.$el.children().detach();
    // this.$el.html(this.template());
    this.$el.html(this.template(this.model.attributes));
    // this.$el.append(this);
    // this.$el.find('.video-list-entry').append(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
