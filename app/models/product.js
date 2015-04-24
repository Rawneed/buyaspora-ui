import DS from 'ember-data';

export default DS.Model.extend({
  name: 		DS.attr('string'),
  description: 	DS.attr('string'),
  price: 		DS.attr(''),
  salePrice: 	DS.attr(''),
  business: 	DS.belongsTo('business'),
  available: 	DS.attr('boolean')
});