App.OrderRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('order', 'dummy');
  },
  actions: {
    delete: function(item_id) {
      var store = this.store;
      store.find('menuitem', item_id).then(function (item) {
        store.find('order', 'dummy').then(function (order) {
          // using removeObject() in mutable_array.js, but only remove once
          var list = order.get('menuitems');
          var loc = list.get('length') || 0;
          while (--loc >= 0) {
            var curObject = list.objectAt(loc);
            console.log(curObject, item);
            if (curObject === item) {
              list.removeAt(loc);
              break;
            }
          }
        });
      });
    },

    submit: function(item_id) {
      this.store.find('order', 'dummy').then(function (order) {
        if (!order.get('table')) {
          $('.dish-empty-popup').popup();
          $('.dish-empty-popup').popup("open");
          return;
        }
        order.save();
        // Aug 26
        $('.dish-confirm-popup').popup();
        $('.dish-confirm-popup').popup("open");
      });
    }
  }
})
