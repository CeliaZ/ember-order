var App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://ember-menu.appspot.com'
});

App.Router.map(function() {
  this.route("intro");
  this.route("menulist", { path: "/menulist/:menulist_id" });
  this.route("menuitem", { path: "/menuitem/:menuitem_id" });
  this.route("order");
});

App.PageView = Ember.View.extend({
  classNameBindings: ['templateName'],
  didInsertElement: function() {
    $.mobile.changePage(this.$());
  }
});

$(document).bind('pageinit', function() {
  $(".main-menu ul").listview();
  $(".main-menu-button").on("click", function(e) {
    e.preventDefault();
    $(".main-menu").panel("open");
  });
});
