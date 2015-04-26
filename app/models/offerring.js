import DS from 'ember-data';

export default DS.Model.extend({
  business: 	DS.belongsTo('business'),
  title: 		DS.attr('string'),
  cost: 		DS.attr('string'),
  per: 			DS.attr('string'),
  isProduct: 	DS.attr('boolean'),
  isService: 	DS.attr('boolean')
});