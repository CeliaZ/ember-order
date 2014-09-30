App.MenuitemRoute = Ember.Route.extend({
  actions: {
    back: function(list) {
      this.transitionTo('menulist', list.id)
    },

    add: function(item_id) {
      var store = this.store;
      store.find('menuitem', item_id).then(function (item) {
        store.find('order', 'dummy').then(function (order) {
          order.get('menuitems').pushObject(item);
          //Aug 26
          // alert("Added to your list!");
          $('.dish-added-popup').popup();
          $('.dish-added-popup').popup("open");
        });
      });
    }
  }
});
