App.MenulistRoute = Ember.Route.extend({
  actions: {
    detail: function(id) {
      this.transitionTo('menuitem', id)
    }
  }
});
