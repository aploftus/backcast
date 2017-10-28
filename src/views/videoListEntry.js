var VideoListEntryView = Backbone.View.extend({
 
  events: {
    'click': 'handleClick'
  },

  initialize: function() {
    this.render();
  },
  
  handleClick: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
