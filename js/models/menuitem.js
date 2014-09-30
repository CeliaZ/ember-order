App.Menuitem = DS.Model.extend({
  name: DS.attr('string'),
  imageURL: DS.attr('string'),
  description: DS.attr('string'),
  menulist: DS.belongsTo('menulist'),
  price: DS.attr('number')
});
