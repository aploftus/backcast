var SearchView = Backbone.View.extend({

  events: {
    'click button': 'performSearch',
    'keyup input': 'handleKeyup'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleKeyup: function(e) {
    if (e.keycode === 13) {
      this.performSearch();
    }
  },

  performSearch: function() {
    var query = this.$('input').val().trim();
    if (query) {
      this.collection.search(query);
    }
    this.$('input').val('');
  },

  template: templateURL('src/templates/search.html')

});
