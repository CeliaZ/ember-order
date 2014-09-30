App.OrderController = Ember.ObjectController.extend({
  total: function() {
    var sum = 0.0;
    this.get('menuitems').forEach(function(item) {
      sum += item.get('price');
    });
    return sum.toFixed(2);
  }.property('menuitems.@each')
});
