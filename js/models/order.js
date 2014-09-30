App.Order = DS.Model.extend({
  menuitems: DS.hasMany('menuitem'),
  table: DS.attr('string')
});
