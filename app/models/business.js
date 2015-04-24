import DS from 'ember-data';

export default DS.Model.extend({
  user:  		DS.belongsTo('user'),
  category: 	DS.belongsTo('category'),
  name:     	DS.attr('string'),
  contact: 	DS.belongsTo('contact'),
  locations: 	DS.hasMany('location'),
  products:  	DS.hasMany('product')
});